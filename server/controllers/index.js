let express = require('express');
let app = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let passportLocal = require('passport-local-mongoose');

// create user model
let userModel = require('../models/user');
let User = userModel.User; // alias for User schema



// export index controllers
module.exports = {

    // INDEX CONTROLLERS
    displayHomePage: (req, res, next) => {
        res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
    },

    displayAboutPage: (req, res, next) => {
        res.render('template', { title: 'About', displayName: req.user ? req.user.displayName : '' });
    },

    displayPortfolioPage: (req, res, next) => {
        res.render('template', { title: 'Portfolio', displayName: req.user ? req.user.displayName : '' });
    },

    displayServicesPage: (req, res, next) => {
        res.render('template', { title: 'Services', displayName: req.user ? req.user.displayName : '' });
    },

    displayContactPage: (req, res, next) => {
        res.render('template', { title: 'Contact', displayName: req.user ? req.user.displayName : '' });
    },

    // USER-LOGIN CONTROLLERS
    displayLoginPage: (req, res, next) => {
        if (!req.User) {
            res.render('template',{
                title: "Login",
                messages: req.flash('loginMessage'),
                displayName: req.User ? req.User.displayName : ''
            })
        } else {
            return res.redirect('/');
        }
    },

    processLoginPage: (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            //server error
            if (err){
                return next(err);
            }
            // is there a user login error?
            if (!user) {
                req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/login');
            }
            req.login(user, (err) => {
                // server error?
                if(err) {
                    return next(err);
                }
                return res.redirect('/book-list'); // need to redirect to CONTACT-LIST
            });
        })(req, res, next);
    },

    displayRegisterPage: (req, res, next) => {
        // check if user is not already logged in
        if (!req.User) {
            res.render('template', {
                title: "Register",
                messages: req.flash('registerMessage'),
                displayName: req.User ? req.User.displayName : ''
            });
        } else {
            return res.redirect('/');
        }
    },

    processRegisterPage: (req, res, next) => {
        // instantiate a user object
        let newUser = new User({
            username: req.body.username,
            // password is different we need to encrypt
            email: req.body.email,
            displayName: req.body.displayName
        });

        User.register(newUser, req.body.password, (err) => {
            if (err) {
                console.log("Error inserting new user");
                if (err.name == 'userExistsError') {
                    req.flash(
                        'registerMessage',
                        'registration Error: User already exist'
                    );
                    console.log('Error: User already exists!');
                }
                return res.render('template', {
                    title: 'Register',
                    messages: req.flash('registerMessage'),
                    displayName: req.User ? req.User.displayName : ''
                });
            } else {
                // if no error exists, then registration successful

                // redirect user and authenticate

                return passport.authenticate('local')(req, res, () => {
                    res.redirect('/book-list'); // redirect to CONTACT-LIST as logged in
                });
            }
        })
    },

    performLogout: (req, res, next) => {
        req.logout();
        res.redirect('/');
    }
};