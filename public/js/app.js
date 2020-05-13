document.addEventListener('readystatechange', () => {
  var lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    var wScroll = this.scrollY;
    if (wScroll > document.querySelector('#nav').clientHeight) {
      if (wScroll < lastScrollTop) {
        document.querySelector('#nav-fixed').classList.remove('slide-up');
        document.querySelector('#nav-fixed').classList.add('slide-down');
      } else {
        document.querySelector('#nav-fixed').classList.remove('slide-down');
        document.querySelector('#nav-fixed').classList.add('slide-up');
      }
    }
    lastScrollTop = wScroll;
  });

  document.querySelector('.search-btn').addEventListener('click', () => {
    document.querySelector('.search-form').classList.add('active');
    setTimeout(() => {
      document.querySelector('.search-input').focus();
    }, 100);
  });

  document.querySelector('.search-close').addEventListener('click', () => {
    document.querySelector('.search-form').classList.remove('active');
    if (window.location.href.includes('/search')) {
      window.location.href = '/';
    }
  });
});
