extern crate alloc;

use wasm_bindgen::prelude::*;

use crate::Memory;

#[wasm_bindgen]
pub fn sha256(data: &Memory) -> Memory {
    use sha2::Digest;

    let mut hasher = sha2::Sha256::new();
    hasher.update(&data.inner);
    Memory::new(hasher.finalize().to_vec())
}

#[wasm_bindgen]
pub struct Sha256Hasher {
    pub(crate) inner: sha2::Sha256,
}

#[wasm_bindgen]
impl Sha256Hasher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        use sha2::Digest;

        let inner = sha2::Sha256::new();

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn clone(&self) -> Self {
        let inner = self.inner.clone();

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn update(&mut self, data: &Memory) {
        use sha2::digest::Update;

        self.inner.update(&data.inner);
    }

    #[wasm_bindgen]
    pub fn finalize(&self) -> Memory {
        use sha2::Digest;

        Memory::new(self.inner.clone().finalize().to_vec())
    }
}
