/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} data
* @returns {Slice}
*/
export function keccak256(data: Uint8Array): Slice;
/**
* @param {Uint8Array} data
* @returns {Slice}
*/
export function sha1(data: Uint8Array): Slice;
/**
* @param {Uint8Array} data
* @returns {number}
*/
export function crc32(data: Uint8Array): number;
/**
*/
export class Crc32Hasher {

  [Symbol.dispose](): void

  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} data
*/
  update(data: Uint8Array): void;
/**
* @returns {number}
*/
  finalize(): number;
}
/**
*/
export class Keccak256Hasher {

  [Symbol.dispose](): void

  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} data
*/
  update(data: Uint8Array): void;
/**
* @returns {Slice}
*/
  finalize(): Slice;
}
/**
*/
export class Sha1Hasher {

  [Symbol.dispose](): void

  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} data
*/
  update(data: Uint8Array): void;
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
  readonly sha1: (a: number, b: number, c: number) => void;
  readonly sha1hasher_new: () => number;
  readonly sha1hasher_update: (a: number, b: number, c: number) => void;
  readonly sha1hasher_finalize: (a: number, b: number) => void;
  readonly crc32: (a: number, b: number) => number;
  readonly __wbg_crc32hasher_free: (a: number) => void;
  readonly crc32hasher_new: () => number;
  readonly crc32hasher_update: (a: number, b: number, c: number) => void;
  readonly crc32hasher_finalize: (a: number) => number;
  readonly __wbg_sha1hasher_free: (a: number) => void;
  readonly __wbg_keccak256hasher_free: (a: number) => void;
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
   * Get the bytes in memory
   **/
  get bytes(): Uint8Array

  /**
   * Free the bytes
   **/
  free(): void

  /**
   * Copy the bytes and free them
   **/
  copy(): Uint8Array

  /**
   * Free the bytes
   **/
  [Symbol.dispose](): void

}