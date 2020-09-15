// Type definitions for multicodec 1.0
// Project: https://github.com/multiformats/js-multicodec#readme
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9
/// <reference types="node" />

declare module 'multicodec' {
  export as namespace Multicodec;

  /**
   * Prefix a Uint8Array with a multicodec_packed.
   */
  export function addPrefix(multicodecStrOrCode: string | number | Uint8Array, data: Uint8Array): Uint8Array;

  /**
   * Decapsulate the multicodec_packed prefix from the data.
   */
  export function rmPrefix(data: Uint8Array): Uint8Array;

  /**
   * Get the codec of the prefixed data.
   */
  export function getCodec(prefixedData: Uint8Array): string;

  /**
   * Get the name of the codec.
   */
  export function getName(codec: number): string;

  /**
   * Get the code of the codec
   */
  export function getNumber(name: string): number;

  /**
   * Get the code of the prefixed data.
   */
  export function getCode(prefixedData: Uint8Array): number;

  /**
   * Get the code as varint of a codec name.
   */
  export function getCodeVarint(codecName: string): Uint8Array;

  /**
   * Get the varint of a code.
   */
  export function getVarint(code: number): number[];

  /**
   * Human friendly names for printing, e.g. in error messages
   */
  export const print: Record<number, string>;

  /**
   * Map of codecConstant to code
   */
  export * from './constants';
}
