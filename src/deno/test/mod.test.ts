import { Buffer } from "https://deno.land/std@0.170.0/node/buffer.ts";
import { assert, test } from "npm:@hazae41/phobos";
import { Keccak256Hasher, Memory } from "../mod.ts";
import { Crc32Hasher, Sha1Hasher, initBundledOnce } from "../mods/mod.ts";

function equals(a: Uint8Array, b: Uint8Array) {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)

  return ba.equals(bb)
}

test("SHA-1", async () => {
  await initBundledOnce()

  const hello = new TextEncoder().encode("Hello World")
  const mhello = new Memory(hello)

  const hasher = new Sha1Hasher()
  const hasher2 = new Sha1Hasher()

  hasher.update(mhello)
  hasher2.update(mhello)

  const digest = hasher.finalize().copyAndDispose()
  const digest2 = hasher2.finalize().copyAndDispose()

  assert(equals(digest, digest2), `digests should be equal`)

  hasher.update(mhello)
  hasher2.update(mhello)

  const digest3 = hasher.finalize().copyAndDispose()
  const digest4 = hasher2.finalize().copyAndDispose()

  assert(equals(digest3, digest4), `digests should be equal`)
})

test("CRC32", async () => {
  await initBundledOnce()

  const hello = new TextEncoder().encode("Hello World")
  const mhello = new Memory(hello)

  const hasher = new Crc32Hasher()
  const hasher2 = new Crc32Hasher()

  hasher.update(mhello)
  hasher2.update(mhello)

  const digest = hasher.finalize()
  const digest2 = hasher2.finalize()

  assert(digest === digest2, `digests should be equal`)

  hasher.update(mhello)
  hasher2.update(mhello)

  const digest3 = hasher.finalize()
  const digest4 = hasher2.finalize()

  assert(digest3 === digest4, `digests should be equal`)
})

test("keccak256", async () => {
  await initBundledOnce()

  const hello = new TextEncoder().encode("Hello World")
  const mhello = new Memory(hello)

  const hasher = new Keccak256Hasher()
  const hasher2 = new Keccak256Hasher()

  hasher.update(mhello)
  hasher2.update(mhello)

  const digest = hasher.finalize().copyAndDispose()
  const digest2 = hasher2.finalize().copyAndDispose()

  assert(equals(digest, digest2), `digests should be equal`)

  hasher.update(mhello)
  hasher2.update(mhello)

  const digest3 = hasher.finalize().copyAndDispose()
  const digest4 = hasher2.finalize().copyAndDispose()

  assert(equals(digest3, digest4), `digests should be equal`)
})
