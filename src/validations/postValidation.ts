import { CreatePostPayload } from '@/types/post'
import { BodyRequest } from '@/types/request'
import { NextFunction, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export const postValidation = {
  createPost: (
    req: BodyRequest<CreatePostPayload>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      if (!req.body.title || !req.body.body) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        })
      }

      Object.assign(req.body, { ...req.body })

      return next()
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      })
    }
  },
}
