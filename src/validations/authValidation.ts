import { SignUpPayload } from '@/types/auth'
import { BodyRequest } from '@/types/request'
import { NextFunction, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import ValidatorJS from 'validatorjs'

const validateRule = {
  email: 'required|email',
  password: 'required|min:8|max:16',
}

export const authValidation = {
  signIn(req: BodyRequest<SignUpPayload>, res: Response, next: NextFunction) {
    const { email, password } = req.body

    const validation = new ValidatorJS({ email, password }, validateRule)

    validation.fails(() => {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
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
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      })
    })

    validation.passes(() => {
      return next()
    })
  },
}
