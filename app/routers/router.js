var express = require('express');
var router = express.Router()

var authRouter = require('./authService')
var defineRouter = require('./defineService')
var collectRouter = require('./collectService')

router.use((req, res, next) => {
    console.log(`Called: ${req.method} ${req.path}`)
    next()
})

router.use(authRouter)
router.use(defineRouter)
router.use(collectRouter)

module.exports = router