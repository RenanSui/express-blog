import { blogController } from '@/controllers/blogController'
import { Router } from 'express'

export const blog = (router: Router): void => {
  router.get('/blog/post', blogController.post)

  router.post('/blog/post/id/:id', blogController.postId)

  router.post('/blog/post/search', blogController.postSearch)
}
