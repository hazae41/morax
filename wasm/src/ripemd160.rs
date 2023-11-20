extern crate alloc;

use wasm_bindgen::prelude::*;

use crate::Memory;

#[wasm_bindgen]
pub fn ripemd160(data: &Memory) -> Memory {
    use ripemd::Digest;

    let mut hasher = ripemd::Ripemd160::new();
    hasher.update(&data.inner);
    Memory::new(hasher.finalize().to_vec())
}

#[wasm_bindgen]
pub struct Ripemd160Hasher {
    pub(crate) inner: ripemd::Ripemd160,
}

#[wasm_bindgen]
impl Ripemd160Hasher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        use ripemd::Digest;

        let inner = ripemd::Ripemd160::new();

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn clone(&self) -> Self {
        let inner = self.inner.clone();

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn update(&mut self, data: &Memory) {
        use ripemd::digest::Update;

        self.inner.update(&data.inner);
    }

    #[wasm_bindgen]
    pub fn finalize(&self) -> Memory {
        use ripemd::Digest;

        Memory::new(self.inner.clone().finalize().to_vec())
    }
}
