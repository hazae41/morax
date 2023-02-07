extern crate alloc;

use alloc::boxed::Box;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn crc32(data: &[u8]) -> u32 {
    let mut hasher = crc32fast::Hasher::new();
    hasher.update(data);
    hasher.finalize()
}

#[wasm_bindgen]
pub struct Crc32Hasher {
    pub(crate) inner: Box<crc32fast::Hasher>,
}

#[wasm_bindgen]
impl Crc32Hasher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        let hasher = crc32fast::Hasher::new();
        let inner = Box::new(hasher);

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn update(&mut self, data: &[u8]) {
        self.inner.update(data);
    }

    #[wasm_bindgen]
    pub fn finalize(&self) -> u32 {
        self.inner.clone().finalize()
    }
}
