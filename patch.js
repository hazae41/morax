import { readFileSync, rmSync, writeFileSync } from "fs";

const wasm = readFileSync("./wasm/pkg/morax_bg.wasm")

writeFileSync(`./wasm/pkg/morax.wasm.js`, `export const data = "data:application/wasm;base64,${wasm.toString("base64")}";`);
writeFileSync(`./wasm/pkg/morax.wasm.d.ts`, `export const data: string;`);

const script = readFileSync(`./wasm/pkg/morax.js`, "utf8")
  .replace("async function __wbg_init", "export async function __wbg_init")
  .replace("input = new URL('morax_bg.wasm', import.meta.url);", "throw new Error();")
  .replaceAll("wasm.__wbindgen_free(r0, r1 * 1);", "")
  .replaceAll("getArrayU8FromWasm0(r0, r1).slice()", "new Slice((r0 >>> 0) / 1, r1)")
  .replaceAll("@returns {Uint8Array}", "@returns {Slice}")

const typing = readFileSync(`./wasm/pkg/morax.d.ts`, "utf8")
  .replace("export default function __wbg_init", "export function __wbg_init")
  .replaceAll("@returns {Uint8Array}", "@returns {Slice}")
  .replaceAll(": Uint8Array;", ": Slice;")

const sliceJs = `
export class Slice {

  /**
   * @param {number} ptr 
   * @param {number} len 
   */
  constructor(ptr, len) {
    this.ptr = ptr
    this.len = len
  }

  /**
   * @returns {Uint8Array}
   */
  get bytes() {
    return getUint8Memory0().subarray(this.ptr, this.ptr + this.len)
  }

}`

const sliceTs = `
export class Slice {

  readonly ptr: number

  readonly len: number

  constructor(ptr: number, len: number);

  get bytes(): Uint8Array

}`

writeFileSync(`./wasm/pkg/morax.js`, script + sliceJs)
writeFileSync(`./wasm/pkg/morax.d.ts`, typing + sliceTs)

rmSync(`./wasm/pkg/.gitignore`, { force: true });