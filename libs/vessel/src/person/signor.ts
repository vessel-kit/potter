import * as multicodec from 'multicodec';
import { ethers } from 'ethers';
import sortKeys from 'sort-keys';
import { IdentityProvider } from './identity-provider.interface';
import { IdentityProviderWrap } from './identity-provider.wrap';
import jose from 'jose';
import { JWKMulticodecCodec } from './jwk.multicodec.codec';
import { decodePromise } from '@potter/codec';

function secp256k1PubKeyFromCompressed(compressedHex: string) {
  const publicKey = ethers.utils.computePublicKey('0x' + compressedHex.replace('0x', ''));
  const asBuffer = Buffer.from(publicKey.replace('0x04', ''), 'hex');
  // It is secp256k1 public key
  const encoded = multicodec.addPrefix(Buffer.from('e7', 'hex'), asBuffer);
  return decodePromise(JWKMulticodecCodec, encoded);
}

async function x25519publicKey(base64: string) {
  const encryptionKeyBuffer = Buffer.from(base64, 'base64');
  const encoded = multicodec.addPrefix(Buffer.from('ec', 'hex'), encryptionKeyBuffer);
  return decodePromise(JWKMulticodecCodec, encoded);
}

export class EmptyDIDSigningError extends Error {}

export class Signor {
  readonly #identityProvider: IdentityProviderWrap;
  #publicKeys: Record<string, jose.JWK.Key>;
  #did?: string;

  constructor(identityProvider: IdentityProvider) {
    this.#identityProvider = new IdentityProviderWrap(identityProvider);
    this.#publicKeys = {};
  }

  get publicKeys() {
    return this.#publicKeys;
  }

  get did() {
    return this.#did;
  }

  set did(value: string) {
    this.#did = value;
  }

  async auth(): Promise<void> {
    const result = await this.#identityProvider.authenticate({ mgmtPub: true });
    const mainKeys = result.main;
    const signingKey = await secp256k1PubKeyFromCompressed(mainKeys.signingKey);
    const managementKey = await secp256k1PubKeyFromCompressed(mainKeys.managementKey);
    const asymEncryptionKey = await x25519publicKey(mainKeys.asymEncryptionKey);
    this.#publicKeys = {
      signingKey: signingKey,
      managementKey: managementKey,
      asymEncryptionKey: asymEncryptionKey,
    };
  }

  static async build(identityProvider: IdentityProvider) {
    const signor = new Signor(identityProvider);
    await signor.auth();
    return signor;
  }

  async sign(payload: any, opts: { useMgmt: boolean } = { useMgmt: false }) {
    if (!this.did) throw new EmptyDIDSigningError(`Can not sign payload without DID`);
    payload.iss = this.did;
    payload.iat = undefined; // did-jwt is quite opinionated
    const sortedPayload = sortKeys(payload, { deep: true });
    const claimParams = { payload: sortedPayload, did: this.did, useMgmt: opts.useMgmt };
    const jwtComponents = await this.#identityProvider.signClaim(claimParams);
    const header = jwtComponents.header;
    const signature = jwtComponents.signature;
    return { header, payload, signature };
  }
}
