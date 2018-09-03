import { Model, Table, Column } from 'sequelize-typescript'

@Table({
  tableName: 'user_info_test'
})
export default class UserInfo extends Model<UserInfo> {
  @Column({
    comment: '自增ID',
    autoIncrement: true,
    primaryKey: true,
  })
  uid: number

  @Column({
    comment: '姓名',
  })
  name: string

  @Column({
    comment: '年龄',
    defaultValue: 0,
  })
  age: number

  @Column({
    comment: '性别',
  })
  gender: number
}
