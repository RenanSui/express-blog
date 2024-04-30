import { authController } from '@/controllers'
import { authGuard } from '@/guards'
import { authValidation } from '@/validations'
import { Router } from 'express'

export const auth = (router: Router): void => {
  router.post(
    '/auth/sign-in',
    authGuard.isGuest,
    authValidation.signIn,
    authController.signIn,
  )

  router.post(
    '/auth/sign-up',
    authGuard.isGuest,
    authValidation.signUp,
    authController.signUp,
  )

  router.post('/auth/sign-out', authGuard.isAuth, authController.signOut)
}
