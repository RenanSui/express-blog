import { User } from '@/types'
import { Schema, model } from 'mongoose'

const schema = new Schema<User>(
  {
    username: String,
    email: String,
    password: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

export const UserModel = model('User', schema)
