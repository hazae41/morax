extern crate alloc;

use alloc::{boxed::Box, vec::Vec};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn keccak256(data: &[u8]) -> Vec<u8> {
    use sha3::Digest;

    let mut hasher = sha3::Keccak256::new();
    hasher.update(data);
    hasher.finalize().to_vec()
}

#[wasm_bindgen]
pub struct Keccak256Hasher {
    pub(crate) inner: Box<sha3::Keccak256>,
}

#[wasm_bindgen]
impl Keccak256Hasher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        use sha3::Digest;

        let hasher = sha3::Keccak256::new();
        let inner = Box::new(hasher);

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn update(&mut self, data: &[u8]) {
        use sha3::digest::Update;

        self.inner.update(data);
    }

    #[wasm_bindgen]
    pub fn finalize(&self) -> Vec<u8> {
        use sha3::Digest;

        self.inner.clone().finalize().to_vec()
    }
}
