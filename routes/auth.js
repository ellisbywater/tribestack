const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('../config/passport')

router.get('/github', passport.authenticate('github', {scope: ['profile']}))
router.get(
    '/github/callback',
    passport.authenticate('github', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
)

module.exports = router