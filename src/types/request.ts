import { Request } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { Document } from 'mongoose'
import { User } from './user'

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

export interface IParamsRequest<T> extends Request {
  params: T & ParamsDictionary
}

export interface IQueryRequest<T> extends Request {
  query: T & ParamsDictionary
}

export interface ICombinedRequest<
  Context,
  Body,
  Params = Record<string, unknown>,
  Query = Record<string, unknown>,
> extends Pick<ContextRequest<Context>, 'context'>,
    Pick<BodyRequest<Body>, 'body'>,
    Pick<IParamsRequest<Params>, 'params'>,
    Pick<IQueryRequest<Query>, 'query'> {}
