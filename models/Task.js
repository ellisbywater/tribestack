const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String
    },
    due_date: {
        type: Date
    },
    time_logged: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task = mongoose.model('task', TaskSchema)