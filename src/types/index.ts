import { Model } from 'mongoose'

export interface IUserMethods {
  comparePassword: (password: string) => boolean
}

export type User = {
  email: string
  password: string
  isAdmin: boolean
}

export type IUserModel = Model<User, unknown, IUserMethods>
