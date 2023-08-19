import { Buffer } from "https://deno.land/std@0.170.0/node/buffer.ts";
import { assert, test } from "npm:@hazae41/phobos";
import { Keccak256Hasher } from "../mod.ts";
import { Crc32Hasher, Sha1Hasher, initSyncBundledOnce } from "../mods/mod.ts";

function equals(a: Uint8Array, b: Uint8Array) {
  const ba = Buffer.from(a.buffer)
  const bb = Buffer.from(b.buffer)

  return ba.equals(bb)
}

// deno-lint-ignore require-await
test("SHA-1", async () => {
  initSyncBundledOnce()

  const hello = new TextEncoder().encode("Hello World")

  const hasher = new Sha1Hasher()
  const hasher2 = new Sha1Hasher()

  hasher.update(hello)
  hasher2.update(hello)

  const digest = hasher.finalize()
  const digest2 = hasher2.finalize()

  assert(equals(digest, digest2), `digests should be equal`)

  hasher.update(hello)
  hasher2.update(hello)

  const digest3 = hasher.finalize()
  const digest4 = hasher2.finalize()

  assert(equals(digest3, digest4), `digests should be equal`)
})

// deno-lint-ignore require-await
test("CRC32", async () => {
  initSyncBundledOnce()

  const hello = new TextEncoder().encode("Hello World")

  const hasher = new Crc32Hasher()
  const hasher2 = new Crc32Hasher()

  hasher.update(hello)
  hasher2.update(hello)

  const digest = hasher.finalize()
  const digest2 = hasher2.finalize()

  assert(digest === digest2, `digests should be equal`)

  hasher.update(hello)
  hasher2.update(hello)

  const digest3 = hasher.finalize()
  const digest4 = hasher2.finalize()

  assert(digest3 === digest4, `digests should be equal`)
})

// deno-lint-ignore require-await
test("keccak256", async () => {
  initSyncBundledOnce()

  const hello = new TextEncoder().encode("Hello World")

  const hasher = new Keccak256Hasher()
  const hasher2 = new Keccak256Hasher()

  hasher.update(hello)
  hasher2.update(hello)

  const digest = hasher.finalize()
  const digest2 = hasher2.finalize()

  assert(equals(digest, digest2), `digests should be equal`)

  hasher.update(hello)
  hasher2.update(hello)

  const digest3 = hasher.finalize()
  const digest4 = hasher2.finalize()

  assert(equals(digest3, digest4), `digests should be equal`)
})
