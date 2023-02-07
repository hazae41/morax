import { createHash } from "node:crypto";
import { bench, benchSync } from "npm:@hazae41/deimos";
import { sha1 as nobleSha1 } from "npm:@noble/hashes/sha1";
import { initBundledOnce, sha1 } from "../mods/mod.ts";

await initBundledOnce()

const samples = 1000

const resultWasm = benchSync("wasm sha1", () => {
  const data = new Uint8Array(1024)
  crypto.getRandomValues(data)

  sha1(data)
}, { samples })

const resultWebCrypto = await bench("webcrypto sha1", async () => {
  const data = new Uint8Array(1024)
  crypto.getRandomValues(data)

  await crypto.subtle.digest("SHA-1", data)
}, { samples })

const resultNative = benchSync("node:crypto sha1", () => {
  const data = new Uint8Array(1024)
  crypto.getRandomValues(data)

  const hasher = createHash("sha1")
  hasher.update(data)
  hasher.digest()
}, { samples })

const resultNoble = benchSync("npm:@noble/hashes/sha1", () => {
  const data = new Uint8Array(1024)
  crypto.getRandomValues(data)

  nobleSha1(data)
}, { samples })

resultWasm.tableAndSummary(resultWebCrypto, resultNative, resultNoble)