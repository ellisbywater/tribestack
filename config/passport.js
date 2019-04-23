const passport = require('passport')
const GitStrategy = require('passport-github').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')


passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

passport.use(
    new GitStrategy(
        {
            clientID: "",
            clientSecret: "",
            callbackURL: ""
        },
        (accessToken, refreshToken, profile, done) => {
            const { id, displayName } = profile
            User.findOne({ githubID: id }, (err, userMatch) => {
                if(err) {
                    console.log(err)
                    return done(null, false)
                }
                if(userMatch) {
                    return done(null, userMatch)
                } else {
                    const newUser = new User({
                        githubID: id,
                        displayName: displayName
                    })
                    newUser.save((err, savedUser) => {
                        if(err){
                            return done(null, false)
                        } else {
                            return done(null, savedUser)
                        }
                    })
                }
            })
        }
    )
)

passport.use(GitStrategy)

module.exports = passport