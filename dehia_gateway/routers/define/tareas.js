var express = require('express')
var router = express.Router()
var hasAuthorization = require('../../controller/hasAuthorization')
var {getApi, postApi, patchApi, putApi, deleteApi} = require('../utils') 

const apiPrefix = '/api/v1.0'

const apiAdapter = require('../apiAdapter')
const api = apiAdapter(process.env.DEFINE_BASE_URL)

const publicTareasUri = `${apiPrefix}/public/tareas`

router.get(publicTareasUri, (req, res) => {
    getApi(api, req, res)
})


const tareasUri = `${apiPrefix}/tareas`

router.get(`${tareasUri}/user`, hasAuthorization, (req, res) => {
    getApi(api, req, res)
})

router.post(tareasUri, hasAuthorization, (req, res) => {
    postApi(api, req, res)
})

router.get(`${tareasUri}/:id`, hasAuthorization, (req, res) => {
    getApi(api, req, res)
})

router.post(`${tareasUri}/:id/plano`, hasAuthorization, (req, res) => {
    postApi(api, req, res, true)
})

module.exports = router