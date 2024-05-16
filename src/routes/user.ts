import { userController } from '@/controllers/userController'
import { authGuard } from '@/guards'
import { userValidation } from '@/validations/userValidation'
import { Router } from 'express'

export const user = (router: Router): void => {
  router.get('/me', authGuard.isAuth, userController.me)

  router.post(
    '/user/update',
    authGuard.isAuth,
    userValidation.updateProfile,
    userController.updateProfile,
  )
}
