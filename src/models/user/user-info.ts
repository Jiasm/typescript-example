import path from 'path'
import { MysqlConfig } from 'config'
import { Sequelize } from 'sequelize-typescript'
import { configs } from '../../config'

export { default as UserInfoModel } from '../../entities/user/user-info'

const mysqlConfig = configs.mysql as MysqlConfig

export default new Sequelize({
  host: mysqlConfig.host[0],
  database: mysqlConfig.database,
  username: mysqlConfig.user,
  password: mysqlConfig.password,
  // 或者一些其他的数据库
  dialect: 'mysql',
  // 加载我们的实体
  modelPaths: [path.resolve(__dirname, `../../entities/${mysqlConfig.entity}`)],
  pool: {
    // 连接池的一些相关配置
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
  // true会在控制台打印每次sequelize操作时对应的SQL命令
  logging: true,
})
