var express = require('express')
var router = express.Router()
var hasAuthorization = require('../../controller/hasAuthorization')
var {getApi, postApi} = require('../utils') 

const apiPrefix = '/api/v1.0'

const apiAdapter = require('../apiAdapter')
const api = apiAdapter(process.env.DEFINE_BASE_URL)

router.get(`${apiPrefix}/public/dominios`, (req, res) => {
    getApi(api, req, res)
})

router.post(`${apiPrefix}/dominios`, hasAuthorization, (req, res) => {
    postApi(api, req, res)
})

router.get(`${apiPrefix}/public/idiomas`, (req, res) => {
    getApi(api, req, res)
})

router.get(`${apiPrefix}/public/tipos-planificacion`, (req, res) => {
    getApi(api, req, res)
})

router.get(`${apiPrefix}/public/tipos-tarea`, (req, res) => {
    getApi(api, req, res)
})

router.get(`${apiPrefix}/public/estados`, (req, res) => {
    getApi(api, req, res)
})


module.exports = router
