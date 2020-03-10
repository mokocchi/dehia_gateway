var express = require('express')
var router = express.Router()
var multer = require('multer')
var upload = multer()
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

const getApi = (api, req, res) => {
    api.get(req.path, {headers: req.headers}).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(error => {
        if(error.response) {
            res.status(error.response.status).send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
}

const postApi = (api, req, res) => {
    api.post(req.path, req.body, {headers: req.headers}).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(error => {
        if(error.response) {
            res.status(error.response.status).send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
}

router.get(`${apiPrefix}/me`, hasAuthorization, (req, res) => {
    getApi(api, req, res)
})

router.get(`${apiPrefix}/public/dominios`, (req, res) => {
    getApi(api, req, res)
})

router.post(`${apiPrefix}/dominios`, (req, res) => {
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


const publicActividadesUri = `${apiPrefix}/public/actividades`

router.get(publicActividadesUri, (req, res) => {
   getApi(api, req, res)
})


const actividadesUri = `${apiPrefix}/actividades`

router.get(`${actividadesUri}/user`, hasAuthorization, (req, res) => {
    getApi(api, req, res)
})

router.get(`${actividadesUri}/*/`, hasAuthorization, (req, res) => {
    getApi(api, req, res)
})

router.post(actividadesUri, hasAuthorization, (req, res) => {
    postApi(api, req, res)
})


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

router.post(`${tareasUri}/*/plano`, upload.array('plano', 1), hasAuthorization, (req, res) => {
    postApi(api, req, res)
})

module.exports = router