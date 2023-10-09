import { Box, Copied } from "@hazae41/box"
import { assert, test } from "@hazae41/phobos"
import { Ripemd160Hasher, initBundledOnce } from "mods/index.js"

function equals(a: Uint8Array, b: Uint8Array) {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)

  return ba.equals(bb)
}

test("RIPEMD-160", async () => {
  await initBundledOnce()

  const hello = new TextEncoder().encode("Hello World")

  const hasher = new Ripemd160Hasher()
  const hasher2 = new Ripemd160Hasher()

  hasher.update(new Box(new Copied(hello)))
  hasher2.update(new Box(new Copied(hello)))

  const digest = hasher.finalize().copyAndDispose().bytes
  const digest2 = hasher2.finalize().copyAndDispose().bytes

  assert(equals(digest, digest2), `digests should be equal`)

  hasher.update(new Box(new Copied(hello)))
  hasher2.update(new Box(new Copied(hello)))

  const digest3 = hasher.finalize().copyAndDispose().bytes
  const digest4 = hasher2.finalize().copyAndDispose().bytes

  assert(equals(digest3, digest4), `digests should be equal`)
})
