const mongoose = require('mongoose')
const Schema = mongoose.Schema
import Task from './Task'

// Create Schema
const StackSchema = new Schema({
    createdAt: { type: Date, default: Date.now() },
    title: { type: String, required: true },
    tasks: [Task]
})

StackSchema.pre('save', next => {
    let now = new Date()
    if(!this.createdAt){
        this.createdAt = now
    }
    next()
})

module.exports = Stack = mongoose.model('stack', StackSchema)