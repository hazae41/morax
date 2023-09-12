extern crate alloc;

use alloc::{boxed::Box, vec::Vec};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn ripemd160(data: &[u8]) -> Vec<u8> {
    use ripemd::Digest;

    let mut hasher = ripemd::Ripemd160::new();
    hasher.update(data);
    hasher.finalize().to_vec()
}

#[wasm_bindgen]
pub struct Ripemd160Hasher {
    pub(crate) inner: Box<ripemd::Ripemd160>,
}

#[wasm_bindgen]
impl Ripemd160Hasher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        use ripemd::Digest;

        let hasher = ripemd::Ripemd160::new();
        let inner = Box::new(hasher);

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn update(&mut self, data: &[u8]) {
        use ripemd::digest::Update;

        self.inner.update(data);
    }

    #[wasm_bindgen]
    pub fn finalize(&self) -> Vec<u8> {
        use ripemd::Digest;

        self.inner.clone().finalize().to_vec()
    }
}
