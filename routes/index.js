var express = require('express');
var router = express.Router();

/* GET home page. '/' */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. '/home' */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('template', { title: 'About'});
});

/* GET Products page. */
router.get('/portfolio', function(req, res, next) {
  res.render('template', { title: 'Portfolio'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('template', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('template', { title: 'Contact'});
});

module.exports = router;
