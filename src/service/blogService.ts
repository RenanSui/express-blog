import { PostModel } from '@/models'
import { liveSearchOptions } from '@/utils/blog'

export const blogService = {
  getAll: async () => PostModel.find(),

  getById: (id: string) => PostModel.findById({ _id: id }),

  getByInput: async (input: string) =>
    await PostModel.find(liveSearchOptions(input)),
}
