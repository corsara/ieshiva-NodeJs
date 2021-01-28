var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoConect = require("./db/mongodb-conect");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
//para que el sharaat no me aga problema con la coneccion.
app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,x-auth-token');
  next();
});
  

const imagesR = require('./routes/images');
const studentR = require('./routes/students');
const loginR = require('./routes/login')
const videosR = require('./routes/videos')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/images', imagesR);
app.use('/students',studentR);
app.use('/login', loginR);
app.use('/videos', videosR);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
