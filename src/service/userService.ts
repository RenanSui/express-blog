import { UserModel } from '@/models'
import { ClientSession, ObjectId } from 'mongoose'

export const userService = {
  create: async (
    { email, password }: { email: string; password: string },
    session: ClientSession,
  ) =>
    new UserModel({
      email,
      password,
    }).save({ session }),

  getById: (userId: ObjectId) => UserModel.findById(userId),

  getByEmail: (email: string) => UserModel.findOne({ email }),

  isExistByEmail: (email: string) => UserModel.exists({ email }),
}
