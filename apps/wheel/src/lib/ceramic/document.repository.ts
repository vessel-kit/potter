import { MessageBus } from './message-bus';
import { FileStore } from './file-store';
import { Doctype } from './doctype';
import { DocumentStore } from './document.store';
import { ThreeIdHandler } from './handlers/three-id.handler';
import { HandlerContainer } from './handler-container';
import { Document } from './document';
import CID from 'cids';
import { Ruleset001Handler } from './handlers/ruleset-0.0.1.handler';
import Joi from '@hapi/joi';
import { DocumentStorage } from '../../storage/document.storage';

const createSchema = Joi.object({
  doctype: Joi.string()
    .allow('vessel/ruleset/0.0.1')
    .required()
    .description('Document type'),
});

export class DocumentRepository {
  private readonly store: DocumentStore;
  private readonly handlers = new HandlerContainer();

  constructor(
    private readonly messageBus: MessageBus,
    private readonly fileStore: FileStore,
    documentStorage: DocumentStorage,
  ) {
    this.handlers = this.handlers
      .set(Doctype.THREE_ID, new ThreeIdHandler())
      .set(Doctype.RULESET_0_0_1, new Ruleset001Handler());
    this.store = new DocumentStore(documentStorage);
  }

  async stats() {
    const documentsCount = await this.store.count();
    return {
      documentsCount: documentsCount,
    };
  }

  async create(genesisRecord: any): Promise<Document> {
    await createSchema.validateAsync(genesisRecord, { allowUnknown: true });
    const cid = await this.fileStore.put(genesisRecord);
    // Document.load
    const document = new Document(
      cid,
      genesisRecord,
      [],
      this.fileStore,
      this.messageBus,
    );
    await this.store.put(document);
    return document;
  }

  async load(cid: CID) {
    const documentRecord = await this.store.get(cid);
    if (documentRecord) {
      return new Document(
        cid,
        documentRecord.payload,
        [],
        this.fileStore,
        this.messageBus,
      );
    } else {
      // Retrieve genesis record
      const genesisRecord = await this.fileStore.get(cid);
      // const doctype = doctypeFromString(genesisRecord.doctype);
      // const handler = this.handlers.get(doctype);
      const document = new Document(
        cid,
        genesisRecord,
        [],
        this.fileStore,
        this.messageBus,
      );
      await this.store.put(document);
      return document;
    }
  }

  async list() {
    return (await this.store.list()).map(e => {
      return {...e,
        docId: e.cid.toString()
      }
    })
  }

  async content(cid: CID): Promise<string> {
    const documentRecord = await this.store.get(cid);
    return documentRecord.payload;
  }
}
