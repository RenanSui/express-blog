import { IUserMethods, IUserModel, User } from '@/types'
import { compareSync } from 'bcrypt'
import { Schema, model } from 'mongoose'

const schema = new Schema<User, IUserModel, IUserMethods>(
  {
    name: String,
    email: String,
    password: String,
    username: { type: String, unique: true },
    imageUrl: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
)

schema.methods.comparePassword = function (password: string) {
  return compareSync(password, this.password)
}

export const UserModel = model('User', schema)
