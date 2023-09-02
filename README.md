<div>
  <img align="right" width="128" src="https://user-images.githubusercontent.com/4405263/216618885-198b5507-6e8b-4a38-aef0-dbca5957c744.png"/>
  <p></p>
</div>

# Morax

WebAssembly port of SHA-1, Keccak-256, and CRC-32 hashing algorithms

```bash
npm i @hazae41/morax
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/morax) • [**Deno Module 🦖**](https://deno.land/x/morax) • [**Next.js CodeSandbox 🪣**](https://codesandbox.io/p/github/hazae41/morax-example-next)

## Algorithms
- Incremental SHA-1 from RustCrypto (sha1)
- Incremental Keccak-256 from RustCrypto (sha3)
- Incremental CRC-32 from Sam Rijs (crc32fast)

## Features
- Reproducible building
- Pre-bundled and streamed
- Zero-copy memory slices

## Benchmarks

### SHA-1

#### Deno

```
cpu: Apple M1 Max
runtime: deno 1.30.3 (arm64-darwin)

┌────────────────────────┬─────────────────┬────────────┬─────────────┐
│ (idx)                  │ average         │ minimum    │ maximum     │
├────────────────────────┼─────────────────┼────────────┼─────────────┤
│ wasm sha1              │ "9.41 μs/iter"  │ "6.88 μs"  │ "199.92 μs" │
│ webcrypto sha1         │ "24.46 μs/iter" │ "14.92 μs" │ "360.38 μs" │
│ node:crypto sha1       │ "20.75 μs/iter" │ "13.08 μs" │ "3.56 ms"   │
│ npm:@noble/hashes/sha1 │ "19.92 μs/iter" │ "15.87 μs" │ "759.75 μs" │
└────────────────────────┴─────────────────┴────────────┴─────────────┘

Summary
- wasm sha1 is 2.60x faster than WebCrypto
- wasm sha1 is 2.21x faster than node:crypto
- wasm sha1 is 2.12x faster than npm:@noble/hashes
```

#### Node

```
cpu: Apple M1 Max
runtime: node v18.12.1 (arm64-darwin)

┌────────────────────────┬─────────────────┬───────────┬─────────────┐
│        (index)         │     average     │  minimum  │   maximum   │
├────────────────────────┼─────────────────┼───────────┼─────────────┤
│       wasm sha1        │ '6.07 μs/iter'  │ '5.37 μs' │ '23.71 μs'  │
│     webcrypto sha1     │ '12.34 μs/iter' │ '9.04 μs' │ '852.58 μs' │
│    node:crypto sha1    │ '3.48 μs/iter'  │ '2.83 μs' │ '88.50 μs'  │
│ npm:@noble/hashes/sha1 │ '7.34 μs/iter'  │ '6.37 μs' │ '746.42 μs' │
└────────────────────────┴─────────────────┴───────────┴─────────────┘

Summary
- wasm sha1 is 2.03x faster than WebCrypto
- wasm sha1 is 0.57x faster than node:crypto
- wasm sha1 is 1.21x faster than npm:@noble/hashes
```

### Keccak-256

#### Deno

```
┌───────────────────┬─────────────────┬────────────┬─────────────┐
│ (idx)             │ average         │ minimum    │ maximum     │
├───────────────────┼─────────────────┼────────────┼─────────────┤
│ wasm keccak256    │ "4.91 μs/iter"  │ "4.37 μs"  │ "25.37 μs"  │
│ npm:@noble/hashes │ "60.01 μs/iter" │ "57.83 μs" │ "195.50 μs" │
└───────────────────┴─────────────────┴────────────┴─────────────┘

Summary
- wasm keccak256 is 12.22x faster than npm:@noble/hashes
```

#### Node

```
cpu: Apple M1 Max
runtime: node v20.3.1 (arm64-darwin)

┌───────────────────┬─────────────────┬────────────┬─────────────┐
│      (index)      │     average     │  minimum   │   maximum   │
├───────────────────┼─────────────────┼────────────┼─────────────┤
│  wasm keccak256   │ '3.10 μs/iter'  │ '2.92 μs'  │ '104.00 μs' │
│ npm:@noble/hashes │ '62.28 μs/iter' │ '60.21 μs' │ '166.33 μs' │
└───────────────────┴─────────────────┴────────────┴─────────────┘

Summary
- wasm keccak256 is 20.08x faster than npm:@noble/hashes
```

### CRC32

#### Deno

```
cpu: Apple M1 Max
runtime: deno 1.30.3 (arm64-darwin)

┌────────────┬────────────────┬───────────┬─────────────┐
│ (idx)      │ average        │ minimum   │ maximum     │
├────────────┼────────────────┼───────────┼─────────────┤
│ wasm crc32 │ "3.04 μs/iter" │ "2.17 μs" │ "198.04 μs" │
│ npm:crc-32 │ "4.36 μs/iter" │ "2.04 μs" │ "97.96 μs"  │
└────────────┴────────────────┴───────────┴─────────────┘

Summary
- wasm crc32 is 1.44x faster than npm:crc-32
```

#### Node

```
cpu: Apple M1 Max
runtime: node v18.12.1 (arm64-darwin)

┌────────────┬────────────────┬───────────┬────────────┐
│  (index)   │    average     │  minimum  │  maximum   │
├────────────┼────────────────┼───────────┼────────────┤
│ wasm crc32 │ '2.40 μs/iter' │ '2.00 μs' │ '53.88 μs' │
│ npm:crc-32 │ '3.73 μs/iter' │ '2.25 μs' │ '1.11 ms'  │
└────────────┴────────────────┴───────────┴────────────┘

Summary
- wasm crc32 is 1.55x faster than npm:crc-32
```

## Usage

### SHA-1 (direct)

```ts
import { Morax, sha1 } from "@hazae41/morax";

// Wait for WASM to load
Morax.initSyncBundledOnce()

// Data to be hashed
const hello = new TextEncoder().encode("Hello World")

// Grab the digest (20 bytes)
const digest = sha1(hello).copy()
```

### Keccak-256 (direct)

```ts
import { Morax, keccak256 } from "@hazae41/morax";

// Wait for WASM to load
Morax.initSyncBundledOnce()

// Data to be hashed
const hello = new TextEncoder().encode("Hello World")

// Grab the digest (32 bytes)
const digest = keccak256(hello).copy()
```

### CRC32 (direct)

```ts
import { Morax, crc32 } from "@hazae41/morax";

// Wait for WASM to load
Morax.initSyncBundledOnce()

// Data to be hashed
const hello = new TextEncoder().encode("Hello World")

// Grab the digest (number)
const digest = crc32(hello)
```

### SHA-1 (incremental)

```ts
import { Morax, Sha1Hasher } from "@hazae41/morax";

// Wait for WASM to load
Morax.initSyncBundledOnce()

// Create a hash
const hasher = new Sha1Hasher()

// Data to be hashed
const hello = new TextEncoder().encode("Hello World")

// Update the hash with your data
hasher.update(hello)

// Grab the digest (20 bytes)
const digest = hasher.finalize().copy()

// Update the hash another time
hasher.update(hello)

// Grab the digest (20 bytes)
const digest2 = hasher.finalize().copy()

// digest !== digest2
console.log(digest)
console.log(digest2)

hasher.free()
```

### Keccak-256 (incremental)

```ts
import { Morax, Keccak256Hasher } from "@hazae41/morax";

// Wait for WASM to load
Morax.initSyncBundledOnce()

// Create a hash
const hasher = new Keccak256Hasher()

// Data to be hashed
const hello = new TextEncoder().encode("Hello World")

// Update the hash with your data
hasher.update(hello)

// Grab the digest (32 bytes)
const digest = hasher.finalize().copy()

// Update the hash another time
hasher.update(hello)

// Grab the digest (32 bytes)
const digest2 = hasher.finalize().copy()

// digest !== digest2
console.log(digest)
console.log(digest2)

hasher.free()
```

### CRC32 (incremental)

```ts
import { Morax, Crc32Hasher } from "@hazae41/morax";

// Wait for WASM to load
Morax.initSyncBundledOnce()

// Create a hash
const hasher = new Crc32Hasher()

// Data to be hashed
const hello = new TextEncoder().encode("Hello World")

// Update the hash with your data
hasher.update(hello)

// Grab the checksum (number)
const checksum = hasher.finalize()

// Update the hash another time
hasher.update(hello)

// Grab the checksum (number)
const checksum2 = hasher.finalize()

// checksum !== checksum2
console.log(checksum)
console.log(checksum2)

hasher.free()
```

## Building

### Unreproducible building

You need to install [Rust](https://www.rust-lang.org/tools/install)

Then, install [wasm-pack](https://github.com/rustwasm/wasm-pack)

```bash
cargo install wasm-pack
```

Finally, do a clean install and build

```bash
npm ci && npm run build
```

### Reproducible building

You can build the exact same bytecode using Docker, just be sure you're on a `linux/amd64` host

```bash
docker compose up --build
```

Then check that all the files are the same using `git status`

```bash
git status --porcelain
```

If the output is empty then the bytecode is the same as the one I commited

### Automated checks

Each time I commit to the repository, the GitHub's CI does the following:
- Clone the repository
- Reproduce the build using `docker compose up --build`
- Throw an error if the `git status --porcelain` output is not empty

Each time I release a new version tag on GitHub, the GitHub's CI does the following:
- Clone the repository
- Do not reproduce the build, as it's already checked by the task above
- Throw an error if there is a `npm diff` between the cloned repository and the same version tag on NPM

If a version is present on NPM but not on GitHub, do not use!
