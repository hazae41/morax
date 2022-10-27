export * from "../../wasm/pkg/morax.js";

import * as Base64 from "https://deno.land/std@0.158.0/encoding/base64.ts";

import init, { InitOutput, initSync } from "../../wasm/pkg/morax.js";
import { wasm } from "../../wasm/pkg/morax.wasm.js";

let output: InitOutput | undefined = undefined

export async function initSyncBundledOnce() {
  return output ??= initSync(Base64.decode(wasm))
}

export async function initBundledOnce() {
  return output ??= (init as any)(Base64.decode(wasm))
}