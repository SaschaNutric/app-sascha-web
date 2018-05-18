var express = require('express'),
	path = require('path'),
	logger = require('morgan'),
	favicon = require('serve-favicon'),
	cons = require('consolidate'),
	app = express();

app.set('secret', 'SECRET');

app.engine('html',cons.swig);
app.set('views', path.join(__dirname, 'public/sascha-web'));
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public/sascha-web')));
app.use(logger('dev'));

app.use(function(req, res, next) {
  let err = new Error('No encontrado');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({ error: true, mensaje: err.message || 'Fallo del servidor' });
});

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, function() {
  console.log(`Servidor express corriendo en http://${HOST}:${PORT}`)
});

module.exports = app;
