import { Configuration } from 'webpack'

const config: Configuration = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
}

export default config