const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const db_config = require('./config').db
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

// middleware
app.use(bodyParser.json())

// database setup
const db_uri = db_config.development.uri
mongoose.connect(db)
    .then(()=> console.log(">>> CONNECTED TO MONGODB....."))
    .catch(err => console.log(err))


app.listen(PORT, ()=> {
    console.log(`>>> SERVER STARTED AT PORT:${PORT}`)
})