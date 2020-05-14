const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res, next) => {
  fs.readdir(path.resolve(`./public/video`), (_, videoNames) => {
    console.log('videoNames', videoNames);
    const videos = videoNames.map(x => ({
      name: x,
      url: '/video/' + x.replace('.mp4', '').replace(/\s/g, '-')
    }))

    res.render('index', { videos });
  });
});

module.exports = router;
