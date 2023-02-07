<div>
  <img align="right" width="128" src="https://user-images.githubusercontent.com/4405263/216618885-198b5507-6e8b-4a38-aef0-dbca5957c744.png"/>
  <p></p>
</div>

# Morax

WebAssembly port of RustCrypto's [SHA-1](https://github.com/RustCrypto/block-ciphers) and Sam Rijs's [crc32fast](https://github.com/srijs/rust-crc32fast), 
Rust implementations of SHA-1 hash and CRC32 (IEEE) checksum.

```bash
npm i @hazae41/morax
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/morax) • [**Deno Module 🦖**](https://deno.land/x/morax) • [**Next.js CodeSandbox 🪣**](https://codesandbox.io/p/github/hazae41/morax-example-next)

## Use case 

This WebAssembly module is useful when you want to use hashes incrementially, as WebCrypto doesn't support incremental hashing, and want good performances.

|  | Performances | Incremental hashing |
|---|---|---|
| Morax | ⭐️⭐️⭐️⭐️    | ✅ |
| WebCrypto | ⭐️⭐️⭐️⭐️⭐️     | ❌ |
| JavaScript | ⭐️⭐️⭐️  | ✅ |

## Usage

### SHA-1

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
const digest = hasher.finalize()

// Update the hash another time
hasher.update(hello)

// Grab the digest (20 bytes)
const digest2 = hasher.finalize()

// digest !== digest2
console.log(digest)
console.log(digest2)
```

### CRC32

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
