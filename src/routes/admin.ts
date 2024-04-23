import { siteConfig } from '@/config/site'
import { Router } from 'express'

export const admin = (router: Router): void => {
  router.get('/admin', async (req, res) => {
    // const { username, email, password } = req.body
    // console.log({ username, email, password })
    res.render('admin', { ...siteConfig })
  })
}
