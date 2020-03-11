module.exports = (req, res, next) => {
    if (!req.get('X-AUTH-TOKEN') && !req.get('X-AUTH-CREDENTIALS')) {
        res.status(400).send({
            status: 400,
            developer_message: "No se encontró el header de autenticación",
            user_message: "Ocurrió un problema de autenticación",
            error_code: 1,
            more_info: "http://localhost:8000/api/doc"
        })
    } else {
        next()
    }
}