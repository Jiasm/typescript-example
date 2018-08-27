"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const consolidate_1 = __importDefault(require("consolidate"));
const path_1 = __importDefault(require("path"));
let default_1 = class default_1 {
    async router() {
        return consolidate_1.default.ejs(path_1.default.resolve(__dirname, '../../views/index.ejs'), {
            title: 'Example For TypeScript React App',
        });
    }
};
__decorate([
    routing_controllers_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], default_1.prototype, "router", null);
default_1 = __decorate([
    routing_controllers_1.Controller()
], default_1);
exports.default = default_1;
//# sourceMappingURL=index.js.map