import { benchSync } from "npm:@hazae41/deimos"
import CRC32 from "npm:crc-32"
import { crc32, initBundledOnce } from "../mods/mod.ts"

await initBundledOnce()

const samples = 1000

const data = crypto.getRandomValues(new Uint8Array(1024))

const resultWasm = benchSync("wasm crc32", () => {
  crc32(data)
}, { samples })

const resultJs = benchSync("npm:crc-32", () => {
  CRC32.buf(data) >>> 0
}, { samples })

resultWasm.tableAndSummary(resultJs)