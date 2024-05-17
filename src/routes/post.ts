import { postController } from '@/controllers/postController'
import { authGuard } from '@/guards'
import { postValidation } from '@/validations/postValidation'
import { Router } from 'express'

export const post = (router: Router): void => {
  router.get('/post', postController.post)

  router.get('/post/id/:id', postController.postId)

  router.post('/post/search', postController.postSearch)

  router.post(
    '/post/create',
    authGuard.isAuth,
    postValidation.createPost,
    postController.createPost,
  )
}
