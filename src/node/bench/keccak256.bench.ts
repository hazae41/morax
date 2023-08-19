import { benchSync } from "@hazae41/deimos";
import { keccak_256 } from '@noble/hashes/sha3';
import crypto from "crypto";
import { initBundledOnce, keccak256 } from "mods/index.js";
import { cpus } from "os";

await initBundledOnce()

const samples = 1000

const data = crypto.getRandomValues(new Uint8Array(1024))

const resultWasm = benchSync("wasm keccak256", () => {
  keccak256(data)
}, { samples })


const resultNoble = benchSync("npm:@noble/hashes", () => {
  keccak_256(data)
}, { samples })

console.info(`cpu:`, cpus()[0].model)
console.info(`runtime:`, `node ${process.version} (${process.arch}-${process.platform})`)
console.info()

resultWasm.tableAndSummary(resultNoble)