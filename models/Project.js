const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Stack = require('./Stack')

// Create Schema
const ProjectSchema = new Schema({
    createdAt: { type: Date, default: Date.now() },
    title: { type: String, required: true },
    description: { type: String },
    start_date: { type: Date },
    due_date: { type: Date },
    time_logged: { type: Number, default: 0 },
    active: { type: Boolean, default: true},
    completed: { type: Boolean, default: false },
    stacks: [Stack]
})

ProjectSchema.pre('save', next => {
    let now = new Date()
    if(!this.createdAt){
        this.createdAt = now
    }
    next()
})

module.exports = Project = mongoose.model('project', ProjectSchema)