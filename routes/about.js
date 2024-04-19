const express = require('express');
const router = express.Router();
const { description, title } = require('../config/site')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('about', { title, description });
});

module.exports = router;
