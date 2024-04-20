const express = require('express')
const router = express.Router()
const siteConfig = require('../config/site')
const Post = require('../database/models/Post')
const createError = require('http-errors')

router.get('/', async (req, res, next) => {
  try {
    const perPage = 10
    const page = req.query.page || 1

    const posts = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec()
    if (!posts) throw new Error()

    const count = await Post.countDocuments()
    const nextPage = parseInt(page) + 1
    const hasNextPage = nextPage <= Math.ceil(count / perPage)

    res.render('index', {
      ...siteConfig,
      posts,
      currentPage: page,
      nextPage: hasNextPage ? nextPage : null,
    })
  } catch (error) {
    next(createError(404))
  }
})

module.exports = router
