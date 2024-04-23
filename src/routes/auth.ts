import { authController } from '@/controllers'
import { authGuard } from '@/guards'
import { authValidation } from '@/validations'
import { Router } from 'express'

export const auth = (router: Router): void => {
  router.get('/auth/sign-in', authGuard.isAuth, authController.signIn)

  router.post(
    '/auth/sign-in',
    authGuard.isAuth,
    authValidation.signIn,
    authController.loginUser,
  )

  router.get('/auth/sign-up', authGuard.isAuth, authController.signUp)

  router.post(
    '/auth/sign-up',
    authGuard.isAuth,
    authValidation.signUp,
    authController.createUser,
  )

  router.get('/auth/sign-out', authGuard.isAuth, authController.signOut)

  router.post(
    '/auth/sign-out',
    authGuard.isAuth,
    // authValidation.signOut,
    authController.logoutUser,
  )

  router.get(
    '/auth/confirmation',
    authGuard.isAuth,
    authController.confirmation,
  )
}
