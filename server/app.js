const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Post = require('./models/Post')

const app = express()
app.use(bodyParser.json({extended: true}))
app.use(cors())

const mongoosePromise = async () => await mongoose.connect('mongodb://localhost/vue-test', {
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


app.listen(8000, () => console.info("Listening on port 8000"))
