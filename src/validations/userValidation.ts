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
      if (!req.body.name) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        })
      }

      if (!validator.isLength(req.body.name, { min: 2, max: 48 })) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        })
      }

      Object.assign(req.body, {
        name: req.body.name,
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

  updateUsername: (
    req: BodyRequest<UpdateProfilePayload>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      if (!req.body.username) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        })
      }
      const trimemdUsername = validator.trim(req.body.username)

      if (!validator.isLength(trimemdUsername, { min: 2, max: 48 })) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        })
      }

      Object.assign(req.body, {
        username: trimemdUsername,
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
