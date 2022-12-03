#![allow(non_snake_case)]

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn foo() -> String {
    "foo".to_owned()
}

#[wasm_bindgen(js_name = multiplyByTwo)]
pub fn multiply_by_two(val: f64) -> f64 {
    return val * 2.0
}
