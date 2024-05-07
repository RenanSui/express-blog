import { Post } from '@/types/post'
import { Schema, model } from 'mongoose'

const schema = new Schema<Post>(
  {
    title: String,
    body: String,
    userId: String,
  },
  { timestamps: true },
)

export const PostModel = model('Post', schema)
