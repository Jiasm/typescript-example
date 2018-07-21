import path from 'path'
import { isLocal } from './env'

export const app = 'typescript-example'
export const port = isLocal ? 6666 : 8000
export const distPath = path.resolve(__dirname, '../dist')
