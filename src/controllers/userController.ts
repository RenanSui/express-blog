import { ContextRequest, UserRequest } from '@/types/request'
import { Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export const userController = {
  me: async (
    { context: { user } }: ContextRequest<UserRequest>,
    res: Response,
  ) => {
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: ReasonPhrases.NOT_FOUND,
        status: StatusCodes.NOT_FOUND,
      })
    }

    return res.status(StatusCodes.OK).json({
      data: { ...user.toJSON() },
      message: ReasonPhrases.OK,
      status: StatusCodes.OK,
    })
  },
}
