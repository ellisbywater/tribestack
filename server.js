const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
const path = require('path')
const db_config = require('./config').db
const passport = require('./config/passport')
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

const routes = require('./routes')

// middleware
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(passport.initialize())
app.use(passport.session())
// api
app.use('/auth', routes.auth)
app.use('/api/v1/tasks', routes.tasks)

if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
// database setup
const db_uri = db_config.development.uri
mongoose.connect(db_uri)
    .then(()=> console.log(">>> CONNECTED TO MONGODB....."))
    .catch(err => console.log(err))


app.listen(PORT, ()=> {
    console.log(`>>> SERVER STARTED AT PORT:${PORT}`)
})