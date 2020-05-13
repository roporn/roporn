const express = require('express');
const router = express.Router();
const moment = require('moment');
const fs = require('fs');
const path = require('path');

router.get('/', (req, res, next) => {
  fs.readdir(path.resolve(`./videos`), (_, videoNames) => {
    console.log('videoNames', videoNames);

    res.render('index', { videoNames });
  });
});

module.exports = router;
