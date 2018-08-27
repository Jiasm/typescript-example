"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const koa_static_1 = __importDefault(require("koa-static"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const config_1 = require("./config");
const app = routing_controllers_1.createKoaServer({
    controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
});
app.use(koa_static_1.default(config_1.distPath));
app.use(koa_bodyparser_1.default());
exports.default = app;
//# sourceMappingURL=app.js.map