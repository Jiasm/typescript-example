"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config_1 = require("../../config");
const sequelize_typescript_1 = require("sequelize-typescript");
var user_info_1 = require("../../entity/user/user-info");
exports.UserInfoModel = user_info_1.default;
const mysqlConfig = config_1.configs.mysql;
exports.default = new sequelize_typescript_1.Sequelize({
    host: mysqlConfig.host[0],
    database: mysqlConfig.database,
    username: mysqlConfig.user,
    password: mysqlConfig.password,
    dialect: 'mysql',
    modelPaths: [path_1.default.resolve(__dirname, `../../entity/${mysqlConfig.entity}`)],
    pool: {
        // 连接池的一些相关配置
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false,
    logging: true // true会在控制台打印每次sequelize操作时对应的SQL命令
});
//# sourceMappingURL=user-info.js.map