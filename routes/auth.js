const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('../config/passport')



// @route  GET OAUTH auth/
// @desc   Login User
router.get('/github', passport.authenticate('github', {scope: ['profile']}))
router.get(
    '/github/callback',
    passport.authenticate('github', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
    })
)

module.exports = router