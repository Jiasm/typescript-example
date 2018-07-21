"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const env_1 = require("./env");
exports.app = 'typescript-example';
exports.port = env_1.isLocal ? 6666 : 8000;
exports.distPath = path_1.default.resolve(__dirname, '../dist');
//# sourceMappingURL=server.js.map