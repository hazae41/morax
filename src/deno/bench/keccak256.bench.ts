import { benchSync } from "npm:@hazae41/deimos";
import { keccak_256 } from "npm:@noble/hashes/sha3";
import { keccak256 } from "../mod.ts";
import { initBundledOnce } from "../mods/mod.ts";

await initBundledOnce()

const samples = 1000

const data = crypto.getRandomValues(new Uint8Array(1024))

console.log("Keccak-256")

const resultWasm = benchSync("Morax", () => {
  keccak256(data).free()
}, { samples })

const resultNoble = benchSync("npm:@noble/hashes", () => {
  keccak_256(data)
}, { samples })

resultWasm.tableAndSummary(resultNoble)

console.log()