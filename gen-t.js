const fs = require('fs');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
const extractFrames = require('ffmpeg-extract-frames');
const { getVideoDurationInSeconds } = require('get-video-duration');

function generateThumbnails() {
  const allFiles = fs.readdirSync('./public/video');
  const allThumbnails = fs.readdirSync('./public/img/thumbnails');

  allFiles.forEach((x) => {
    getVideoDurationInSeconds('./public/video/' + x).then((duration) => {
      const thumbnailName = `./public/img/thumbnails/${x.replace('.mp4', '')}`;

      if (!allThumbnails.includes(x.replace('.mp4', ''))) {
        const stepSize = (duration / 10) * 1000;
        extractFrames({
          input: './public/video/' + x,
          output: thumbnailName + '/generated_%i.jpg',
          offsets: [
             10,
             stepSize * 1,
             stepSize * 2,
             stepSize * 3,
             stepSize * 4,
             stepSize * 5,
             stepSize * 6,
             stepSize * 7,
             stepSize * 8,
             stepSize * 9,
             stepSize * 9.9,
          ],
        });
      }
    });
  });
}

generateThumbnails();
