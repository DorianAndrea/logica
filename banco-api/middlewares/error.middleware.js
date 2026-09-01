const manejarErrores = (error, req, res, next) => {
    console.error(error);
    return res.status(500).json({
        mensaje: "Error interno del servidor"
    })

}
module.exports = manejarErrores;