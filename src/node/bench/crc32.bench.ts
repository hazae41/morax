import { bench } from "@hazae41/deimos"
import CRC32 from "crc-32"
import crypto from "crypto"
import { crc32, initBundledOnce } from "mods/index.js"
import { cpus } from "os"

await initBundledOnce()

const samples = 1000

const resultWasm = await bench(`wasm crc32`, async () => {
  const data = new Uint8Array(1024)
  crypto.webcrypto.getRandomValues(data)

  crc32(data)
}, { samples })

const resultJs = await bench(`npm:crc-32`, async () => {
  const data = new Uint8Array(1024)
  crypto.webcrypto.getRandomValues(data)

  CRC32.buf(data, 0) >>> 0
}, { samples })

console.info(`cpu:`, cpus()[0].model)
console.info(`runtime:`, `node ${process.version} (${process.arch}-${process.platform})`)
console.info()

resultWasm.tableAndSummary(resultJs)