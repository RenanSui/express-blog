import { siteConfig } from '@/config/site'
import { SignUpPayload } from '@/types/auth'
import { BodyRequest } from '@/types/request'
import { NextFunction, Response } from 'express'
import { join } from 'path'
import ValidatorJS from 'validatorjs'

const authLayout = join(__dirname, '../views/layouts/auth')

const validateRule = {
  email: 'required|email',
  password: 'required|min:8|max:16',
}

export const authValidation = {
  signIn(req: BodyRequest<SignUpPayload>, res: Response, next: NextFunction) {
    const { email, password } = req.body

    const validation = new ValidatorJS({ email, password }, validateRule)

    validation.fails(() => {
      res.render('auth/sign-in', {
        ...siteConfig,
        email,
        emailError: validation.errors.first('email'),
        passwordError: validation.errors.first('password'),
        layout: authLayout,
      })
    })

    validation.passes(() => {
      return next()
    })
  },

  signUp(req: BodyRequest<SignUpPayload>, res: Response, next: NextFunction) {
    const { email, password } = req.body

    const validation = new ValidatorJS({ email, password }, validateRule)

    validation.fails(() => {
      res.render('auth/sign-up', {
        ...siteConfig,
        email,
        emailError: validation.errors.first('email'),
        passwordError: validation.errors.first('password'),
        layout: authLayout,
      })
    })

    validation.passes(() => {
      return next()
    })
  },
}
