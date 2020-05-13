// const express = require('express');
// const router = express.Router();
// const path = require('path');
// const moment = require('moment');

// router.get('/*', (req, res, next) => {
//   let requestedUrl = req.baseUrl + req.path;

//   let isAmp = false;
//   if (requestedUrl.includes('/amp')) {
//     isAmp = true;
//     requestedUrl = requestedUrl.replace('/amp', '');
//   }

//   const video = getArticleByUrl(requestedUrl);

//   if (video) {
//     if (requestedUrl.includes('/img')) {
//       const requestedImageName = requestedUrl.substring(requestedUrl.lastIndexOf('/'));
//       const resolvedFilePath = path.resolve(`./data/videos/${video.id}/img${requestedImageName}`);

//       res.sendFile(resolvedFilePath);
//     } else {
//       res.render('video', { video: video, mapBlockToHtml, moment, isAmp });
//     }
//   } else {
//     return res.redirect('/');
//   }
// });

// module.exports = router;
