let express = require('express');
let app = express.Router();


// import index controller
let indexController = require('../controllers/index');


// INDEX ROUTES
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


// USER-LOGIN ROUTES
/* GET route for displaying the login page */
app.get('/login', indexController.displayLoginPage);

/* POST route for processing the login page */
app.post('/register', indexController.processLoginPage);

/* GET route for displaying the register page */
app.get('/register', indexController.displayRegisterPage);

/* POST route for processing the register page */
app.post('/register', indexController.processRegisterPage);

/* GET to perform logout */
app.get('/logout', indexController.performLogout);



module.exports = app;
