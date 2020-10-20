let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book schema
let Book = require('../models/book');


/* GET Route for the Book list page - READ Operation */
router.get('./', (req, res, next) => {
    Book.find((err, booklist) => {
        if (err) {
            return console.error(err);
        } else {
            //console.log(Booklist);

            res.render('book', {title: 'Book List', booklist: booklist})
        }
    });
});


module.exports = router;