import { Router } from 'express'
import { auth } from './auth'
import { blog } from './blog'
import { user } from './user'

const router: Router = Router()

const routes: { [key: string]: (router: Router) => void } = {
  auth,
  blog,
  user,
}

for (const route in routes) {
  routes[route](router)
}

export { router }
