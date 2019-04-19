const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
const db_config = require('./config').db
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

// middleware
app.use(bodyParser.json())
app.use(logger('dev'))
// api
app.use('/api/v1', require('./routes/api/task'))
// database setup
const db_uri = db_config.development.uri
mongoose.connect(db_uri)
    .then(()=> console.log(">>> CONNECTED TO MONGODB....."))
    .catch(err => console.log(err))


app.listen(PORT, ()=> {
    console.log(`>>> SERVER STARTED AT PORT:${PORT}`)
})