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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let UserInfo = class UserInfo extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        comment: '自增ID',
        autoIncrement: true,
        primaryKey: true
    }),
    __metadata("design:type", Number)
], UserInfo.prototype, "uid", void 0);
__decorate([
    sequelize_typescript_1.Column({
        comment: '姓名'
    }),
    __metadata("design:type", String)
], UserInfo.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({
        comment: '年龄',
        defaultValue: 0
    }),
    __metadata("design:type", Number)
], UserInfo.prototype, "age", void 0);
__decorate([
    sequelize_typescript_1.Column({
        comment: '性别'
    }),
    __metadata("design:type", Number)
], UserInfo.prototype, "gender", void 0);
UserInfo = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'user_info_test'
    })
], UserInfo);
exports.default = UserInfo;
//# sourceMappingURL=user-info.js.map