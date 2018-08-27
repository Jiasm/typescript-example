import 'reflect-metadata'
import { createKoaServer } from 'routing-controllers'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import { distPath } from './config'

const app = createKoaServer({
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
})

app.use(serve(distPath))
app.use(bodyParser())

export default app
