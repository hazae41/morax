export * from "../../wasm/pkg/morax.js";

import { InitOutput, initSync } from "../../wasm/pkg/morax.js";
import { wasm } from "../../wasm/pkg/morax.wasm.js";

let output: InitOutput | undefined = undefined

export function initSyncBundledOnce() {
  return output ??= initSync(Buffer.from(wasm, "base64"))
}

