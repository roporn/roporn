const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const ampCors = require('@ampproject/toolbox-cors');

const app = express();

app.use(ampCors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(compression());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.use((req, _, next) => {
  req.url = req.url.replace(/[/]+/g, '/');
  req.originalUrl = req.originalUrl.replace(/[/]+/g, '/');
  next();
});

app.use('/', require('./routes/index-router'));
app.use('/article', require('./routes/article-router'));
app.use('/category', require('./routes/category-router'));
app.use('/search', require('./routes/search-router'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
