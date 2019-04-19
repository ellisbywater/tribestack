const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TaskSchema = new Schema({
    createdAt: { type: Date, default: Date.now() },
    name: { type: String, required: true },
    description: { type: String },
    start_date: { type: Date },
    due_date: { type: Date },
    time_logged: { type: Number, default: 0 },
    active: { type: Boolean, default: true},
    completed: { type: Boolean, default: false }
})

TaskSchema.pre('save', next => {
    let now = new Date()
    if(!this.createdAt){
        this.createdAt = now
    }
    next()
})

module.exports = Task = mongoose.model('task', TaskSchema)