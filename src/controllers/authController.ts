import { createHash } from '@/lib/hash'
import { userService } from '@/service/userService'
import { SignInPayload, SignUpPayload } from '@/types/auth'
import { BodyRequest } from '@/types/request'
import { jwtSign } from '@/utils/jwt'
import { Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { startSession } from 'mongoose'

// userService.login({ email: req.body.email, password: req.body.password })
// res.redirect('/')

// // can only be accessed by server requests
// // path = where the cookie is valid
// path: '/',
// // domain = what domain the cookie is valid on
// domain: 'localhost',
// // secure = only send cookie over https
// secure: false,
// // sameSite = only send cookie if the request is coming from the same origin
// sameSite: 'lax', // "strict" | "lax" | "none" (secure must be true)
// // maxAge = how long the cookie is valid for in milliseconds
// .setHeader('Access-Control-Allow-Credentials', 'true')

export const authController = {
  signIn: async (
    { body: { email, password } }: BodyRequest<SignInPayload>,
    res: Response,
  ) => {
    try {
      const user = await userService.getByEmail(email)

      const comparePassword = user?.comparePassword(password)
      if (!user || !comparePassword) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: ReasonPhrases.NOT_FOUND,
          status: StatusCodes.NOT_FOUND,
        })
      }

      const { accessToken } = jwtSign(user.id)

      return res.status(StatusCodes.OK).json({
        data: { accessToken },
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

  signUp: async (
    { body: { email, password } }: BodyRequest<SignUpPayload>,
    res: Response,
  ) => {
    const session = await startSession()
    try {
      const isUserExist = await userService.isExistByEmail(email)

      if (isUserExist) {
        return res.status(StatusCodes.CONFLICT).json({
          message: ReasonPhrases.CONFLICT,
          status: StatusCodes.CONFLICT,
        })
      }

      session.startTransaction()
      const hashedPassword = await createHash(password)

      const user = await userService.create(
        {
          email,
          password: hashedPassword,
        },
        session,
      )

      const { accessToken } = jwtSign(user.id)

      await session.commitTransaction()
      session.endSession()

      return res.status(StatusCodes.OK).json({
        data: { accessToken },
        message: ReasonPhrases.OK,
        status: StatusCodes.OK,
      })
    } catch (error) {
      if (session.inTransaction()) {
        await session.abortTransaction()
        session.endSession()
      }

      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      })
    }
  },

  signOut: (req: Request, res: Response) => {
    res.redirect('/')
  },
}
