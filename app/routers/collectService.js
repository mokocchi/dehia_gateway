var express = require('express');
var router = express.Router()
const {postApi, getApi} = require('./utils')
const apiAdapter = require('./apiAdapter')
const apiPrefix = process.env.API_PREFIX;

const api = apiAdapter(process.env.COLLECT_BASE_URL)

router.post(apiPrefix + "/public/entries", (req, res) => {
    postApi(api, req, res);
})

module.exports = router