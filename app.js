require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const expressLayout = require('express-ejs-layouts')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const siteConfig = require('./config/site')

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

const app = express();
const PORT = 4000 || process.env.PORT

// view engine setup
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { ...siteConfig });
});

// listener
app.listen(PORT, () => {
  console.log('listening to port: ' + PORT)
  console.log('http://localhost:' + PORT)
})

module.exports = app;
