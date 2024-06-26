import { NextFunction, Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

type ExpressError = (
  err: Error & { status: number },
  req: Request,
  res: Response,
  next: NextFunction,
) => void

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ErrorHandler: ExpressError = (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  return res.status(StatusCodes.BAD_REQUEST).json({
    message: ReasonPhrases.BAD_REQUEST,
    status: StatusCodes.BAD_REQUEST,
  })
}
