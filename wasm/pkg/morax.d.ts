
import type { Box, Copiable, Copied } from "@hazae41/box"

/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} data
* @returns {Slice}
*/
export function keccak256(data: Box<Copiable>): Slice;
/**
* @param {Uint8Array} data
* @returns {Slice}
*/
export function ripemd160(data: Box<Copiable>): Slice;
/**
* @param {Uint8Array} data
* @returns {Slice}
*/
export function sha256(data: Box<Copiable>): Slice;
/**
* @param {Uint8Array} data
* @returns {number}
*/
export function crc32(data: Box<Copiable>): number;
/**
* @param {Uint8Array} data
* @returns {Slice}
*/
export function sha1(data: Box<Copiable>): Slice;
/**
*/
export class Crc32Hasher {

  get freed(): boolean

  [Symbol.dispose](): void

  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} data
*/
  update(data: Box<Copiable>): void;
/**
* @returns {number}
*/
  finalize(): number;
}
/**
*/
export class Keccak256Hasher {

  get freed(): boolean

  [Symbol.dispose](): void

  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} data
*/
  update(data: Box<Copiable>): void;
/**
* @returns {Slice}
*/
  finalize(): Slice;
}
/**
*/
export class Ripemd160Hasher {

  get freed(): boolean

  [Symbol.dispose](): void

  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} data
*/
  update(data: Box<Copiable>): void;
/**
* @returns {Slice}
*/
  finalize(): Slice;
}
/**
*/
export class Sha1Hasher {

  get freed(): boolean

  [Symbol.dispose](): void

  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} data
*/
  update(data: Box<Copiable>): void;
/**
* @returns {Slice}
*/
  finalize(): Slice;
}
/**
*/
export class Sha256Hasher {

  get freed(): boolean

  [Symbol.dispose](): void

  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} data
*/
  update(data: Box<Copiable>): void;
/**
* @returns {Slice}
*/
  finalize(): Slice;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly keccak256: (a: number, b: number, c: number) => void;
  readonly keccak256hasher_new: () => number;
  readonly keccak256hasher_update: (a: number, b: number, c: number) => void;
  readonly keccak256hasher_finalize: (a: number, b: number) => void;
  readonly ripemd160: (a: number, b: number, c: number) => void;
  readonly ripemd160hasher_new: () => number;
  readonly ripemd160hasher_update: (a: number, b: number, c: number) => void;
  readonly ripemd160hasher_finalize: (a: number, b: number) => void;
  readonly sha256: (a: number, b: number, c: number) => void;
  readonly sha256hasher_new: () => number;
  readonly sha256hasher_update: (a: number, b: number, c: number) => void;
  readonly sha256hasher_finalize: (a: number, b: number) => void;
  readonly crc32: (a: number, b: number) => number;
  readonly __wbg_crc32hasher_free: (a: number) => void;
  readonly crc32hasher_new: () => number;
  readonly crc32hasher_update: (a: number, b: number, c: number) => void;
  readonly crc32hasher_finalize: (a: number) => number;
  readonly sha1: (a: number, b: number, c: number) => void;
  readonly sha1hasher_new: () => number;
  readonly sha1hasher_update: (a: number, b: number, c: number) => void;
  readonly sha1hasher_finalize: (a: number, b: number) => void;
  readonly __wbg_ripemd160hasher_free: (a: number) => void;
  readonly __wbg_sha256hasher_free: (a: number) => void;
  readonly __wbg_keccak256hasher_free: (a: number) => void;
  readonly __wbg_sha1hasher_free: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;


export class Slice {

  readonly ptr: number

  readonly len: number

  constructor(ptr: number, len: number);

  /**
   * Free the bytes
   **/
  [Symbol.dispose](): void

  /**
   * Get the bytes in memory
   **/
  get bytes(): Uint8Array

  /**
   * Is the memory freed?
   **/
  get freed(): boolean

  /**
   * Free the bytes (do nothing if already freed)
   **/
  free(): void

  /**
   * Copy the bytes and free them
   **/
  copyAndDispose(): Copied

}