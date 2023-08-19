import { bench, benchSync } from "@hazae41/deimos";
import { sha1 as nobleSha1 } from '@noble/hashes/sha1';
import crypto from "crypto";
import { initBundledOnce, sha1 } from "mods/index.js";
import { cpus } from "os";

await initBundledOnce()

const samples = 1000

const data = crypto.getRandomValues(new Uint8Array(1024))

const resultWasm = benchSync("wasm sha1", () => {
  sha1(data)
}, { samples })

const resultWebCrypto = await bench("webcrypto sha1", async () => {
  await crypto.subtle.digest("SHA-1", data)
}, { samples })

const resultNative = benchSync("node:crypto sha1", () => {
  const hasher = crypto.createHash("sha1")
  hasher.update(data)
  hasher.digest()
}, { samples })

const resultNoble = benchSync("npm:@noble/hashes", () => {
  nobleSha1(data)
}, { samples })

console.info(`cpu:`, cpus()[0].model)
console.info(`runtime:`, `node ${process.version} (${process.arch}-${process.platform})`)
console.info()

resultWasm.tableAndSummary(resultWebCrypto, resultNative, resultNoble)