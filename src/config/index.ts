import { configs as pro } from './backend/production'
import { configs as dev } from './backend/development'
import { configs as local } from './backend/local'
import { isPro, isDev, isLocal } from './env'
import { ConfigMap } from 'config'

export * from './env'
export * from './server'
export * from '../common/config'

let configs: ConfigMap

switch (true) {
  case isPro:
    configs = pro
    break
  case isDev:
    configs = dev
    break
  case isLocal:
  default:
    configs = local
}

export { configs }
