import { postService } from '@/service/postService'
import { CreatePostPayload } from '@/types/post'
import { BodyContextRequest, BodyRequest, UserRequest } from '@/types/request'
import { Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export const postController = {
  post: async (req: Request, res: Response) => {
    try {
      const postData = await postService.getAll()

      return res.status(StatusCodes.OK).json({
        data: [...postData],
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

  postById: async (req: Request, res: Response) => {
    try {
      const postData = await postService.getById(req.params.id)

      return res.status(StatusCodes.OK).json({
        data: postData,
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

  postByUserId: async (
    { body: { userId } }: BodyRequest<{ userId: string }>,
    res: Response,
  ) => {
    try {
      const postData = await postService.getByUserId(userId)

      return res.status(StatusCodes.OK).json({
        data: postData,
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

  postBySearch: async (
    { body: { searchInput } }: BodyRequest<{ searchInput: string }>,
    res: Response,
  ) => {
    try {
      const postData = await postService.getByInput(searchInput)

      return res.status(StatusCodes.OK).json({
        data: [...postData],
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

  createPost: async (
    {
      body: { body },
      context: { user },
    }: BodyContextRequest<CreatePostPayload, UserRequest>,
    res: Response,
  ) => {
    try {
      await postService.createPost({ body, userId: user.id })

      return res.status(StatusCodes.OK).json({
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
