#![no_std]

extern crate alloc;

use alloc::{boxed::Box, vec::Vec};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Sha1Hasher {
    inner: Box<sha1::Sha1>,
}

#[wasm_bindgen]
impl Sha1Hasher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Result<Sha1Hasher, JsValue> {
        use sha1::Digest;

        let hasher = sha1::Sha1::new();
        let inner = Box::new(hasher);

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn update(&mut self, data: &[u8]) {
        use sha1::digest::Update;

        self.inner.update(data);
    }

    #[wasm_bindgen]
    pub fn finalize(&self) -> Vec<u8> {
        use sha1::Digest;

        self.inner.clone().finalize().to_vec()
    }
}
