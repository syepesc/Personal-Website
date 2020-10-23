let express = require('express');
let app = express.Router();


// import controller
let indexController = require('../controllers/index');

/* GET home page. '/' */
app.get('/', indexController.displayHomePage);

/* GET home page. '/home' */
app.get('/home', indexController.displayHomePage);


/* GET About Us page. */
app.get('/about', indexController.displayAboutPage);


/* GET Products page. */
app.get('/portfolio', indexController.displayPortfolioPage);


/* GET Services page. */
app.get('/services', indexController.displayServicesPage);


/* GET Contact Us page. */
app.get('/contact', indexController.displayContactPage);


module.exports = app;
