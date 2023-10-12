import { assert, test } from "@hazae41/phobos"
import { Memory, Sha256Hasher, initBundledOnce, sha256 } from "mods/index.js"

function equals(a: Uint8Array, b: Uint8Array) {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)

  return ba.equals(bb)
}

test("SHA-256", async () => {
  await initBundledOnce()

  const hello = new TextEncoder().encode("Hello World")
  const mhello = new Memory(hello)

  const hasher = new Sha256Hasher()
  const hasher2 = new Sha256Hasher()

  hasher.update(mhello)
  hasher2.update(mhello)

  const digest = hasher.finalize().bytes
  const digest2 = hasher2.finalize().bytes

  assert(equals(digest, digest2), `digests should be equal`)

  hasher.update(mhello)
  hasher2.update(mhello)

  const digest3 = hasher.finalize().bytes
  const digest4 = hasher2.finalize().bytes

  assert(equals(digest3, digest4), `digests should be equal`)
})


test("Incremental vs Digest vs WebCrypto", async () => {
  await initBundledOnce()

  const hello = new TextEncoder().encode("Hello World")
  const mhello = new Memory(hello)

  const hasher = new Sha256Hasher()
  hasher.update(mhello)
  const digest = hasher.finalize().bytes

  const digest2 = sha256(mhello).bytes

  const digest3 = new Uint8Array(await crypto.subtle.digest("SHA-256", hello))

  assert(equals(digest, digest2))
  assert(equals(digest2, digest3))
})