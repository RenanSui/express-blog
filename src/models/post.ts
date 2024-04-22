import { Post } from '@/types'
import { Schema, model } from 'mongoose'

const schema = new Schema<Post>({
  title: String,
  body: String,
  createdAt: Date,
  updatedAt: Date,
})

export const PostModel = model('Post', schema)
