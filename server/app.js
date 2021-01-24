const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Post = require('./models/Post')
const User = require('./models/User')

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

// TODO: Encrypt the password
app.post('/register', (req, res) => {
    const data = req.body
    const user = new User({
        username: data.username,
        email: data.email,
        password: data.password
    })
    user.save((err) => {
        if(err) {
            console.error("ERROR = " + err)
            return res.status(404).json({
                error: err.message
            })
        } else {
            console.log("SUCCESS")
            const token = jwt.sign({
                data: user
            }, 'secret', {expiresIn: '2h'})
            return res.status(201).json({
                message: "User created",
                user,
                token
            })
        }
    })
})


app.listen(8000, () => console.info("Listening on port 8000"))
