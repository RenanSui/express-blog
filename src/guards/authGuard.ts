import { ContextRequest, UserRequest } from '@/types/request'
import { NextFunction, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export const authGuard = {
  isAuth: (
    { context: { user } }: ContextRequest<UserRequest>,
    res: Response,
    next: NextFunction,
  ) => {
    if (user) {
      return next()
    }

    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: ReasonPhrases.UNAUTHORIZED,
      status: StatusCodes.UNAUTHORIZED,
    })
  },

  isGuest: (
    { context: { user } }: ContextRequest<UserRequest>,
    res: Response,
    next: NextFunction,
  ) => {
    if (!user) {
      return next()
    }

    return res.status(StatusCodes.FORBIDDEN).json({
      message: ReasonPhrases.FORBIDDEN,
      status: StatusCodes.FORBIDDEN,
    })
  },
}
