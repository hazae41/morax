extern crate alloc;

use alloc::boxed::Box;

use wasm_bindgen::prelude::*;

use crate::Memory;

#[wasm_bindgen]
pub fn sha1(data: &Memory) -> Memory {
    use sha1::Digest;

    let mut hasher = sha1::Sha1::new();
    hasher.update(&data.inner);
    Memory::new(hasher.finalize().to_vec())
}

#[wasm_bindgen]
pub struct Sha1Hasher {
    pub(crate) inner: Box<sha1::Sha1>,
}

#[wasm_bindgen]
impl Sha1Hasher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        use sha1::Digest;

        let hasher = sha1::Sha1::new();
        let inner = Box::new(hasher);

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn update(&mut self, data: &Memory) {
        use sha1::digest::Update;

        self.inner.update(&data.inner);
    }

    #[wasm_bindgen]
    pub fn finalize(&self) -> Memory {
        use sha1::Digest;

        Memory::new(self.inner.clone().finalize().to_vec())
    }
}
