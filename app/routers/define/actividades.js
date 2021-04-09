var express = require('express')
var router = express.Router()
var hasAuthorization = require('../../controller/hasAuthorization')
var {getApi, postApi, patchApi, putApi, deleteApi} = require('../utils') 

const apiPrefix = '/api/v1.0'

const apiAdapter = require('../apiAdapter')
const api = apiAdapter(process.env.DEFINE_BASE_URL)


const publicActividadesUri = `${apiPrefix}/public/actividades`

router.get(publicActividadesUri, (req, res) => {
    getApi(api, req, res)
})

router.get(`${publicActividadesUri}/:id`, (req, res) => {
    getApi(api, req, res)
})

router.get(`${publicActividadesUri}/:id/data`, (req, res) => {
    getApi(api, req, res, true)
})

router.get(`${publicActividadesUri}/:codigo/columns`, (req, res) => {
    getApi(api, req, res)
})

router.get(`${publicActividadesUri}/:id/tareas`, (req, res) => {
    getApi(api, req, res)
})

const actividadesUri = `${apiPrefix}/actividades`

router.get(actividadesUri, hasAuthorization, (req, res) => {
    getApi(api, req, res)
})

router.get(`${actividadesUri}/user`, hasAuthorization, (req, res) => {
    getApi(api, req, res)
})

router.get(`${actividadesUri}/:id`, hasAuthorization, (req, res) => {
    getApi(api, req, res)
})

router.patch(`${actividadesUri}/:id`, hasAuthorization, (req, res) => {
    patchApi(api, req, res)
})

router.delete(`${actividadesUri}/:id`, hasAuthorization, (req, res) => {
    deleteApi(api, req, res)
})

router.post(actividadesUri, hasAuthorization, (req, res) => {
    postApi(api, req, res)
})

router.get(`${actividadesUri}/:id/tareas`, hasAuthorization, (req, res) => {
    getApi(api, req, res)
})

router.put(`${actividadesUri}/:id/tareas`, hasAuthorization, (req, res) => {
    putApi(api, req, res)
})


module.exports = router
