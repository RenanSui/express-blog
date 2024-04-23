import { Router } from 'express'
import { admin } from './admin'
import { auth } from './auth'
import { lobby } from './lobby'
import { post } from './post'
import { search } from './search'

const router: Router = Router()

const routes: { [key: string]: (router: Router) => void } = {
  lobby,
  post,
  search,
  admin,
  auth,
}

for (const route in routes) {
  routes[route](router)
}

export { router }
