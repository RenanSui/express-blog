import 'dotenv/config'
import express, { Express } from 'express'
import { join } from 'path'
import process from 'process'
import { mongoose } from './dataSources'
import { corsMiddleware } from './middlewares/corsMiddleware'
import { router } from './routes'

mongoose.run()

const app: Express = express()

app.use(
  express.json({ limit: '10mb' }),
  express.urlencoded({ extended: false }),
  express.static(join(__dirname, process.env.STORAGE_PATH)),
  corsMiddleware,
  // authMiddleware,
  router,
)

app.listen(process.env.APP_PORT)

export default app
