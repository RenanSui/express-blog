const express = require('express');
const router = express.Router();
const siteConfig = require('../config/site')
const Post = require('../database/models/Post')

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) throw new Error

    const post = await Post.findById({ _id: id })
    if (!post) throw new Error

    const newSiteConfig = {
      ...siteConfig,
      title: `${post.title} - ${siteConfig.title}`
    }

    res.render('post', { ...newSiteConfig, post });
  } catch (error) {
    next(createError(404));
  }
});

module.exports = router;