import init from '../../wasm/pkg/morax.d.js';
export { InitInput, InitOutput, Sha1Hasher, SyncInitInput, initSync } from '../../wasm/pkg/morax.d.js';

declare function initSyncBundledOnce(): init.InitOutput;
declare function initBundledOnce(): Promise<any>;

export { initBundledOnce, initSyncBundledOnce };
