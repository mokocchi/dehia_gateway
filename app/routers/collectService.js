var express = require('express');
var router = express.Router()
const {postApi, getApi} = require('./utils')
const apiAdapter = require('./apiAdapter')
const apiPrefix = process.env.API_PREFIX;

const api = apiAdapter(process.env.COLLECT_BASE_URL)

router.post(apiPrefix + "/results", (req, res) => {
    postApi(api, req, res);
})

router.get(apiPrefix + "/results/:codigo", (req, res) => {
    getApi(api, req, res);
})

module.exports = router