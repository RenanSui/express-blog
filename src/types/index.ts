import { ObjectId } from 'mongoose'

export type Post = {
  id: ObjectId
  title: string
  body: string
  createdAt: Date
  updatedAt: Date
}

export type User = {
  username: string
  email: string
  password: string
  isAdmin: boolean
}
