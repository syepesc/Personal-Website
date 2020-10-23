var express = require('express');
var app = express.Router();

/* GET home page. '/' */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. '/home' */
app.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. */
app.get('/about', function(req, res, next) {
  res.render('template', { title: 'About'});
});

/* GET Products page. */
app.get('/portfolio', function(req, res, next) {
  res.render('template', { title: 'Portfolio'});
});

/* GET Services page. */
app.get('/services', function(req, res, next) {
  res.render('template', { title: 'Services'});
});

/* GET Contact Us page. */
app.get('/contact', function(req, res, next) {
  res.render('template', { title: 'Contact'});
});

module.exports = app;
