import { userService } from '@/service/userService'
import { ContextRequest, ICombinedRequest, UserRequest } from '@/types/request'
import { UpdateProfilePayload } from '@/types/user'
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

  updateProfile: async (
    {
      context: { user },
      body: { name, username, imageUrl },
    }: ICombinedRequest<UserRequest, UpdateProfilePayload>,
    res: Response,
  ) => {
    try {
      await userService.updateProfileByUserId(user.id, {
        name,
        username,
        imageUrl,
      })

      return res.status(StatusCodes.OK).json({
        data: { name, username },
        message: ReasonPhrases.OK,
        status: StatusCodes.OK,
      })
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      })
    }
  },
}
