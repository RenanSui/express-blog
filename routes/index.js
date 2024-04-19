const express = require('express');
const router = express.Router();
const siteConfig = require('../config/site')
const Post = require('../database/models/Post')

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find()
    console.log({ posts })
    res.render('index', { ...siteConfig, posts });
  } catch (error) {
    next(createError(404));
  }
});

function insertPostData() {
  Post.insertMany([
    {
      title: 'Building a Blog',
      body: "This is the body text"
    }
  ])
}

module.exports = router;
