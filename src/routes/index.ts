import { Router } from 'express'
import { auth } from './auth'
import { post } from './post'
import { user } from './user'

const router: Router = Router()

const routes: { [key: string]: (router: Router) => void } = {
  auth,
  post,
  user,
}

for (const route in routes) {
  routes[route](router)
}

export { router }
