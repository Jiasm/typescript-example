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
    async router(ctx, name, age, gender) {
        try {
            if (!name || !gender) {
                return {
                    code: 401,
                    message: '缺少参数',
                };
            }
            const entity = {
                name,
                gender,
                age,
            };
            // 创建举报记录
            createUser(entity).catch(err => {
                console.error(ctx, err, Object.assign({ type: 'insert' }, entity));
            });
            return {
                code: 200,
            };
        }
        catch (e) {
            console.error(ctx, e);
            return {
                code: 500,
                message: '服务器错误',
            };
        }
    }
};
__decorate([
    routing_controllers_1.Get('/:name/:age/:gender'),
    __param(0, routing_controllers_1.Ctx()),
    __param(1, routing_controllers_1.Param('name')),
    __param(2, routing_controllers_1.Param('age')),
    __param(3, routing_controllers_1.Param('gender')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number, Number]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "router", null);
default_1 = __decorate([
    routing_controllers_1.JsonController('/add')
], default_1);
exports.default = default_1;
/**
 * 创建一个新的用户
 */
async function createUser({ name, gender }) {
    return (await user_info_1.UserInfoModel.create({
        name,
        gender,
    })).save();
}
//# sourceMappingURL=add.js.map