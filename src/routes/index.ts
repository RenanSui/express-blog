import { Router } from 'express'
import { auth } from './auth'
import { blog } from './blog'

const router: Router = Router()

const routes: { [key: string]: (router: Router) => void } = {
  auth,
  blog,
}

for (const route in routes) {
  routes[route](router)
}

export { router }
