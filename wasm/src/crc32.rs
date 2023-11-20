extern crate alloc;

use wasm_bindgen::prelude::*;

use crate::Memory;

#[wasm_bindgen]
pub fn crc32(data: &Memory) -> u32 {
    let mut hasher = crc32fast::Hasher::new();
    hasher.update(&data.inner);
    hasher.finalize()
}

#[wasm_bindgen]
pub struct Crc32Hasher {
    pub(crate) inner: crc32fast::Hasher,
}

#[wasm_bindgen]
impl Crc32Hasher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        let inner = crc32fast::Hasher::new();

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn clone(&self) -> Self {
        let inner = self.inner.clone();

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn update(&mut self, data: &Memory) {
        self.inner.update(&data.inner);
    }

    #[wasm_bindgen]
    pub fn finalize(&self) -> u32 {
        self.inner.clone().finalize()
    }
}
