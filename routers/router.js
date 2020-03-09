var express = require('express');
var router = express.Router()

var authRouter = require('./authService')
var defineRouter = require('./defineService')

router.use((req, res, next) => {
    console.log(`Called: ${req.method} ${req.path}`)
    next()
})

router.use(authRouter)
router.use(defineRouter)

module.exports = router