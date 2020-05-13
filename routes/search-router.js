const express = require('express');
const router = express.Router();
const articles = require('../data/articles');
const moment = require('moment');

router.get('/', (req, res, next) => {
  const { q } = req.query;

  res.render('search', { articles: articles.filter(({ title }) => title.toLowerCase().includes((q || '').trim().toLowerCase())), moment, query: q });
});

module.exports = router;
