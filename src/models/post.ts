import { Post } from '@/types/post'
import { Schema, model } from 'mongoose'

const schema = new Schema<Post>(
  {
    body: String,
    userId: String,
  },
  { timestamps: true },
)

export const PostModel = model('Post', schema)
