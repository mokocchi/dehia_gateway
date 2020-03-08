var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const hasCredentials = require('../controller/credentialsChecker')
const hasAuthorization = require('../controller/hasAuthorization')

const api = apiAdapter(process.env.AUTH_BASE_URL)

router.post('/api/oauth/v2/token', hasCredentials, (req, res) => {
    api.post(req.path, req.body, {headers: req.headers}).then(resp => {
        res.send(resp.data)
    }).catch(error => {
        res.send(error.response.data)
    })
})

router.get('/api/validate', hasAuthorization, (req, res) => {
    api.get(req.path, {headers: req.headers}).then(resp => {
        res.send(resp.data)
    }).catch(error => {
        res.send(error.response.data)
    })
})

module.exports = router