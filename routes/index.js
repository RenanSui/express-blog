const express = require('express');
const router = express.Router();
const siteConfig = require('../config/site')
const Post = require('../database/models/Post')

router.get('/', async (req, res, next) => {
  try {
    let perPage = 10
    let page = req.query.page || 1

    const posts = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec()
    if (!posts) throw new Error

    const count = await Post.countDocuments()
    const nextPage = parseInt(page) + 1
    const hasNextPage = nextPage <= Math.ceil(count / perPage)

    res.render('index', {
      ...siteConfig,
      posts,
      currentPage: page,
      nextPage: hasNextPage ? nextPage : null,
    });
  } catch (error) {
    next(createError(404));
  }
});

// router.get('/', async (req, res, next) => {
//   try {
//     const posts = await Post.find()
//     console.log({ posts })
//     res.render('index', { ...siteConfig, posts });
//   } catch (error) {
//     next(createError(404));
//   }
// });

module.exports = router;
