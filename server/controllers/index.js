let express = require('express');
let app = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('template', { title: 'About' });
}

module.exports.displayPortfolioPage = (req, res, next) => {
    res.render('template', { title: 'Portfolio' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('template', { title: 'Services' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('template', { title: 'Contact' });
}