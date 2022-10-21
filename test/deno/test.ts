import * as Morax from "../../deno/mod.ts";
import { Sha1Hasher } from "../../deno/mod.ts";

Morax.initSyncBundledOnce()

const hasher = new Sha1Hasher()

const hello = new TextEncoder().encode("Hello World")

hasher.update(hello)
const digest = hasher.finalize()

hasher.update(hello)
const digest2 = hasher.finalize()

console.log(digest)
console.log(digest2)