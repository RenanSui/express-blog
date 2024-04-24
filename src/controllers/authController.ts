import { createHash } from '@/lib/hash'
import { userService } from '@/service/userService'
import { jwtSign } from '@/utils/jwt'
import { NextFunction, Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { startSession } from 'mongoose'

export const authController = {
  signIn: (req: Request, res: Response) => {
    // userService.login({ email: req.body.email, password: req.body.password })
    res.redirect('/')
  },

  // { body: { email, password } }: BodyRequest<SignUpPayload>,
  signUp: async (req: Request, res: Response, next: NextFunction) => {
    const session = await startSession()
    const {
      body: { email, password },
    } = req

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

      res.cookie('jwt', accessToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      })
      return next()
    } catch (error) {
      return next()
    }
  },

  signOut: (req: Request, res: Response) => {
    res.redirect('/')
  },
}
