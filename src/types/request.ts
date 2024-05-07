import { Request } from 'express'
import { Document } from 'mongoose'
import { User } from '.'

export interface BodyRequest<T> extends Omit<Request, 'body'> {
  body: T
}

export interface ContextRequest<T> extends Omit<Request, 'context'> {
  context: T
}

export interface UserRequest {
  user: Omit<User, 'id'> & Document
  accessToken: string
}

export type BodyContextRequest<T, B> = Omit<Request, 'body' | 'context'> & {
  body: T
  context: B
}
