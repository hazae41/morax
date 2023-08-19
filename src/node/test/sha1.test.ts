import { assert, test } from "@hazae41/phobos"
import { Sha1Hasher, initSyncBundledOnce } from "mods/index.js"

function equals(a: Uint8Array, b: Uint8Array) {
  const ba = Buffer.from(a.buffer)
  const bb = Buffer.from(b.buffer)

  return ba.equals(bb)
}

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
