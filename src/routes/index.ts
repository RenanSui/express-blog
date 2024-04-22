import { Router } from 'express'
import { lobby } from './lobby'
import { post } from './post'
import { search } from './search'

const router: Router = Router()

const routes: { [key: string]: (router: Router) => void } = {
  lobby,
  post,
  search,
}

for (const route in routes) {
  routes[route](router)
}

export { router }
