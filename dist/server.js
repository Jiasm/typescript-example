"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
exports.default = app_1.default.listen(config_1.port, () => console.log(`Server run as 127.0.0.1:${config_1.port}`));
process.on('uncaughtException', console.error);
//# sourceMappingURL=server.js.map