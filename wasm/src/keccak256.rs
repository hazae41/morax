extern crate alloc;

use wasm_bindgen::prelude::*;

use crate::Memory;

#[wasm_bindgen]
pub fn keccak256(data: &Memory) -> Memory {
    use sha3::Digest;

    let mut hasher = sha3::Keccak256::new();
    hasher.update(&data.inner);
    Memory::new(hasher.finalize().to_vec())
}

#[wasm_bindgen]
pub struct Keccak256Hasher {
    pub(crate) inner: sha3::Keccak256,
}

#[wasm_bindgen]
impl Keccak256Hasher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        use sha3::Digest;

        let inner = sha3::Keccak256::new();

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn clone(&self) -> Self {
        let inner = self.inner.clone();

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn update(&mut self, data: &Memory) {
        use sha3::digest::Update;

        self.inner.update(&data.inner);
    }

    #[wasm_bindgen]
    pub fn finalize(&self) -> Memory {
        use sha3::Digest;

        Memory::new(self.inner.clone().finalize().to_vec())
    }
}
