const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User')
const Project = require('./Project')

// Create Schema
const TribeSchema = new Schema({
    createdAt: { type: Date, default: Date.now() },
    name: { type: String, required: true },
    description: { type: String },
    time_logged: { type: Number, default: 0 },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

TribeSchema.pre('save', next => {
    let now = new Date()
    if(!this.createdAt){
        this.createdAt = now
    }
    next()
})

module.exports = Tribe = mongoose.model('Tribe', TribeSchema)