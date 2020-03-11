module.exports = (req, res, next) => {
    if (!req.get('Authorization')) {
        res.status(401).send({
            status: 401,
            developer_message: "Se requiere autenticación OAuth",
            user_message: "Se requiere autenticación",
            error_code: 1,
            more_info: "http://localhost:8000/api/doc"
        })
    } else {
        next()
    }
}