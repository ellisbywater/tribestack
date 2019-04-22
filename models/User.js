const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Tribe = require('./Tribe')
const Project = require('./Project')

const UserSchema = new Schema({
    gitHubID: { type: String, required: true },
    name: { type: String },
    status: {type: String},
    tribes: [Tribe],
    projects: [Project]
})

module.exports = User = mongoose.model('user', UserSchema)