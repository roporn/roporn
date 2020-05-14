const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res, next) => {
  const { q } = req.query;

  fs.readdir(path.resolve(`./public/video`), (_, videoNames) => {
    console.log('videoNames', videoNames);
    const videos = videoNames.map((x) => ({
      name: x,
      url: '/video/' + x.replace('.mp4', '').replace(/\s/g, '-'),
    }));

    res.render('search', { videos: videos.filter(({name}) => name.toLowerCase().includes((q || '').trim().toLowerCase())), query: q });
  });
});
module.exports = router;
