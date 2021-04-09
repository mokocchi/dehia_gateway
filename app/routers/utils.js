var fs = require('fs')
var FormData = require('form-data')

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

const getApi = (api, req, res, download = false) => {
    api.get(req.url, { headers: req.headers }).then(resp => {
        if (download) {
            if (resp.status === 200) {
                if (resp.data["educationalActivity"]) {
                    filename = resp.data["educationalActivity"]["name"]
                } else {
                    filename = "activity"
                }
                data = JSON.stringify(resp.data);
                res.setHeader('Content-disposition', `attachment; filename= "${filename}.json"`);
                res.setHeader('Content-type', 'application/json');
                res.write(data, function (err) {
                    res.end();
                })
            } else {
                res.status(resp.status).send(resp.data)
            }
        } else {
            res.status(resp.status).send(resp.data)
        }
    }).catch(error => {
        if (error.response) {
            res.status(error.response.status).send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
}

const getImage = (api, req, res) => {
    api.get(req.url, { headers: req.headers, responseType: "stream" }).then(resp => {
        resp.data.pipe(res)
    }).catch(error => {
        if (error.response) {
            res.status(error.response.status).send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
}

const postApi = (api, req, res, files = false) => {
    let headers = req.headers
    let body = req.body
    let timeout = 10000
    if (files) {
        const formData = new FormData()
        formData.append("plano", fs.createReadStream(req.files.plano.tempFilePath), "image.png")
        body = formData
        timeout = 100000
        headers = {
            ...headers,
            ...formData.getHeaders()
        }
        headers["transfer-encoding"] = 'chunked'
    }
    api.post(req.path, body, { headers: headers, timeout: timeout }).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(error => {
        if (error.response) {
            res.status(error.response.status).send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
}

const putApi = (api, req, res) => {
    api.put(req.path, req.body, { headers: req.headers }).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(error => {
        if (error.response) {
            res.status(error.response.status).send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
}

const patchApi = (api, req, res) => {
    api.patch(req.path, req.body, { headers: req.headers }).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(error => {
        if (error.response) {
            res.status(error.response.status).send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
}

const deleteApi = (api, req, res) => {
    api.delete(req.path, { headers: req.headers }).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(error => {
        if (error.response) {
            res.status(error.response.status).send(error.response.data)
        } else {
            errorResponse(error, res)
        }
    })
}

module.exports = {
    getApi,
    getImage,
    postApi,
    putApi,
    patchApi,
    deleteApi
}