import { blogService } from '@/service/blogService'
import { CreatePostPayload } from '@/types/post'
import { BodyContextRequest, UserRequest } from '@/types/request'
import { Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export const blogController = {
  post: async (req: Request, res: Response) => {
    try {
      const postData = await blogService.getAll()

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

  postId: async (req: Request, res: Response) => {
    try {
      const postData = await blogService.getById(req.params.id)

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

  postSearch: async (req: Request, res: Response) => {
    try {
      const postData = await blogService.getByInput(req.body.searchInput)

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
      body: { body, title },
      context: { user },
    }: BodyContextRequest<CreatePostPayload, UserRequest>,
    res: Response,
  ) => {
    try {
      await blogService.createPost({ body, title, userId: user.id })

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
