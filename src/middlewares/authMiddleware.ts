import { userService } from '@/service/userService'
import { getAccessTokenFromHeaders } from '@/utils/headers'
import { jwtVerify } from '@/utils/jwt'
import { NextFunction, Request, Response } from 'express'

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    Object.assign(req, { context: {} })

    const { accessToken } = getAccessTokenFromHeaders(req.headers)
    if (!accessToken) return next()

    const { id } = jwtVerify({ accessToken: '' })
    if (!id) return next()

    const user = await userService.getById(id)
    if (!user) return next()

    Object.assign(req, {
      context: {
        user,
        accessToken,
      },
    })

    return next()
  } catch (error) {
    return next()
  }
}
