const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Post = require('./models/Post')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

mongoose.connect('mongodb://localhost/vue-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.get('/', (req, res) => {
    Post.find({}, (err, docs) => {
        res.json({
            'posts': docs
        })
    })
})

app.post('/', (req, res) => {
    const data = req.body
    const post = new Post({
        title: data.title,
        description: data.description,
        date: data.date
    })
    post.save((err) => {
        if(err) {
            res.json({
                error: err.message
            })
        }
        res.json({
            message: "Article crée",
            post: post
        })
    })
})


app.listen(8000, () => console.info("Listening on port 8000"))
