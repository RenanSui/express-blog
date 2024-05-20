import { userController } from '@/controllers/userController'
import { authGuard } from '@/guards'
import { userValidation } from '@/validations/userValidation'
import { Router } from 'express'

export const user = (router: Router): void => {
  router.get('/me', authGuard.isAuth, userController.me)

  router.post('/user', userController.user)

  router.post('/user/username', userController.userByUsername)

  router.post(
    '/user/update',
    authGuard.isAuth,
    userValidation.updateProfile,
    userController.updateProfile,
  )

  router.post(
    '/user/update/username',
    authGuard.isAuth,
    userValidation.updateUsername,
    userController.updateUsername,
  )
}
