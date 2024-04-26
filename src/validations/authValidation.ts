import { SignInPayload, SignUpPayload } from '@/types/auth'
import { BodyRequest } from '@/types/request'
import { NextFunction, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import validator from 'validator'

export const authValidation = {
  signIn: (
    req: BodyRequest<SignInPayload>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        })
      }

      let normalizedEmail =
        req.body.email && validator.normalizeEmail(req.body.email)
      if (normalizedEmail) {
        normalizedEmail = validator.trim(normalizedEmail)
      }

      if (
        !normalizedEmail ||
        !validator.isEmail(normalizedEmail, { allow_utf8_local_part: false })
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        })
      }

      Object.assign(req.body, { email: normalizedEmail })

      return next()
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      })
    }
  },

  signUp: (
    req: BodyRequest<SignUpPayload>,
    res: Response,
    next: NextFunction,
  ) => next(),
}
