let express = require('express');
let app = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create user model
let userModel = require('../models/user');
let User = userModel.User; // alias for User schema



// export index controllers
module.exports = {

    // INDEX CONTROLLERS
    displayHomePage: (req, res, next) => {
        res.render('index', { title: 'Home' });
    },

    displayAboutPage: (req, res, next) => {
        res.render('template', { title: 'About' });
    },

    displayPortfolioPage: (req, res, next) => {
        res.render('template', { title: 'Portfolio' });
    },

    displayServicesPage: (req, res, next) => {
        res.render('template', { title: 'Services' });
    },

    displayContactPage: (req, res, next) => {
        res.render('template', { title: 'Contact' });
    },

    // USER-LOGIN CONTROLLERS
    displayLoginPage: (req, res, next) => {
        if (!req.User) {
            res.render('template',{
                title: "Login",
                //messages: req.flash('loginMessage'),
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
            if (!User) {
                //req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/login');
            }
            req.login(User, (err) => {
                // server error?
                if(err) {
                    return next(err);
                }
                return res.redirect('/'); // need to redirect to CONTACT-LIST
            });
        })(req, res, next);
    },

    displayRegisterPage: (req, res, next) => {
        // check if user is not already logged in
        if (!req.User) {
            res.render('template', {
                title: "Register",
                //messages: req.flash('registerMessage'),
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

        User.register(newUser, req.body.password, (user) => {
            if (err) {
                console.log("Error inserting new user");
                if (err.name == 'userExistsError') {
                    /*
                    req.flash(
                        'registerMessage',
                        'registration Error: User already exist'
                    );
                    */
                    console.log('Error: User already exists!');
                }
                res.render('template', {
                    title: 'Register',
                    //messages: req.flash('registerMessage'),
                    displayName: req.User ? req.User.displayName : ''
                });
            } else {
                // if no error exists, then registration successful

                // redirect user and authenticate

                return passport.authenticate('local', (req, res, () => {
                    res.redirect('/'); // redirect to CONTACT-LIST as logged in
                }))
            }
        })
    },

    performLogout: (req, res, next) => {
        req.logout();
        red.redirect('/');
    }
};