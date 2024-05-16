import { BodyRequest } from '@/types/request'
import { UpdateProfilePayload } from '@/types/user'
import { NextFunction, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import validator from 'validator'

export const userValidation = {
  updateProfile: (
    req: BodyRequest<UpdateProfilePayload>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      if (!req.body.name || !req.body.username) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        })
      }

      const trimemdName = validator.trim(req.body.name)
      const trimemdUsername = validator.trim(req.body.username)

      if (
        !validator.isLength(trimemdName, { min: 2, max: 48 }) ||
        !validator.isLength(trimemdUsername, { min: 2, max: 48 })
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        })
      }

      Object.assign(req.body, {
        name: trimemdName,
        username: trimemdUsername,
        imageUrl: req.body.imageUrl,
      })

      return next()
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      })
    }
  },
}
