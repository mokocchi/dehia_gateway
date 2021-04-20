var express = require('express');
var router = express.Router()

var authRouter = require('./authService')
var defineRouter = require('./defineService')
var collectRouter = require('./collectService')
var resultsRouter = require('./resultsService')

router.use((req, res, next) => {
    console.log(`Called: ${req.method} ${req.path}`)
    next()
})

router.use(function(req, res, next){
    res.on('finish', function(){
      console.log("Status: " + res.statusCode);
    });
    next();
  }); 

router.use(authRouter)
router.use(defineRouter)
router.use(collectRouter)
router.use(resultsRouter)

module.exports = router