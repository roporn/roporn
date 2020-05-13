const fs = require('fs');
const path = require('path');
const moment = require('moment');

const enhance = (article) => {
  const articleHref = article.title
    .replace(/[\?\!\-\:]/g, '')
    .replace(/\s/g, '-')
    .toLowerCase();
  article.url = `/article/${articleHref}`;
  article.color = typeColors[article.type];
  article.datePublishedJsonLd = moment(article.date, 'DD/MM/YYYY').format('YYYY-MM-DD 18:23:32');

  const coverImageUrl = `${article.url}/img/cover.jpg`;

  article.coverImageUrl = fs.existsSync(path.resolve(`./data/articles/${article.id}/img/cover.jpg`)) ? coverImageUrl : '/img/default-cover.jpg';
  return article;
};

const requireAndEnhance = (_, i) => {
  try {
    const article = require(`./articles/${i + 1}/data.js`);
    article.body.forEach((x) => {
      if (x.type == 'pre') {
        x.innerText = x.innerText.replace(/<\/b>/g, 'escapeMeBoyTwo');
        x.innerText = x.innerText.replace(/<b>/g, 'escapeMeBoy');
        x.innerText = x.innerText.replace(/</g, '&lt;');
        x.innerText = x.innerText.replace(/escapeMeBoyTwo/g, '</b>');
        x.innerText = x.innerText.replace(/escapeMeBoy/g, '<b>');
      }
    });
    return enhance({
      id: i + 1,
      ...article,
    });
  } catch (e) {
    return null;
  }
};

const typeColors = {
  Article: '#0078ff',
  'Tips & Tricks': '#ff8700',
  Tutorial: '#8d00ff',
  Answer: '#4bb92f',
};

module.exports = [...new Array(1000)]
  .map(requireAndEnhance)
  .filter((x) => x);
  // .filter((x) => !(x || {}).hidden);
