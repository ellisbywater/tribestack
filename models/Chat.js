const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User')
const Message = require('./Message')

// Create Schema
const ChatSchema = new Schema({
    start_date: { type: Date },
    users: [User],
    messages: [Message]
})

ChatSchema.pre('save', next => {
    let now = new Date()
    if(!this.createdAt){
        this.createdAt = now
    }
    next()
})

module.exports = Chat = mongoose.model('chat', ChatSchema)