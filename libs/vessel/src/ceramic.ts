import { ILogger } from './util/logger.interface';
import { Ipfs } from 'ipfs';
import { ConsoleLogger } from './util/console-logger';
import { DocumentRepository } from './document.repository';
import { Cloud } from './cloud/cloud';
import { DocumentService } from './document.service';
import { AnchoringService } from './anchoring.service';
import { DocumentUpdateService } from './document-update.service';
import { CeramicDocumentId } from '@potter/codec';
import { AnchoringHttpClient } from '@potter/anchoring';
import { ConnectionString } from '@potter/blockchain-connection-string';
import { Document } from './document/document';
import { ISignor } from './signor/signor.interface';
import { Context } from './context';
import { DoctypesContainer } from './doctypes-container';
import { ThreeId } from './doctypes/three-id';
import { Tile } from './doctypes/tile';
import { VesselRulesetAlpha } from './doctypes/vessel-ruleset-alpha';
import { VesselDocumentAlpha } from './doctypes/vessel-document-alpha';
import CID from 'cids';

export interface CeramicOptions {
  logger?: ILogger;
  anchoringEndpoint?: string;
  blockchainEndpoints?: ConnectionString[];
}

export class Ceramic {
  #documentRepository: DocumentRepository;
  #signor?: ISignor;

  constructor(ipfs: Ipfs, options: CeramicOptions) {
    const logger = options.logger;
    const cloud = new Cloud(logger, ipfs);
    const context = new Context(
      () => {
        if (this.#signor) {
          return this.#signor;
        } else {
          throw new Error(`No signor set`);
        }
      },
      this.load.bind(this),
      cloud.retrieve.bind(cloud),
    );
    const doctypes = new DoctypesContainer([ThreeId, Tile, VesselRulesetAlpha, VesselDocumentAlpha], context);
    const anchoring = new AnchoringHttpClient(options.anchoringEndpoint);
    const blockchainEndpoints = options.blockchainEndpoints || [];
    const anchoringService = new AnchoringService(blockchainEndpoints, anchoring, cloud);
    const documentUpdateService = new DocumentUpdateService(logger, doctypes, anchoringService, cloud);
    const documentService = new DocumentService(logger, anchoringService, cloud, documentUpdateService, context);
    this.#documentRepository = new DocumentRepository(logger, doctypes, cloud, documentService);
    logger.log(`Constructed Ceramic instance`, options);
  }

  // TODO addSignor

  static build(ipfs: Ipfs, options?: CeramicOptions): Ceramic {
    const appliedOptions = Object.assign(
      {
        logger: new ConsoleLogger('Ceramic'),
        anchoringEndpoint: 'http://localhost:3000',
        ethereumEndpoint: 'http://localhost:8545',
      },
      options,
    );
    return new Ceramic(ipfs, appliedOptions);
  }

  async create(genesis: any): Promise<Document> {
    return this.#documentRepository.create(genesis);
  }

  async load(docId: CeramicDocumentId): Promise<Document> {
    return this.#documentRepository.load(docId);
  }

  async list(): Promise<Document[]> {
    return this.#documentRepository.list();
  }
}
