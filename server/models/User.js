const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 15,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_t: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const model = mongoose.model('user', User)
module.exports = model
