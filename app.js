var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var app = express();

app.set('secret', 'SECRET');
var cons = require('consolidate');

app.engine('html',cons.swig);
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.use(function(req, res, next) {
  let err = new Error('No encontrado');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({ error: true, mensaje: err.message || 'Fallo del servidor' });
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, function() {
  console.log(`Servidor express corriendo en http://${HOST}:${PORT}`)
});

module.exports = app;
