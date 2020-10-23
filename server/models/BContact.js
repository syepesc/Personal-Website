let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// create business contact schema
let BContact = mongoose.Schema (
    // business contact fields
    {
    contactName: {
        type: String,
        default: "",
        trim: true,
        required: 'Contact name is required'
    },
    contactNumber: {
        type: Number,
        default: "",
        trim: true,
        required: 'Contact number is required'
    },
    contactEmail: {
        type: String,
        default: "",
        trim: true,
        required: 'Email is required.'
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }
    }, 
    {
        collections: "contacts"
    }
);

module.exports.BContact = mongoose.model('BContact', BContact);