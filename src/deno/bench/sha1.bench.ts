import { createHash } from "node:crypto";
import { bench, benchSync } from "npm:@hazae41/deimos";
import { sha1 as nobleSha1 } from "npm:@noble/hashes/sha1";
import { initSyncBundledOnce, sha1 } from "../mods/mod.ts";

initSyncBundledOnce()

const samples = 1000

const data = crypto.getRandomValues(new Uint8Array(1024))

console.log("SHA-1")

const resultWasm = benchSync("Morax", () => {
  sha1(data)
}, { samples })

const resultWebCrypto = await bench("WebCrypto", async () => {
  await crypto.subtle.digest("SHA-1", data)
}, { samples })

const resultNative = benchSync("node:crypto", () => {
  const hasher = createHash("sha1")
  hasher.update(data)
  hasher.digest()
}, { samples })

const resultNoble = benchSync("npm:@noble/hashes", () => {
  nobleSha1(data)
}, { samples })

resultWasm.tableAndSummary(resultWebCrypto, resultNative, resultNoble)

console.log()