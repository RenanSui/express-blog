import { UserModel } from '@/models'
import { User } from '@/types/user'
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
    formData: Pick<User, 'name' | 'imageUrl'>,
    session?: ClientSession,
  ) => {
    const data = [{ _id: userId }, { ...formData }]

    let params = null

    if (session) {
      params = [...data, { session }]
    } else {
      params = data
    }

    return UserModel.updateOne(...params)
  },

  updateUsernameById: (
    userId: ObjectId,
    formData: Pick<User, 'username'>,
    session?: ClientSession,
  ) => {
    const data = [{ _id: userId }, { ...formData }]

    let params = null

    if (session) {
      params = [...data, { session }]
    } else {
      params = data
    }

    return UserModel.updateOne(...params)
  },

  getById: (userId: string | ObjectId) => UserModel.findById(userId),

  getByEmail: (email: string) => UserModel.findOne({ email }),

  getByUsername: (username: string) => UserModel.findOne({ username }),

  isExistByEmail: (email: string) => UserModel.exists({ email }),

  isExistByUsername: (username: string) => UserModel.exists({ username }),
}
