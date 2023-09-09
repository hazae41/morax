import { assert, test } from "@hazae41/phobos"
import { Sha256Hasher, initBundledOnce, sha256 } from "mods/index.js"

function equals(a: Uint8Array, b: Uint8Array) {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)

  return ba.equals(bb)
}

test("SHA-256", async () => {
  await initBundledOnce()

  const hello = new TextEncoder().encode("Hello World")

  const hasher = new Sha256Hasher()
  const hasher2 = new Sha256Hasher()

  hasher.update(hello)
  hasher2.update(hello)

  const digest = hasher.finalize().copyAndDispose()
  const digest2 = hasher2.finalize().copyAndDispose()

  assert(equals(digest, digest2), `digests should be equal`)

  hasher.update(hello)
  hasher2.update(hello)

  const digest3 = hasher.finalize().copyAndDispose()
  const digest4 = hasher2.finalize().copyAndDispose()

  assert(equals(digest3, digest4), `digests should be equal`)
})


test("Incremental vs Digest vs WebCrypto", async () => {
  await initBundledOnce()

  const hello = new TextEncoder().encode("Hello World")

  const hasher = new Sha256Hasher()
  hasher.update(hello)
  const digest = hasher.finalize().copyAndDispose()

  const digest2 = sha256(hello).copyAndDispose()

  const digest3 = new Uint8Array(await crypto.subtle.digest("SHA-256", hello))

  assert(equals(digest, digest2))
  assert(equals(digest2, digest3))
})