import { siteConfig } from '@/config/site'
import { PostModel } from '@/models/post'
import { Router } from 'express'
import createHttpError from 'http-errors'

export const lobby = (router: Router): void => {
  router.get('/', async (req, res, next) => {
    try {
      const perPage = 10
      // // const page = req.query.page || 1
      const page = 1 * 1

      const posts = await PostModel.aggregate([{ $sort: { createdAt: -1 } }])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec()

      const count = await PostModel.countDocuments()
      // const nextPage = parseInt(page) + 1
      const nextPage = page + 1
      const hasNextPage = nextPage <= Math.ceil(count / perPage)

      res.render('lobby', {
        ...siteConfig,
        posts,
        currentPage: page,
        nextPage: hasNextPage ? nextPage : null,
      })
    } catch (error) {
      next(createHttpError(404))
    }
  })
}
