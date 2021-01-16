const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    title: String,
    description: String,
    date: Date
});

const model = mongoose.model('post', Post)
module.exports = model
