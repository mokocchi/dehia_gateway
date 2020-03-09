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
        if(error.response) {
            res.send(error.response.data)
        } else {
            console.log(error.message)
            res.send({
                status: 503,
                developer_message: "Servicio no disponible",
                user_message: "Servicio no disponible",
                error_code: 1,
                more_info: "http://localhost:8000/api/doc"
            })
        }
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