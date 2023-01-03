'use strict';

var tslib = require('tslib');
var phobos = require('@hazae41/phobos');
var index = require('./index.cjs');
var morax = require('../../../wasm/pkg/morax.cjs');

function equals(a, b) {
    var ba = Buffer.from(a.buffer);
    var bb = Buffer.from(b.buffer);
    return ba.equals(bb);
}
phobos.test("SHA-1", function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
    var hello, hasher, hasher2, digest, digest2, digest3, digest4;
    return tslib.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index.initBundledOnce()];
            case 1:
                _a.sent();
                hello = new TextEncoder().encode("Hello World");
                hasher = new morax.Sha1Hasher();
                hasher2 = new morax.Sha1Hasher();
                hasher.update(hello);
                hasher2.update(hello);
                digest = hasher.finalize();
                digest2 = hasher2.finalize();
                phobos.assert(equals(digest, digest2), "digests should be equal");
                hasher.update(hello);
                hasher2.update(hello);
                digest3 = hasher.finalize();
                digest4 = hasher2.finalize();
                phobos.assert(equals(digest3, digest4), "digests should be equal");
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=index.test.cjs.map
