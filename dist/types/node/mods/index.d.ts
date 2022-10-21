import { InitOutput } from '../../wasm/pkg/morax.d.js';
export { InitInput, InitOutput, Sha1Hasher, SyncInitInput, initSync } from '../../wasm/pkg/morax.d.js';

declare function initSyncBundledOnce(): InitOutput;

export { initSyncBundledOnce };
