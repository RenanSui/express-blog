import { Request } from 'express'

export interface BodyRequest<T> extends Omit<Request, 'body'> {
  body: T
}
