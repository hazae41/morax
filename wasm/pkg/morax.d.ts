/* tslint:disable */
/* eslint-disable */
/**
* @param {Memory} data
* @returns {Memory}
*/
export function keccak256(data: Memory): Memory;
/**
* @param {Memory} data
* @returns {Memory}
*/
export function ripemd160(data: Memory): Memory;
/**
* @param {Memory} data
* @returns {Memory}
*/
export function sha256(data: Memory): Memory;
/**
* @param {Memory} data
* @returns {number}
*/
export function crc32(data: Memory): number;
/**
* @param {Memory} data
* @returns {Memory}
*/
export function sha1(data: Memory): Memory;
/**
*/
export class Crc32Hasher {
  [Symbol.dispose](): void
  free(): void;
/**
*/
  constructor();
/**
* @param {Memory} data
*/
  update(data: Memory): void;
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
* @param {Memory} data
*/
  update(data: Memory): void;
/**
* @returns {Memory}
*/
  finalize(): Memory;
}
/**
*/
export class Memory {
  [Symbol.dispose](): void
  free(): void;
/**
* @param {Uint8Array} inner
*/
  constructor(inner: Uint8Array);
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;

  /**
   * Free on next tick
   **/
  freeNextTick(): Memory

  /**
   * Get the bytes in memory
   **/
  get bytes(): Uint8Array

  /**
   * Copy the bytes and free them
   **/
  copyAndDispose(): Uint8Array
}
/**
*/
export class Ripemd160Hasher {
  [Symbol.dispose](): void
  free(): void;
/**
*/
  constructor();
/**
* @param {Memory} data
*/
  update(data: Memory): void;
/**
* @returns {Memory}
*/
  finalize(): Memory;
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
* @param {Memory} data
*/
  update(data: Memory): void;
/**
* @returns {Memory}
*/
  finalize(): Memory;
}
/**
*/
export class Sha256Hasher {
  [Symbol.dispose](): void
  free(): void;
/**
*/
  constructor();
/**
* @param {Memory} data
*/
  update(data: Memory): void;
/**
* @returns {Memory}
*/
  finalize(): Memory;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly keccak256: (a: number) => number;
  readonly keccak256hasher_new: () => number;
  readonly keccak256hasher_update: (a: number, b: number) => void;
  readonly keccak256hasher_finalize: (a: number) => number;
  readonly ripemd160: (a: number) => number;
  readonly ripemd160hasher_new: () => number;
  readonly ripemd160hasher_update: (a: number, b: number) => void;
  readonly ripemd160hasher_finalize: (a: number) => number;
  readonly sha256: (a: number) => number;
  readonly sha256hasher_new: () => number;
  readonly sha256hasher_update: (a: number, b: number) => void;
  readonly sha256hasher_finalize: (a: number) => number;
  readonly crc32: (a: number) => number;
  readonly __wbg_crc32hasher_free: (a: number) => void;
  readonly crc32hasher_new: () => number;
  readonly crc32hasher_update: (a: number, b: number) => void;
  readonly crc32hasher_finalize: (a: number) => number;
  readonly __wbg_memory_free: (a: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly sha1: (a: number) => number;
  readonly sha1hasher_new: () => number;
  readonly sha1hasher_update: (a: number, b: number) => void;
  readonly sha1hasher_finalize: (a: number) => number;
  readonly __wbg_ripemd160hasher_free: (a: number) => void;
  readonly __wbg_sha256hasher_free: (a: number) => void;
  readonly __wbg_keccak256hasher_free: (a: number) => void;
  readonly __wbg_sha1hasher_free: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
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
