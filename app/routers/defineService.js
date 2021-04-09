var express = require('express')
var router = express.Router()

var enumerativosrouter = require('./define/enumerativos')
var actividadesRouter = require('./define/actividades')
var tareasRouter = require('./define/tareas')
var planificacionesRouter = require('./define/planificaciones')

router.use(actividadesRouter)
router.use(enumerativosrouter)
router.use(tareasRouter)
router.use(planificacionesRouter)

module.exports = router