/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function keccak256(a: number, b: number, c: number): void;
export function keccak256hasher_new(): number;
export function keccak256hasher_update(a: number, b: number, c: number): void;
export function keccak256hasher_finalize(a: number, b: number): void;
export function sha1(a: number, b: number, c: number): void;
export function sha1hasher_new(): number;
export function sha1hasher_update(a: number, b: number, c: number): void;
export function sha1hasher_finalize(a: number, b: number): void;
export function crc32(a: number, b: number): number;
export function __wbg_crc32hasher_free(a: number): void;
export function crc32hasher_new(): number;
export function crc32hasher_update(a: number, b: number, c: number): void;
export function crc32hasher_finalize(a: number): number;
export function __wbg_sha1hasher_free(a: number): void;
export function __wbg_keccak256hasher_free(a: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
