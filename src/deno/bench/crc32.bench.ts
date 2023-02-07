import { benchSync } from "npm:@hazae41/deimos"
import CRC32 from "npm:crc-32"
import { crc32, initBundledOnce } from "../mods/mod.ts"

await initBundledOnce()

const samples = 1000

const resultWasm = benchSync("wasm crc32", () => {
  const data = new Uint8Array(1024)
  crypto.getRandomValues(data)

  crc32(data)
}, { samples })

const resultJs = benchSync("npm:crc-32", () => {
  const data = new Uint8Array(1024)
  crypto.getRandomValues(data)

  CRC32.buf(data) >>> 0
}, { samples })

resultWasm.tableAndSummary(resultJs)