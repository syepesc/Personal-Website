let express = require('express');
let app = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create user model
let contactModel = require('../models/BContact');
let Contact = contactModel.Contact; // alias for User schema

// export business contact controllers
module.exports = {

    // BUSINESS CONTACT CONTROLLERS
    displayContactList: (req, res, next) => {
        app.render('template', { title: 'BContactList' })
    }
};