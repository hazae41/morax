'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./mods/index.cjs');
var morax = require('../wasm/pkg/morax.cjs');



exports.Morax = index;
exports.initBundledOnce = index.initBundledOnce;
exports.initSyncBundledOnce = index.initSyncBundledOnce;
exports.Sha1Hasher = morax.Sha1Hasher;
exports.initSync = morax.initSync;
//# sourceMappingURL=index.cjs.map
