import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Ceramic } from '@potter/vessel';
import { LiveGateway } from '../live/live.gateway';
import { DocumentRecord } from '../storage/document.record';
import { DocumentStorage } from '../storage/document.storage';
import { DocumentStatePresentation } from './document-state.presentation';
import { CeramicDocumentId, CidStringCodec, DecodePipe } from '@potter/codec';
import CID from 'cids';
import { DateTime } from 'luxon';
import { DocumentState } from '@potter/vessel';

@Controller('/api/v0/ceramic')
export class DocumentController {
  private readonly logger = new Logger(DocumentController.name);
  constructor(
    private readonly ceramic: Ceramic,
    private readonly liveUpdater: LiveGateway,
    private readonly documentStorage: DocumentStorage,
  ) {}

  @Post('/')
  async create(@Body() body: any) {
    this.logger.log(`Handling CREATE`);
    const document = await this.ceramic.create(body);
    this.logger.log(
      `Created ${document.state.doctype} document ${document.id.toString()}`,
    );
    const record = new DocumentRecord();
    record.cid = document.id.cid;
    record.doctype = body.doctype;
    record.payload = body.content;
    record.createdAt = DateTime.local().toJSDate();
    record.updatedAt = DateTime.local().toJSDate();
    await this.documentStorage.save(record);
    return DocumentState.encode(document.state);
  }

  @Get('/')
  async list() {
    return this.ceramic.list();
  }

  @Get('/:cid')
  async read(@Param('cid') cidString: string) {
    if (cidString === 'undefined') {
      return {}
    } else {
      const cid = CeramicDocumentId.fromString(cidString);
      const document = await this.ceramic.load(cid);
      return DocumentState.encode(document.state);
    }
  }

  @Get('/:cid/history')
  async readMany(@Param('cid') cidString: string) {
    const cid = new CID(cidString);
    const documents = await this.ceramic.history(new CeramicDocumentId(cid));
    return JSON.stringify(documents);
  }

  @Get('/:cid/content')
  async readContent(@Param('cid') cidString: string) {
    const cid = new CID(cidString);
    const document = await this.ceramic.load(new CeramicDocumentId(cid));
    return {
      content: document.toJSON().freight?.content
    };
  }

  @Put('/:cid')
  async update(@Param('cid') cidString: string, @Body() body: any) {
    const documentId = CeramicDocumentId.fromString(cidString);
    const document = await this.ceramic.load(documentId);
    await document.update(body);
    this.liveUpdater.sendUpdate(cidString, body.content);
    return DocumentState.encode(document.state);
  }

  @Get('/:cid/state')
  async state(@Param('cid') cidString: string) {
    const documentId = CeramicDocumentId.fromString(cidString);
    try {
      const document = await this.ceramic.load(documentId);
      return new DocumentStatePresentation(document);
    } catch (e) {
      console.error(e);
      return {
        error: e.message,
      };
    }
  }

  @Post('/:cid/anchor')
  async requestAnchor(@Param('cid', new DecodePipe(CidStringCodec)) cid: CID) {
    const documentId = new CeramicDocumentId(cid);
    const document = await this.ceramic.load(documentId);
    document.requestAnchor();
    return DocumentState.encode(document.state);
  }
}
