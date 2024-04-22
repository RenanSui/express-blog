import { siteConfig } from '@/config/site'
import { PostModel } from '@/models/post'
import { Request, Router } from 'express'
import createHttpError from 'http-errors'

export const post = (router: Router): void => {
  router.get('/post/:id', async (req: Request, res, next) => {
    try {
      const id = req.params.id
      if (!id) throw new Error()

      const post = await PostModel.findById({ _id: id })
      if (!post) throw new Error()

      const newSiteConfig = {
        ...siteConfig,
        title: `${post.title} - ${siteConfig.title}`,
      }

      res.render('post', { ...newSiteConfig, post })
    } catch (error) {
      next(createHttpError(404))
    }
  })

  router.post('/post', async (req, res) => {
    res.render('post', { ...siteConfig, post })
  })
}
