import { generateFromEmail, generateUsername } from 'unique-username-generator'
import { ClientSession, ObjectId } from 'mongoose'
import { UserModel } from '@/models'

export const userService = {
  create: async (
    { email, password }: { email: string; password: string },
    session: ClientSession,
  ) =>
    new UserModel({
      name: generateUsername(),
      username: generateFromEmail(email, 4),
      email,
      password,
    }).save({ session }),

  getById: (userId: ObjectId) => UserModel.findById(userId),

  getByEmail: (email: string) => UserModel.findOne({ email }),

  isExistByEmail: (email: string) => UserModel.exists({ email }),
}
