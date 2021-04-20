var express = require('express');
var router = express.Router()
const {postApi, getApi} = require('./utils')
const apiAdapter = require('./apiAdapter')
const apiPrefix = process.env.API_PREFIX;

const api = apiAdapter(process.env.RESULTS_BASE_URL)

router.get(apiPrefix + "/resultados", (req, res) => {
    getApi(api, req, res);
})

module.exports = router