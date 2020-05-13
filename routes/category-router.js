const express = require('express');
const router = express.Router();
const articles = require('../data/articles');
const moment = require('moment');

const routeMap = {
  '/articles': {
    categoryName: 'Articles',
    type: 'Article',
  },
  '/tips-n-tricks': {
    categoryName: 'Tips & Tricks',
    type: 'Tips & Tricks',
  },
  '/tutorials': {
    categoryName: 'Tutorials',
    type: 'Tutorial',
  },
  '/answers': {
    categoryName: 'Answers',
    type: 'Answer',
  },
};

Object.keys(routeMap).forEach((routeKey) => {
  router.get(routeKey, (req, res, next) => {
    const { categoryName, type } = routeMap[routeKey];

    res.render('category', { categoryName, articles: articles.filter((x) => x.type == type), moment });
  });
});

module.exports = router;
