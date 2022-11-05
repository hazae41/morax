/* tslint:disable */
/* eslint-disable */
/**
*/
declare class Sha1Hasher {
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

type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_sha1hasher_free: (a: number) => void;
  readonly sha1hasher_new: () => number;
  readonly sha1hasher_update: (a: number, b: number, c: number) => void;
  readonly sha1hasher_finalize: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
declare function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;

export { InitInput, InitOutput, Sha1Hasher, SyncInitInput, init as default, initSync };
