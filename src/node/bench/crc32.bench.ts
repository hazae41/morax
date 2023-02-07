import { bench } from "@hazae41/deimos"
import CRC32 from "crc-32"
import crypto from "crypto"
import { crc32, initBundledOnce } from "mods/index.js"

await initBundledOnce()

const samples = 100

const data = new Uint8Array(1024)
crypto.getRandomValues(data)

const resultWasm = await bench("wasm", async () => {
  crc32(data)
}, { samples })

const resultJs = await bench("npm crc-32", async () => {
  CRC32.buf(data, 0) >>> 0
}, { samples })

resultWasm.tableAndSummary(resultJs)