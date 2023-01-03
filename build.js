import { readFile, rm, writeFile } from "fs/promises";

const wasm = await readFile("./wasm/pkg/morax_bg.wasm");

await writeFile(
  `./wasm/pkg/morax.wasm.js`,
  `export const wasm = "${wasm.toString("base64")}";`
);

await writeFile(
  `./wasm/pkg/morax.wasm.d.ts`,
  `export const wasm: string;`
);

await rm(`./wasm/pkg/.gitignore`, { force: true });