import { ObjectId } from 'mongoose'

export type Post = {
  id: ObjectId
  userId: string
  body: string
  createdAt: Date
  updatedAt: Date
}

export type CreatePostProps = Pick<Post, 'body' | 'userId'>

export type CreatePostPayload = Pick<Post, 'body'>
