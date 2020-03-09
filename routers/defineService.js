var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const hasAuthorization = require('../controller/hasAuthorization')

const api = apiAdapter(process.env.DEFINE_BASE_URL)

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
const apiPrefix = '/api/v1.0'

router.get(`${apiPrefix}/me`, hasAuthorization, (req, res) => {
    api.get(req.path, {headers: req.headers}).then(resp => {
        res.send(resp.data)
    }).catch(error => {
        if(error.response) {
            res.send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
})

const actividadesUri = `${apiPrefix}/actividades`

router.get(`${actividadesUri}`, hasAuthorization, (req, res) => {
    api.get(req.path, {headers: req.headers}).then(resp => {
        res.send(resp.data)
    }).catch(error => {
        if(error.response) {
            res.send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
})

module.exports = router