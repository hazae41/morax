import { Morax, Sha1Hasher } from "../../src/deno/mod.ts";

await Morax.initBundledOnce()

const hasher = new Sha1Hasher()

const hello = new TextEncoder().encode("Hello World")

hasher.update(hello)
const digest = hasher.finalize()

hasher.update(hello)
const digest2 = hasher.finalize()

console.log(digest)
console.log(digest2)