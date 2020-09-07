import * as t from 'io-ts';
import { DocIdCidCodec, CidObjectCodec, FastPatchOperationJsonCodec } from '@vessel-kit/codec';
import { ThreeIdentifier } from '../three-identifier';

export const UpdateRecordWaiting = t.type({
  patch: t.array(FastPatchOperationJsonCodec),
  prev: CidObjectCodec,
  id: CidObjectCodec.pipe(DocIdCidCodec),
});

export const SignedRecord = t.type({
  iss: t.string.pipe(ThreeIdentifier),
  iat: t.undefined,
  header: t.UnknownRecord,
  signature: t.string,
});

export const UpdateRecord = t.intersection([UpdateRecordWaiting, SignedRecord]);
