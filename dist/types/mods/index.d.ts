import * as init from '@/../../wasm/pkg/morax.js';
import init__default from '@/../../wasm/pkg/morax.js';
export * from '@/../../wasm/pkg/morax.js';

declare function initSyncBundledOnce(): init__default.InitOutput;
declare function initBundledOnce(): Promise<any>;

export { initBundledOnce, initSyncBundledOnce };
