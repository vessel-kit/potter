import CID from 'cids';
import { CeramicDocumentId } from '../ceramic-document-id';
import { CeramicDocumentIdStringCodec } from './ceramic-document-id.string.codec';
import { decodePromise } from '../decodePromise';

const cid = new CID('QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D');

test('constructor', () => {
  const id = new CeramicDocumentId(cid);
  expect(CeramicDocumentIdStringCodec.encode(id)).toEqual(`ceramic://${cid.toString()}`);
});

test('.build from /ceramic', async () => {
  const id = await decodePromise(CeramicDocumentIdStringCodec, `/ceramic/${cid.toString()}`)
  expect(id.cid).toEqual(cid);
});

test('.build from ceramic://', async () => {
  const id = await decodePromise(CeramicDocumentIdStringCodec, `ceramic://${cid.toString()}`)
  expect(id.cid).toEqual(cid);
});
