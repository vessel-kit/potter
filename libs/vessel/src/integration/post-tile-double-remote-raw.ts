import { ThreeIdContent } from '../three-id.content';
import IdentityWallet from 'identity-wallet';
import { User } from '../signor/user';
import { sleep } from './sleep.util';
import axios from 'axios';
import { TileContent } from '../tile.content';
import { ThreeIdentifier } from '../three-identifier';
import jsonPatch from 'fast-json-patch';
import { decodeThrow } from '@potter/codec';
import { DocumentState } from '../document/document.state';

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
  const user = await User.build(identityWallet.get3idProvider());

  const publicKeys = await user.publicKeys();
  const ownerKey = publicKeys.managementKey;
  const signingKey = publicKeys.signingKey;
  const encryptionKey = publicKeys.asymEncryptionKey;

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
  const state = decodeThrow(DocumentState, genesisResponse.data);
  await user.did(decodeThrow(ThreeIdentifier, `did:3:${state.log.first}`));
  return user;
}

async function main() {
  const userA = await createUser('0x1110000000000000000000000000000000000000000000000000000000000000');
  const userB = await createUser('0x2220000000000000000000000000000000000000000000000000000000000000');
  const tile = {
    doctype: 'tile' as 'tile',
    owners: [await userA.did(), await userB.did()],
    content: {},
  };
  const encodedTile = TileContent.encode(tile);
  const jwt = await userA.sign(encodedTile);
  const signedTile = {
    ...encodedTile,
    iss: await userA.did(),
    header: jwt.header,
    signature: jwt.signature,
  };
  const genesisResponse = await axios.post(`${REMOTE_URL}/api/v0/ceramic`, signedTile);
  const genesisState = decodeThrow(DocumentState, genesisResponse.data);
  console.log('genesis response', genesisResponse.data);
  const documentId = genesisState.log.first
  await sleep(61000);
  const anchoredGenesisResponse = await axios.get(`${REMOTE_URL}/api/v0/ceramic/${documentId.toString()}`);
  const anchoredGenesisState = decodeThrow(DocumentState, anchoredGenesisResponse.data)
  const log = anchoredGenesisState.log
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
  const updateRecordToSign = {
    patch: updateRecord.patch,
    prev: { '/': updateRecord.prev.valueOf().toString() },
    id: { '/': updateRecord.id.valueOf().toString() },
  }
  console.log('signing payload', updateRecordToSign);
  const jwtUpdate = await userB.sign(updateRecordToSign);
  const updateRecordA = {
    ...updateRecordToSign,
    iss: await userB.did(),
    header: jwtUpdate.header,
    signature: jwtUpdate.signature,
  };
  const updateResponse = await axios.put(`${REMOTE_URL}/api/v0/ceramic/${documentId.toString()}`, updateRecordA);
  console.log('update response', updateResponse.data);
}

main();
