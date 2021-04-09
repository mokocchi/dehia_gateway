var express = require('express');
var querystring = require('querystring')
var router = express.Router()
const {getApi} = require('./utils')
const apiAdapter = require('./apiAdapter')
const hasCredentials = require('../controller/credentialsChecker')
const hasAuthorization = require('../controller/hasAuthorization')

const api = apiAdapter(process.env.AUTH_BASE_URL)

const errorResponse = (error, res) => {
    console.log(error.message)
    res.send({
        status: 503,
        developer_message: "Servicio no disponible",
        user_message: "Servicio no disponible",
        error_code: 1,
        more_info: "http://localhost:8000/api/doc"
    })
}

router.post('/api/oauth/v2/token', hasCredentials, (req, res) => {
    let body = req.body
    if(req.header("x-auth-credentials")) {
        body = querystring.encode(req.body)
    }
    api.post(req.path, body, {headers: req.headers}).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(error => {
        if(error.response) {
            res.status(error.response.status).send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
})

router.get('/api/v1.0/me', hasAuthorization, (req, res, next) => {
    api.get('/api/validate', { headers: req.headers }).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(error => {
        if (error.response) {
            res.status(error.response.status).send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
})

router.get('/api/validate', hasAuthorization, (req, res) => {
    getApi(api, req, res)
})

module.exports = router