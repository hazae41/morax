import { assert, test } from "@hazae41/phobos"
import { Memory, Sha1Hasher, initBundledOnce } from "mods/index.js"

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

  const digest = hasher.finalize().bytes
  const digest2 = hasher2.finalize().bytes

  assert(equals(digest, digest2), `digests should be equal`)

  hasher.update(mhello)
  hasher2.update(mhello)

  const digest3 = hasher.finalize().bytes
  const digest4 = hasher2.finalize().bytes

  assert(equals(digest3, digest4), `digests should be equal`)
})
