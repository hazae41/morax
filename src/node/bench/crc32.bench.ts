import { bench } from "@hazae41/deimos"
import CRC32 from "crc-32"
import crypto from "crypto"
import { crc32, initBundledOnce } from "mods/index.js"
import { cpus } from "os"

await initBundledOnce()

const samples = 10_000

const data = crypto.getRandomValues(new Uint8Array(1024))

console.log("CRC32")

const resultWasm = await bench(`Morax`, async () => {
  crc32(data)
}, { samples })

const resultJs = await bench(`npm:crc-32`, async () => {
  CRC32.buf(data, 0) >>> 0
}, { samples })

console.info(`cpu:`, cpus()[0].model)
console.info(`runtime:`, `node ${process.version} (${process.arch}-${process.platform})`)
console.info()

resultWasm.tableAndSummary(resultJs)

console.log()