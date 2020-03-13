var express = require('express')
var router = express.Router()
var hasAuthorization = require('../../controller/hasAuthorization')
var {getApi, postApi, patchApi, putApi, deleteApi} = require('../utils') 

const apiPrefix = '/api/v1.0'

const apiAdapter = require('../apiAdapter')
const api = apiAdapter(process.env.DEFINE_BASE_URL)


const publicPlanificacionesUri = `${apiPrefix}/public/planificaciones`

router.get(`${publicPlanificacionesUri}/:id`, (req, res) => {
    getApi(api, req, res)
})


const planificacionesUri = `${apiPrefix}/planificaciones`

router.get(`${planificacionesUri}/:id`, (req, res) => {
    getApi(api, req, res)
})

router.put(`${planificacionesUri}/:id`, (req, res) => {
    putApi(api, req, res)
})

module.exports = router