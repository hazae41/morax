/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} data
* @returns {Uint8Array}
*/
export function keccak256(data: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} data
* @returns {Uint8Array}
*/
export function sha1(data: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} data
* @returns {number}
*/
export function crc32(data: Uint8Array): number;
/**
*/
export class Crc32Hasher {
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
  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} data
*/
  update(data: Uint8Array): void;
/**
* @returns {Uint8Array}
*/
  finalize(): Uint8Array;
}
/**
*/
export class Sha1Hasher {
  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} data
*/
  update(data: Uint8Array): void;
/**
* @returns {Uint8Array}
*/
  finalize(): Uint8Array;
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
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
