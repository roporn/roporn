const express = require('express');
const router = express.Router();
const articles = require('../data/articles');
const moment = require('moment');

router.get('/', (req, res, next) => {
  res.render('index', { articles, moment });
});

module.exports = router;
