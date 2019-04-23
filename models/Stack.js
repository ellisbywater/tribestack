const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Task = require('./Task')

// Create Schema
const StackSchema = new Schema({
    createdAt: { type: Date, default: Date.now() },
    title: { type: String, required: true },
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task' }]
})

StackSchema.pre('save', next => {
    let now = new Date()
    if(!this.createdAt){
        this.createdAt = now
    }
    next()
})

module.exports = Stack = mongoose.model('Stack', StackSchema)