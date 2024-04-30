import { IUserMethods, IUserModel, User } from '@/types'
import { compareSync } from 'bcrypt'
import { Schema, model } from 'mongoose'

const schema = new Schema<User, IUserModel, IUserMethods>(
  {
    email: String,
    password: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

schema.methods.comparePassword = function (password: string) {
  return compareSync(password, this.password)
}

export const UserModel = model('User', schema)
