const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/*', (req, res, next) => {
  const videoName = req.path.replace('/', '').replace(/-/g, ' ') + '.mp4';

  if (videoName) {
    res.render('video', { videoName });
  } else {
    return res.redirect('/');
  }
});

function getVideoByUrl() {}

module.exports = router;
