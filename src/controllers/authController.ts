import { siteConfig } from '@/config/site'
import { userService } from '@/service/userService'
import { Request, Response } from 'express'
import { join } from 'path'

const authLayout = join(__dirname, '../views/layouts/auth')

export const authController = {
  signIn: (req: Request, res: Response) => {
    res.render('auth/sign-in', { ...siteConfig, layout: authLayout })
  },

  signUp: (req: Request, res: Response) => {
    res.render('auth/sign-up', { ...siteConfig, layout: authLayout })
  },

  signOut: (req: Request, res: Response) => {
    res.render('auth/sign-out', { ...siteConfig, layout: authLayout })
  },

  confirmation: (req: Request, res: Response) => {
    res.render('auth/confirmation', { ...siteConfig, layout: authLayout })
  },

  loginUser: (req: Request, res: Response) => {
    userService.login({ email: req.body.email, password: req.body.password })
    res.redirect('/')
  },

  createUser: (req: Request, res: Response) => {
    userService.create({ email: req.body.email, password: req.body.password })
    res.redirect('/auth/confirmation')
  },

  logoutUser: (req: Request, res: Response) => {
    userService.logout()
    res.redirect('/')
  },
}
