const express = require('express');
const router = express.Router();
const siteConfig = require('../config/site')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { ...siteConfig });
});

module.exports = router;
