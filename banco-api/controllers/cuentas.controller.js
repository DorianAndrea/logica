const cuentasService = require("../service/cuentas.service");

const obtenerCuentas = async (req, res, next) => {
    try {
        const cuentas = await cuentasService.todasLasCuentas();
        return res.json(cuentas);
    } catch (error) {
        next(error)
    }
}

const obtenerCuentasPorId = async (req, res, next) => {
    try {
        const {id} = req.params;
        const cuentas = await cuentasService.obtenerCuentasPorId(id);
        if(cuentas.length === 0){
            return res.status(404).json({
                mensaje: "Cuenta no encontrada"
            })
        }
        return res.json(cuentas);
    } catch (error) {
        next(error)
    }
}

const crearCuenta = async (req, res, next) => {
    try {
        const {cliente_id, numero_cuenta, saldo} = req.body;
        if(!cliente_id || !numero_cuenta || !saldo === undefined){
            return res.status(400).json({
                mensaje: "Cliente, número de cuenta y saldo son obligatorios"
            })
        }
        const cuenta = await cuentasService.crearCuenta(cliente_id, numero_cuenta, saldo);
        return res.status(201).json(cuenta);
    } catch (error) {
        next(error)
    }
}

const actualizarCuenta = async (req, res, next) => {
    try {
        const {id} = req.params;
        const { numero_cuenta, saldo } = req.body;
        if(!numero_cuenta || !saldo){
            return res.status(400).json({
                mensaje: "Número de cuenta y saldo son obligatorios"
            })
        }
        const cuenta = await cuentasService.actualizarCuenta(id, numero_cuenta, saldo);
        if(!cuenta){
            return res.status(404).json({
                mensaje: "Cuenta no encontrada"
            })
        }
        return res.json(cuenta);
    } catch (error) {
        next(error)
    }
}

const eliminarCuenta = async (req, res, next) => {
    try {
        const {id} = req.params;
        const cuenta = await cuentasService.eliminarCuenta(id);
        if(!cuenta){
            return res.status(404).json({
                mensaje: "Cuenta no encontrada"
            });
        }
        return res.json(cuenta);
    } catch (error) {
        next(error)
    }
}


module.exports = {
    obtenerCuentas,
    obtenerCuentasPorId,
    crearCuenta,
    actualizarCuenta,
    eliminarCuenta
}