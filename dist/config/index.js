"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const production_1 = require("./backend/production");
const development_1 = require("./backend/development");
const local_1 = require("./backend/local");
const env_1 = require("./env");
__export(require("./env"));
__export(require("./server"));
__export(require("../common/config"));
let configs;
exports.configs = configs;
switch (true) {
    case env_1.isPro:
        exports.configs = configs = production_1.configs;
        break;
    case env_1.isDev:
        exports.configs = configs = development_1.configs;
        break;
    case env_1.isLocal:
    default:
        exports.configs = configs = local_1.configs;
}
//# sourceMappingURL=index.js.map