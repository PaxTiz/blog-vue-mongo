const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 20
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const model = mongoose.model('post', Post)
module.exports = model
