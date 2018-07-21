const env = process.env.NODE_ENV
export let isPro = env === 'production'
export let isDev = env === 'development'
export let isLocal = env === 'local' || env === 'local_dev'
