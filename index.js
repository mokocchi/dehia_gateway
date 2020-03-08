var express = require('express');
var app = express();
var dotenv = require('dotenv').config();
var router = require('./routers/router')
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("DEHIA API Gateway")
})

app.use(router)

app.use(function(req,res){
    res.status(404).send({
        "status": "404",
        "developer_message": "Recurso no encontrado",
        "user_message": "Recurso no encontrado",
        "error_code": 1,
        "more_info": "http://localhost:8000/api/doc"
      });;
});

console.log("running on port 8000")

app.listen(8000);
