import { siteConfig } from '@/config/site'
import { PostModel } from '@/models/post'
import { Request, Router } from 'express'
import createHttpError from 'http-errors'

export const search = (router: Router): void => {
  router.post('/search', async (req: Request, res, next) => {
    try {
      const searchInput = req.body.searchInput.replace(/[^a-zA-Z0-9]/g, '')

      const posts =
        searchInput.length === 0
          ? []
          : await PostModel.find({
              $or: [
                { title: { $regex: new RegExp(searchInput, 'i') } },
                { body: { $regex: new RegExp(searchInput, 'i') } },
              ],
            })

      res.render('search', { ...siteConfig, searchInput, posts })
    } catch (error) {
      next(createHttpError(404))
    }
  })
}
