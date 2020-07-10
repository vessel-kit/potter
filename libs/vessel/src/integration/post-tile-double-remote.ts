import { ThreeIdContent } from '../three-id.content';
import IdentityWallet from 'identity-wallet';
import { Signor } from '../person/signor';
import { sleep } from './sleep.util';
import axios from 'axios';
import CID from 'cids';
import { Chain } from '../chain';
import { TileContent } from '../tile.content';
import { ThreeIdentifier } from '../three-identifier';
import jsonPatch from 'fast-json-patch';

const REMOTE_URL = 'http://localhost:3001';

const cborSortCompareFn = (a: string, b: string): number => a.length - b.length || a.localeCompare(b);

function sortPropertiesDeep(obj: any, compareFn: (a: any, b: any) => number = cborSortCompareFn): any {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }
  return Object.keys(obj)
    .sort(compareFn)
    .reduce<Record<string, any>>((acc, prop) => {
      acc[prop] = sortPropertiesDeep(obj[prop], compareFn);
      return acc;
    }, {});
}

async function createUser(seed: string) {
  const identityWallet = new IdentityWallet(() => true, {
    seed: seed,
  });
  const user = await Signor.build(identityWallet.get3idProvider());

  const ownerKey = user.publicKeys.managementKey;
  const signingKey = user.publicKeys.signingKey;
  const encryptionKey = user.publicKeys.asymEncryptionKey;

  const doc1 = new ThreeIdContent(
    [ownerKey],
    new Map([
      ['signing', signingKey],
      ['encryption', encryptionKey],
    ]),
  );
  const content = ThreeIdContent.codec.encode(doc1);
  const genesisRecord = {
    doctype: '3id',
    ...content,
  };
  const genesisResponse = await axios.post(`${REMOTE_URL}/api/v0/ceramic`, genesisRecord);
  const documentId = new CID(genesisResponse.data.docId);
  user.did = `did:3:${documentId.valueOf()}`;
  return user;
}

async function main() {
  const userA = await createUser('0x1110000000000000000000000000000000000000000000000000000000000000');
  const userB = await createUser('0x2220000000000000000000000000000000000000000000000000000000000000');
  const tile = {
    doctype: 'tile' as 'tile',
    owners: [ThreeIdentifier.fromString(userA.did), ThreeIdentifier.fromString(userB.did)],
    content: {},
  };
  const encodedTile = TileContent.encode(tile);
  const jwt = await userA.sign(sortPropertiesDeep(encodedTile));
  const signedTile = {
    ...encodedTile,
    iss: userA.did,
    header: jwt.header,
    signature: jwt.signature,
  };
  const genesisResponse = await axios.post(`${REMOTE_URL}/api/v0/ceramic`, signedTile);
  console.log('genesis response', genesisResponse.data);
  const documentId = new CID(genesisResponse.data.docId);
  await sleep(61000);
  const anchoredGenesisResponse = await axios.get(`${REMOTE_URL}/api/v0/ceramic/${documentId.toString()}`);
  const log = new Chain(anchoredGenesisResponse.data.log.map((cid) => new CID(cid)));
  const doc2 = Object.assign({}, tile);
  doc2.content = {
    foo: '33',
  };
  const delta = jsonPatch.compare(tile, doc2);
  console.log(delta);
  const updateRecord = {
    patch: delta,
    prev: log.last,
    id: documentId,
  };
  const updateRecordToSign = sortPropertiesDeep({
    patch: updateRecord.patch,
    prev: { '/': updateRecord.prev.valueOf().toString() },
    id: { '/': updateRecord.id.valueOf().toString() },
  });
  console.log('signing payload', updateRecordToSign);
  const jwtUpdate = await userB.sign(updateRecordToSign);
  const updateRecordA = {
    ...updateRecordToSign,
    iss: userB.did,
    header: jwtUpdate.header,
    signature: jwtUpdate.signature,
  };
  const updateResponse = await axios.put(`${REMOTE_URL}/api/v0/ceramic/${documentId.toString()}`, updateRecordA);
  console.log('update response', updateResponse.data);
}

main();
