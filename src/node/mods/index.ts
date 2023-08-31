export * from "../../../wasm/pkg/morax.js";

import { InitOutput, __wbg_init } from "../../../wasm/pkg/morax.js";
import { data } from "../../../wasm/pkg/morax.wasm.js";

let output: InitOutput | undefined = undefined

export async function initBundledOnce() {
  return output ??= await __wbg_init(data)
}