import { Model, ObjectId } from 'mongoose'

export type Post = {
  id: ObjectId
  title: string
  body: string
  createdAt: Date
  updatedAt: Date
}

export interface IUserMethods {
  comparePassword: (password: string) => boolean
}

export type User = {
  username: string
  email: string
  password: string
  isAdmin: boolean
}

export type IUserModel = Model<User, unknown, IUserMethods>
