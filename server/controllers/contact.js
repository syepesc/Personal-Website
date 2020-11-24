let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');


// create a reference to the model
let Book = require('../models/book');
const Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contact/list', {title: 'Business Contacts', ContactList: contactList, displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact', displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "contactEmail": req.body.contactEmail,
        "created": req.body.created,
        "update": req.body.update
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit, displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        _id: id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        contactEmail: req.body.contactEmail,
        created: req.body.created,
        update: req.body.update
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/contact-list');
        }
    });
}