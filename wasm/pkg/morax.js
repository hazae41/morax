
import { Copied } from "@hazae41/box"

let wasm;

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    if (getUint8Memory0().buffer === arg.inner.bytes.buffer) {
      const bytes = arg.unwrap().bytes
      WASM_VECTOR_LEN = bytes.byteLength;
      return bytes.byteOffset
    }

    const bytes = arg.get().bytes
    const ptr = malloc(bytes.length * 1, 1) >>> 0;
    getUint8Memory0().set(bytes, ptr / 1);
    WASM_VECTOR_LEN = bytes.length;
    return ptr;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {Box<Copiable>} data
* @returns {Slice}
*/
export function keccak256(data) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.keccak256(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = new Slice(r0, r1);
        ;
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {Box<Copiable>} data
* @returns {Slice}
*/
export function ripemd160(data) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.ripemd160(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = new Slice(r0, r1);
        ;
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {Box<Copiable>} data
* @returns {Slice}
*/
export function sha256(data) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.sha256(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = new Slice(r0, r1);
        ;
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {Box<Copiable>} data
* @returns {number}
*/
export function crc32(data) {
    const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.crc32(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {Box<Copiable>} data
* @returns {Slice}
*/
export function sha1(data) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.sha1(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = new Slice(r0, r1);
        ;
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
*/
export class Crc32Hasher {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Crc32Hasher.prototype);
        obj.__wbg_ptr = ptr;
        obj.__wbg_freed = false;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

  
    get freed() {
        return this.__wbg_freed
    }

    [Symbol.dispose]() {
        this.free()
    }

    free() {
        if (this.__wbg_freed)
            return
        this.__wbg_freed = true

        const ptr = this.__destroy_into_raw();
        wasm.__wbg_crc32hasher_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.crc32hasher_new();
        return Crc32Hasher.__wrap(ret);
    }
    /**
    * @param {Box<Copiable>} data
    */
    update(data) {
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.crc32hasher_update(this.__wbg_ptr, ptr0, len0);
    }
    /**
    * @returns {number}
    */
    finalize() {
        const ret = wasm.crc32hasher_finalize(this.__wbg_ptr);
        return ret >>> 0;
    }
}
/**
*/
export class Keccak256Hasher {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Keccak256Hasher.prototype);
        obj.__wbg_ptr = ptr;
        obj.__wbg_freed = false;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

  
    get freed() {
        return this.__wbg_freed
    }

    [Symbol.dispose]() {
        this.free()
    }

    free() {
        if (this.__wbg_freed)
            return
        this.__wbg_freed = true

        const ptr = this.__destroy_into_raw();
        wasm.__wbg_keccak256hasher_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.keccak256hasher_new();
        return Keccak256Hasher.__wrap(ret);
    }
    /**
    * @param {Box<Copiable>} data
    */
    update(data) {
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.keccak256hasher_update(this.__wbg_ptr, ptr0, len0);
    }
    /**
    * @returns {Slice}
    */
    finalize() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.keccak256hasher_finalize(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = new Slice(r0, r1);
            ;
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class Ripemd160Hasher {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Ripemd160Hasher.prototype);
        obj.__wbg_ptr = ptr;
        obj.__wbg_freed = false;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

  
    get freed() {
        return this.__wbg_freed
    }

    [Symbol.dispose]() {
        this.free()
    }

    free() {
        if (this.__wbg_freed)
            return
        this.__wbg_freed = true

        const ptr = this.__destroy_into_raw();
        wasm.__wbg_ripemd160hasher_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.ripemd160hasher_new();
        return Ripemd160Hasher.__wrap(ret);
    }
    /**
    * @param {Box<Copiable>} data
    */
    update(data) {
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.ripemd160hasher_update(this.__wbg_ptr, ptr0, len0);
    }
    /**
    * @returns {Slice}
    */
    finalize() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.ripemd160hasher_finalize(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = new Slice(r0, r1);
            ;
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class Sha1Hasher {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Sha1Hasher.prototype);
        obj.__wbg_ptr = ptr;
        obj.__wbg_freed = false;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

  
    get freed() {
        return this.__wbg_freed
    }

    [Symbol.dispose]() {
        this.free()
    }

    free() {
        if (this.__wbg_freed)
            return
        this.__wbg_freed = true

        const ptr = this.__destroy_into_raw();
        wasm.__wbg_sha1hasher_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.sha1hasher_new();
        return Sha1Hasher.__wrap(ret);
    }
    /**
    * @param {Box<Copiable>} data
    */
    update(data) {
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.sha1hasher_update(this.__wbg_ptr, ptr0, len0);
    }
    /**
    * @returns {Slice}
    */
    finalize() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.sha1hasher_finalize(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = new Slice(r0, r1);
            ;
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class Sha256Hasher {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Sha256Hasher.prototype);
        obj.__wbg_ptr = ptr;
        obj.__wbg_freed = false;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

  
    get freed() {
        return this.__wbg_freed
    }

    [Symbol.dispose]() {
        this.free()
    }

    free() {
        if (this.__wbg_freed)
            return
        this.__wbg_freed = true

        const ptr = this.__destroy_into_raw();
        wasm.__wbg_sha256hasher_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.sha256hasher_new();
        return Sha256Hasher.__wrap(ret);
    }
    /**
    * @param {Box<Copiable>} data
    */
    update(data) {
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.sha256hasher_update(this.__wbg_ptr, ptr0, len0);
    }
    /**
    * @returns {Slice}
    */
    finalize() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.sha256hasher_finalize(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = new Slice(r0, r1);
            ;
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedInt32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

export async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {
        throw new Error();
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync }
export default __wbg_init;


export class Slice {

  #freed = false

  /**
   * @param {number} ptr 
   * @param {number} len 
   **/
  constructor(ptr, len) {
    this.ptr = ptr
    this.len = len
    this.start = (ptr >>> 0) / 1
    this.end = this.start + len
  }

  /**
   * @returns {void}
   **/
  [Symbol.dispose]() {
    this.free()
  }

  /**
   * @returns {Uint8Array}
   **/
  get bytes() {
    return getUint8Memory0().subarray(this.start, this.end)
  }

  get freed() {
    return this.#freed
  }

  /**
   * @returns {void}
   **/
  free() {
    if (this.#freed)
      return
    this.#freed = true
    wasm.__wbindgen_free(this.ptr, this.len * 1);
  }

  /**
   * @returns {Copied}
   **/
  copyAndDispose() {
    const bytes = this.bytes.slice()
    this.free()
    return new Copied(bytes)
  }

}