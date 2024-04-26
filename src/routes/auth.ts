import { authController } from '@/controllers'
import { authGuard } from '@/guards'
import { authValidation } from '@/validations'
import { Router } from 'express'

export const auth = (router: Router): void => {
  router.post(
    '/auth/sign-in',
    authGuard.isAuth,
    authValidation.signIn,
    authController.signIn,
  )

  router.post(
    '/auth/sign-up',
    authGuard.isAuth,
    // authValidation.signUp,
    authController.signUp,
  )

  router.post(
    '/auth/sign-out',
    authGuard.isAuth,
    // authValidation.signOut,
    authController.signOut,
  )
}
