export type MysqlConfig = {
  key: string
  host: Array<string>
  user: string
  password: string
  database: string
  modelPath: string
}

export type ConfigItem = MysqlConfig | string | Array<string>

export type ConfigMap = {
  [key: string]: ConfigItem
}
