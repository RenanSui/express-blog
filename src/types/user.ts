import { Model } from 'mongoose'

export interface IUserMethods {
  comparePassword: (password: string) => boolean
}

export type User = {
  name: string
  email: string
  password: string
  username: string
  imageUrl: string
  isAdmin: boolean
}

export type IUserModel = Model<User, unknown, IUserMethods>

export type UpdateProfilePayload = Required<
  Pick<User, 'name' | 'username' | 'imageUrl'>
>

export type GetUserByIdPayload = { id: string }
