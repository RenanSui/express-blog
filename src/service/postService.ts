import { PostModel } from '@/models'
import { CreatePostProps } from '@/types/post'
import { liveSearchOptions } from '@/utils/post'

export const postService = {
  getAll: () => PostModel.find(),

  getById: (id: string) => PostModel.findById({ _id: id }),

  getByUserId: (userId: string) => PostModel.find({ userId }),

  getByInput: (input: string) => PostModel.find(liveSearchOptions(input)),

  createPost: (formData: CreatePostProps) =>
    new PostModel({ ...formData }).save(),
}
