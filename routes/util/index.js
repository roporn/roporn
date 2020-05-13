const articles = require('../../data/articles');

module.exports = {
  getArticleByUrl: (url) => {
    const nextIndex = url.includes('/img/') ? url.indexOf('/img/') : undefined;

    const incomingArticleUrl = url.substring(0, nextIndex);

    const currentArticle = articles.find(({ url }) => url == incomingArticleUrl);

    return currentArticle;
  },
  mapBlockToHtml: ({ type, innerText, url, className, alt }, articleUrl) => {
    `src="${articleUrl}/img/${url}"`;

    if (type == 'img') {
      return `<picture>
      <source srcset="${articleUrl}/img/${url.replace('.jpg', '.webp')}" type="image/webp" />
      <source srcset="${articleUrl}/img/${url}" type="image/jpeg" />
      <img src="${articleUrl}/img/${url}" ${alt ? 'alt' + `="${alt}"` : ''} />
      </picture>
      `;
    }

    const hrefOrSrc = url ? `href="${url}"` : '';

    return `<${type} 
                ${hrefOrSrc}
                ${className ? 'class' + `="${className}"` : ''}
                ${alt ? 'alt' + `="${alt}"` : ''}
            >
                ${innerText || ''}
            </${type}>`;
  },
};
