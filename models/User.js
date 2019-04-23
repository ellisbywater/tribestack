const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Tribe = require('./Tribe')
const Project = require('./Project')

const UserSchema = new Schema({
    githubID: { type: String, required: true },
    displayName: { type: String },
    status: {type: String},
    tribes: [{ type: Schema.Types.ObjectId, ref: 'Tribe' }],
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
})

module.exports = User = mongoose.model('User', UserSchema)