import { ObjectId } from 'mongoose'

export type Post = {
  id: ObjectId
  userId: string
  title: string
  body: string
  createdAt: Date
  updatedAt: Date
}

export type CreatePostProps = Pick<Post, 'title' | 'body' | 'userId'>

export type CreatePostPayload = Pick<Post, 'title' | 'body'>
