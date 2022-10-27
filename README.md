# SHA-1 for WebAssembly

WebAssembly port of RustCrypto's [SHA-1](https://github.com/RustCrypto/block-ciphers), 
a Rust implementations of SHA-1 hashing.

```bash
npm i @hazae41/morax
```

### Use case 

This WebAssembly module is useful when you want to use SHA-1 incrementially, as WebCrypto doesn't support incremental hashing, and want good performances.

|  | Performances | Incremental hashing |
|---|---|---|
| Morax | ⭐️⭐️⭐️⭐️    | ✅ |
| WebCrypto | ⭐️⭐️⭐️⭐️⭐️     | ❌ |
| JavaScript | ⭐️⭐️⭐️  | ✅ |

### Usage

```ts
import * as Morax from "@hazae41/morax";
import { Sha1Hasher } from "@hazae41/morax";

// Wait for WASM to load
Morax.initSyncBundledOnce()

// Create a hash
const hasher = new Sha1Hasher()

// Data to be hashed
const hello = new TextEncoder().encode("Hello World")

// Update the hash with your data
hasher.update(hello)

// Grab the digest (20 bytes)
const digest = hasher.finalize()

// Update the hash another time
hasher.update(hello)

// Grab the digest (20 bytes)
const digest2 = hasher.finalize()

// digest !== digest2
console.log(digest)
console.log(digest2)
```

### Building

- Install [Deno](https://github.com/denoland/deno)

https://deno.land

- Install [binaryen](https://github.com/WebAssembly/binaryen) (for wasm-opt) and
  add it your PATH

https://github.com/WebAssembly/binaryen/releases

- Install [wasm-pack](https://github.com/rustwasm/wasm-pack)

```bash
cargo install wasm-pack
```

- Install dependencies

```bash
npm install
```

- Build wasm and module

```bash
npm run build
```
