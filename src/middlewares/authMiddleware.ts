import { userService } from '@/service/userService'
import { jwtVerify } from '@/utils/jwt'
import { NextFunction, Request, Response } from 'express'

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    Object.assign(req, { context: {} })

    const accessToken = req.headers.cookie
    console.log({ accessToken })
    if (!accessToken) {
      return next()
    }

    const { id } = jwtVerify({ accessToken })
    console.log({ id })
    if (!id) return next()

    const user = await userService.getById(id)
    console.log({ user })
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
