import { Box, Copied } from "@hazae41/box"
import { assert, test } from "@hazae41/phobos"
import { Crc32Hasher, initBundledOnce } from "mods/index.js"

test("CRC32", async () => {
  await initBundledOnce()

  const hello = new TextEncoder().encode("Hello World")

  const hasher = new Crc32Hasher()
  const hasher2 = new Crc32Hasher()

  hasher.update(new Box(new Copied(hello)))
  hasher2.update(new Box(new Copied(hello)))

  const digest = hasher.finalize()
  const digest2 = hasher2.finalize()

  assert(digest === digest2, `digests should be equal`)

  hasher.update(new Box(new Copied(hello)))
  hasher2.update(new Box(new Copied(hello)))

  const digest3 = hasher.finalize()
  const digest4 = hasher2.finalize()

  assert(digest3 === digest4, `digests should be equal`)
})