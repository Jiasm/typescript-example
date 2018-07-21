"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = process.env.NODE_ENV;
exports.isPro = env === 'production';
exports.isDev = env === 'development';
exports.isLocal = env === 'local' || env === 'local_dev';
//# sourceMappingURL=env.js.map