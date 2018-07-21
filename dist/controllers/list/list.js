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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const user_info_1 = require("../../models/user/user-info");
let default_1 = class default_1 {
    async router(ctx) {
        try {
            console.log(ctx.url);
            return {
                code: 200,
                data: await filterList()
            };
        }
        catch (e) {
            console.error(ctx, e);
            return {
                code: 500,
                message: '服务器错误'
            };
        }
    }
    async anotherRouter(ctx, gender) {
        try {
            if (!gender) {
                return {
                    code: 401,
                    message: '缺少参数'
                };
            }
            console.log(ctx.url);
            return {
                code: 200,
                data: await filterList({
                    gender
                })
            };
        }
        catch (e) {
            console.error(ctx, e);
            return {
                code: 500,
                message: '服务器错误'
            };
        }
    }
};
__decorate([
    routing_controllers_1.Get('/'),
    __param(0, routing_controllers_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "router", null);
__decorate([
    routing_controllers_1.Get('/filter/:gender'),
    __param(0, routing_controllers_1.Ctx()), __param(1, routing_controllers_1.Param('gender')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "anotherRouter", null);
default_1 = __decorate([
    routing_controllers_1.JsonController('/list')
], default_1);
exports.default = default_1;
/**
 * 获取列表数据
 */
async function filterList({ gender } = {}) {
    return user_info_1.UserInfoModel.findAll({
        raw: true,
        where: gender && {
            gender
        }
    });
}
//# sourceMappingURL=list.js.map