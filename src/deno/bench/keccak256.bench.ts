import { benchSync } from "npm:@hazae41/deimos";
import { keccak_256 } from "npm:@noble/hashes/sha3";
import { Memory, keccak256 } from "../mod.ts";
import { initBundledOnce } from "../mods/mod.ts";

await initBundledOnce()

const samples = 1000

const data = crypto.getRandomValues(new Uint8Array(4096))
const mdata = new Memory(data)

console.log("Keccak-256")

const resultWasm = benchSync("Morax", () => {
  keccak256(mdata).free()
}, { samples })

const resultNoble = benchSync("npm:@noble/hashes", () => {
  keccak_256(data)
}, { samples })

resultWasm.tableAndSummary(resultNoble)

console.log()