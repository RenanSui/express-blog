import { blogController } from '@/controllers/blogController'
import { authGuard } from '@/guards'
import { blogValidation } from '@/validations/blogValidation'
import { Router } from 'express'

export const blog = (router: Router): void => {
  router.get('/blog/post', blogController.post)

  router.get('/blog/post/id/:id', blogController.postId)

  router.post('/blog/post/search', blogController.postSearch)

  router.post(
    '/blog/post/create',
    authGuard.isAuth,
    blogValidation.createPost,
    blogController.createPost,
  )
}
