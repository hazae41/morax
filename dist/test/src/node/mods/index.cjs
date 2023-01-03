'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var morax = require('../../../wasm/pkg/morax.cjs');
var morax_wasm = require('../../../wasm/pkg/morax.wasm.cjs');

var output = undefined;
function initBundledOnce() {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var _a;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(output !== null && output !== void 0)) return [3 /*break*/, 1];
                    _a = output;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, morax["default"](Buffer.from(morax_wasm.wasm, "base64"))];
                case 2:
                    _a = (output = _b.sent());
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}

exports.Sha1Hasher = morax.Sha1Hasher;
exports.initBundledOnce = initBundledOnce;
//# sourceMappingURL=index.cjs.map
