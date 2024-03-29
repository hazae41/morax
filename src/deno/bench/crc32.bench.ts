import { benchSync } from "npm:@hazae41/deimos";
import CRC32 from "npm:crc-32";
import { Memory } from "../mod.ts";
import { crc32, initBundledOnce } from "../mods/mod.ts";

await initBundledOnce()

const samples = 1000

const data = crypto.getRandomValues(new Uint8Array(4096))
const mdata = new Memory(data)

console.log("CRC32")

const resultWasm = benchSync("Morax", () => {
  crc32(mdata)
}, { samples })

const resultJs = benchSync("npm:crc-32", () => {
  CRC32.buf(data) >>> 0
}, { samples })

resultWasm.tableAndSummary(resultJs)

console.log()