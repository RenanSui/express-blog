const express = require('express')
const router = express.Router()
const siteConfig = require('../config/site')
const Post = require('../database/models/Post')
const createError = require('http-errors')

router.post('/', async (req, res, next) => {
  try {
    const searchInput = req.body.searchInput.replace(/[^a-zA-Z0-9]/g, '')

    const posts =
      searchInput.length === 0
        ? []
        : await Post.find({
            $or: [
              { title: { $regex: new RegExp(searchInput, 'i') } },
              { body: { $regex: new RegExp(searchInput, 'i') } },
            ],
          })

    res.render('search', { ...siteConfig, searchInput, posts })
  } catch (error) {
    next(createError(404))
  }
})

module.exports = router
