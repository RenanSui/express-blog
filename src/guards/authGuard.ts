import { NextFunction, Request, Response } from 'express'

export const authGuard = {
  isAuth: (req: Request, res: Response, next: NextFunction) => {
    next()
  },
}
