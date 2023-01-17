import { readFileSync, rmSync, writeFileSync } from "fs";

const wasm = readFileSync("./wasm/pkg/morax_bg.wasm");
writeFileSync(`./wasm/pkg/morax.wasm.js`, `export const wasm = "${wasm.toString("base64")}";`);
writeFileSync(`./wasm/pkg/morax.wasm.d.ts`, `export const wasm: string;`);

const script = readFileSync(`./wasm/pkg/morax.js`, "utf8")
  .replace("export { initSync }", "export { init, initSync }")
  .replace("input = new URL('morax_bg.wasm', import.meta.url);", "throw new Error();")

const typing = readFileSync(`./wasm/pkg/morax.d.ts`, "utf8")
  .replace("export default function init", "export function init")

writeFileSync(`./wasm/pkg/morax.js`, script)
writeFileSync(`./wasm/pkg/morax.d.ts`, typing)

rmSync(`./wasm/pkg/.gitignore`, { force: true });