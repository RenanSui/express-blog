import console from 'console'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import express, { Express } from 'express'
import expressLayout from 'express-ejs-layouts'
import createHttpError from 'http-errors'
import logger from 'morgan'
import { join } from 'path'
import process from 'process'
import { mongoose } from './dataSources'
import { ErrorHandler } from './lib/express'
import { router } from './routes'

mongoose.run()

const app: Express = express()

app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('views', join(__dirname, './views'))
app.set('view engine', 'ejs')

app.use(
  logger('dev'),
  express.json({ limit: '10mb' }),
  express.urlencoded({ extended: false }),
  express.static(join(__dirname, process.env.STORAGE_PATH)),
  cookieParser(),
  router,
)

app.use((req, res, next) => next(createHttpError(404))) // catch 404 and forward to error handler
app.use(ErrorHandler)

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening to port: `, process.env.APP_PORT)
  console.log(`https://localhost:${process.env.APP_PORT}`)
})

export default app
