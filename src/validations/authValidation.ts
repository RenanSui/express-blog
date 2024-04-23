import { siteConfig } from '@/config/site'
import { isEmailValid, isPasswordValid } from '@/lib/utils'
import { SignUpPayload } from '@/types/auth'
import { BodyRequest } from '@/types/request'
import { NextFunction, Response } from 'express'
import { join } from 'path'

const authLayout = join(__dirname, '../views/layouts/auth')

export const authValidation = {
  signIn(req: BodyRequest<SignUpPayload>, res: Response, next: NextFunction) {
    const { email, password } = req.body

    if (!isEmailValid(email) || !isPasswordValid(password)) {
      res.render('auth/sign-in', {
        ...siteConfig,
        email,
        emailValid: isEmailValid(email),
        passwordValid: isPasswordValid(password),
        layout: authLayout,
      })
    }

    return next()
  },

  signUp(req: BodyRequest<SignUpPayload>, res: Response, next: NextFunction) {
    const { email, password } = req.body

    if (!isEmailValid(email) || !isPasswordValid(password)) {
      res.render('auth/sign-up', {
        ...siteConfig,
        email,
        emailValid: isEmailValid(email),
        passwordValid: isPasswordValid(password),
        layout: authLayout,
      })
    }

    return next()
  },
}
