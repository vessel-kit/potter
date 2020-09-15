import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn } from 'typeorm';
import { uuidTransformer } from './uuid.transformer';
import { AnchoringStatus, UuidValue, IAnchoringRequest } from '@vessel-kit/anchoring';

@Entity('requests')
export class RequestRecord implements IAnchoringRequest {
  @PrimaryColumn({ generated: 'uuid', transformer: uuidTransformer })
  id: UuidValue;

  @Column({ enum: AnchoringStatus })
  status: AnchoringStatus;

  @Column('varchar')
  cid: string;

  @Column()
  docId: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @BeforeInsert()
  private beforeInsert() {
    this.id = this.id || new UuidValue();
    this.createdAt = new Date();
    this.updatedAt = this.createdAt;
  }

  @BeforeUpdate()
  private beforeUpdate() {
    this.updatedAt = new Date();
  }
}
