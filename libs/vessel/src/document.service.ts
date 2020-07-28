import { ILogger } from './util/logger.interface';
import { CeramicDocumentId } from '@potter/codec';
import CID from 'cids';
import { AnchoringStatus } from '@potter/anchoring';
import { Cloud } from './cloud/cloud';
import { AnchoringService } from './anchoring.service';
import { DocumentUpdateService } from './document-update.service';
import { FrozenSubject, FrozenSubjectRead } from './util/frozen-subject';
import { RecordWrap, normalizeRecord } from '@potter/codec';
import { MessageTyp } from './cloud/message-typ';
import { filter, mergeMap } from 'rxjs/operators';
import { IDocumentService } from './document/document.service.interface';
import { merge, Observable } from 'rxjs';
import { IContext } from './context';
import { Snapshot } from './document/document.interface';
import { IDoctype } from './document/doctype';

export class UnhandledAnchoringStatus extends Error {
  constructor(status: never) {
    super(`Can not handle anchoring status ${status}`);
  }
}

export class DocumentService implements IDocumentService {
  #logger: ILogger;
  #anchoring: AnchoringService;
  #updateService: DocumentUpdateService;
  #cloud: Cloud;
  #context: IContext;

  constructor(
    logger: ILogger,
    anchoring: AnchoringService,
    cloud: Cloud,
    updateService: DocumentUpdateService,
    context: IContext,
  ) {
    this.#logger = logger.withContext(DocumentService.name);
    this.#anchoring = anchoring;
    this.#updateService = updateService;
    this.#cloud = cloud;
    this.#context = context;
  }

  get context() {
    return this.#context;
  }

  handleUpdate<A>(docId: CeramicDocumentId, state: Snapshot<A>): void {
    if (!docId.cid.equals(state.log.last)) {
      this.#cloud.bus.publishHead(docId, state.log.last);
    }
  }

  async update<State, Shape>(
    record: any,
    handler: IDoctype<State, Shape>,
    state$: FrozenSubject<Snapshot<State>>,
  ): Promise<void> {
    const cid = await this.#cloud.store(normalizeRecord(record));
    const recordWrap = new RecordWrap(record, cid);
    const next = await this.#updateService.applyUpdate(recordWrap, handler, state$.value);
    const documentId = new CeramicDocumentId(state$.value.log.first);
    this.#anchoring.requestAnchor(documentId, cid);
    state$.next(next);
  }

  requestAnchor(docId: CeramicDocumentId, cid: CID): void {
    this.#logger.debug(`Requesting anchor for ${docId.toString()}?version=${cid.toString()}`);
    this.#anchoring.requestAnchor(docId, cid);
  }

  externalUpdates$<State, Shape>(
    docId: CeramicDocumentId,
    handler: IDoctype<State, Shape>,
    state$: FrozenSubjectRead<Snapshot<State>>,
  ): Observable<Snapshot<State>> {
    this.#cloud.bus.request(docId.toString());
    return merge(this.cloudUpdates$(docId, handler, state$), this.anchorUpdates$(docId, handler, state$));
  }

  private cloudUpdates$<State, Shape>(
    docId: CeramicDocumentId,
    handler: IDoctype<State, Shape>,
    state$: FrozenSubjectRead<Snapshot<State>>,
  ): Observable<Snapshot<State>> {
    return this.#cloud.bus.message$.pipe(
      filter((message) => message.id === docId.toString()),
      mergeMap(async (message) => {
        if (message.typ === MessageTyp.RESPONSE || message.typ === MessageTyp.UPDATE) {
          return this.applyHead(message.cid, handler, state$);
        }
      }),
    );
  }

  private async applyHead<State, Shape>(
    recordCid: CID,
    handler: IDoctype<State, Shape>,
    state$: FrozenSubjectRead<Snapshot<State>>,
  ): Promise<Snapshot<State>> {
    const nextState = await this.#updateService.applyHead(recordCid, handler, state$.value);
    if (nextState) {
      return nextState;
    } else {
      return state$.value;
    }
  }

  // TODO Fix anchoring, not quite working as should
  private anchorUpdates$<State, Shape>(
    docId: CeramicDocumentId,
    handler: IDoctype<State, Shape>,
    state$: FrozenSubjectRead<Snapshot<State>>,
  ): Observable<Snapshot<State>> {
    return this.#anchoring.anchorStatus$(docId).pipe(
      mergeMap(async (observation) => {
        this.#logger.debug(`Received anchoring update for ${docId.toString()}`, observation);
        switch (observation.status) {
          case AnchoringStatus.NOT_REQUESTED:
            return state$.value;
          case AnchoringStatus.ANCHORED:
            const anchorRecordCID = observation.anchorRecord;
            return await this.applyHead(anchorRecordCID, handler, state$);
          case AnchoringStatus.PENDING:
            return {
              ...state$.value,
              anchor: {
                status: AnchoringStatus.PENDING as AnchoringStatus.PENDING,
                scheduledAt: observation.scheduledAt,
              },
            };
          case AnchoringStatus.PROCESSING:
            return {
              ...state$.value,
              anchor: {
                status: AnchoringStatus.PROCESSING as AnchoringStatus.PROCESSING,
              },
            };
          case AnchoringStatus.FAILED:
            return {
              ...state$.value,
              anchor: {
                status: AnchoringStatus.FAILED as AnchoringStatus.FAILED,
              },
            };
          default:
            throw new UnhandledAnchoringStatus(observation);
        }
      }),
    );
  }
}
