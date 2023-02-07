import { benchSync } from "npm:@hazae41/deimos"
import CRC32 from "npm:crc-32"
import { Crc32Hasher, initBundledOnce } from "../mods/mod.ts"

await initBundledOnce()

const samples = 100

const data = new Uint8Array(1024)
crypto.getRandomValues(data)

const resultWasm = benchSync("wasm", () => {
  const hasher = new Crc32Hasher()
  hasher.update(data)
  hasher.finalize()
}, { samples })

const resultJs = benchSync("npm crc-32", () => {
  CRC32.buf(data) >>> 0
}, { samples })

resultWasm.tableAndSummary(resultJs)