#![no_std]

extern crate alloc;

pub mod crc32;
pub mod keccak256;
pub mod ripemd160;
pub mod sha1;
pub mod sha256;

use alloc::vec::Vec;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Memory {
    pub(crate) inner: Vec<u8>,
}

#[wasm_bindgen]
impl Memory {
    #[wasm_bindgen(constructor)]
    pub fn new(inner: Vec<u8>) -> Memory {
        Memory { inner }
    }

    #[wasm_bindgen]
    pub fn ptr(&self) -> *const u8 {
        self.inner.as_ptr()
    }

    #[wasm_bindgen]
    pub fn len(&self) -> usize {
        self.inner.len()
    }
}
