import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestRecord } from './request.record';
import { Repository } from 'typeorm';
import CID from 'cids';
import { AnchoringStatus } from '@potter/vessel';

@Injectable()
export class RequestStorage {
  constructor(@InjectRepository(RequestRecord) private repository: Repository<RequestRecord>) {}

  page(index: number, size = 25) {
    return this.repository.find({
      skip: (index - 1) * size,
      take: size,
      order: { updatedAt: 'DESC', createdAt: 'DESC' },
    });
  }

  count() {
    return this.repository.count();
  }

  countByStatus(status: AnchoringStatus) {
    return this.repository.count({
      where: {
        status: status,
      },
    });
  }

  byCidOrFail(cid: CID) {
    return this.repository.findOneOrFail({
      where: {
        cid: cid.toString(),
      },
    });
  }

  updateStatus(records: RequestRecord[], status: AnchoringStatus): Promise<RequestRecord[]> {
    const next = records.map(r => {
      r.status = status;
      return r;
    });
    return this.saveAll(next);
  }

  allByStatus(status: AnchoringStatus): Promise<RequestRecord[]> {
    return this.repository.find({
      status: status,
    });
  }

  saveAll(records: RequestRecord[]): Promise<RequestRecord[]> {
    return this.repository.save(records);
  }

  find(cid: CID, docId: string) {
    return this.repository.findOne({
      cid: cid,
      docId: docId,
    });
  }

  save(record: RequestRecord): Promise<RequestRecord> {
    return this.repository.save(record);
  }
}
