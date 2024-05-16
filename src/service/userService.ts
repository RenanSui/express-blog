import { UserModel } from '@/models'
import { ClientSession, ObjectId } from 'mongoose'
import { generateFromEmail, generateUsername } from 'unique-username-generator'

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

  updateProfileByUserId: (
    userId: ObjectId,
    { name, username }: { name: string; username: string },
    session?: ClientSession,
  ) => {
    const data = [{ _id: userId }, { name, username }]

    let params = null

    if (session) {
      params = [...data, { session }]
    } else {
      params = data
    }

    return UserModel.updateOne(...params)
  },

  getById: (userId: ObjectId) => UserModel.findById(userId),

  getByEmail: (email: string) => UserModel.findOne({ email }),

  isExistByEmail: (email: string) => UserModel.exists({ email }),
}
