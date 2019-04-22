const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User')

// Create Schema
const MessageSchema = new Schema({
    sent: { type: Date, required: true },
    content: { type: String },
    sender: { type: User}
})

MessageSchema.pre('save', next => {
    let now = new Date()
    if(!this.createdAt){
        this.createdAt = now
    }
    next()
})

module.exports = Message = mongoose.model('message', MessageSchema)