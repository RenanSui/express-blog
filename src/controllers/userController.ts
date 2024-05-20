import { userService } from '@/service/userService'
import { ContextRequest, ICombinedRequest, UserRequest } from '@/types/request'
import { GetUserByIdPayload, UpdateProfilePayload } from '@/types/user'
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

  user: async (
    { body: { id } }: ICombinedRequest<UserRequest, GetUserByIdPayload>,
    res: Response,
  ) => {
    const result = await userService.getById(id)

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: ReasonPhrases.NOT_FOUND,
        status: StatusCodes.NOT_FOUND,
      })
    }

    return res.status(StatusCodes.OK).json({
      data: { ...result.toJSON() },
      message: ReasonPhrases.OK,
      status: StatusCodes.OK,
    })
  },

  updateProfile: async (
    {
      context: { user },
      body: { name, imageUrl },
    }: ICombinedRequest<UserRequest, UpdateProfilePayload>,
    res: Response,
  ) => {
    try {
      await userService.updateProfileByUserId(user.id, {
        name,
        imageUrl,
      })

      return res.status(StatusCodes.OK).json({
        data: { name, imageUrl },
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

  updateUsername: async (
    {
      context: { user },
      body: { username },
    }: ICombinedRequest<UserRequest, UpdateProfilePayload>,
    res: Response,
  ) => {
    try {
      const isUserExist = await userService.isExistByUsername(username)

      if (isUserExist) {
        return res.status(StatusCodes.CONFLICT).json({
          message: ReasonPhrases.CONFLICT,
          status: StatusCodes.CONFLICT,
        })
      }

      await userService.updateUsernameById(user.id, {
        username,
      })

      return res.status(StatusCodes.OK).json({
        data: { username },
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
