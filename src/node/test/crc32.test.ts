import { assert, test } from "@hazae41/phobos"
import { Crc32Hasher, Memory, initBundledOnce } from "mods/index.js"

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