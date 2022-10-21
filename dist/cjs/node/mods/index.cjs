'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var morax = require('../../wasm/pkg/morax.cjs');
var morax_wasm = require('../../wasm/pkg/morax.wasm.cjs');

var output = undefined;
function initSyncBundledOnce() {
    return output !== null && output !== void 0 ? output : (output = morax.initSync(Buffer.from(morax_wasm.wasm, "base64")));
}

exports.Sha1Hasher = morax.Sha1Hasher;
exports.initSync = morax.initSync;
exports.initSyncBundledOnce = initSyncBundledOnce;
//# sourceMappingURL=index.cjs.map
