extern crate alloc;

use alloc::{boxed::Box, vec::Vec};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sha256(data: &[u8]) -> Vec<u8> {
    use sha2::Digest;

    let mut hasher = sha2::Sha256::new();
    hasher.update(data);
    hasher.finalize().to_vec()
}

#[wasm_bindgen]
pub struct Sha256Hasher {
    pub(crate) inner: Box<sha2::Sha256>,
}

#[wasm_bindgen]
impl Sha256Hasher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        use sha2::Digest;

        let hasher = sha2::Sha256::new();
        let inner = Box::new(hasher);

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn update(&mut self, data: &[u8]) {
        use sha2::digest::Update;

        self.inner.update(data);
    }

    #[wasm_bindgen]
    pub fn finalize(&self) -> Vec<u8> {
        use sha2::Digest;

        self.inner.clone().finalize().to_vec()
    }
}
