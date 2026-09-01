const movimientosService = require ("../service/movimientos.service");

const obtenerMovimientos = async (req, res, next) => {
    try {
        const clientes = await movimientosService.obtenerMovimientos();
        return res.json(clientes);
    } catch (error) {
        next(error);
    }
}

const obtenerMovimientosPorId = async (req, res, next) => {
    try {
        const {id} = req.params;
        const movimientos = await movimientosService.obtenerMovimientosPorId(id);
        if(movimientos.length === 0){
            return res.status(404).json({
                message: "Movimiento no encontrado"
            });
    
        }
        return res.json(movimientos);
    } catch (error) {
        next(error);
    }
}

const crearMovimientos = async (req, res, next) => {
    try {
        const {cuenta_id, tipo, monto} = req.body;
        if(!cuenta_id || !tipo || !monto){
            return res.status(400).json({
                message: "Cuenta, tipo, monto son obligatorios "
            })
        }
        const movimiento = await movimientosService.crearMovimientos(cuenta_id, tipo, monto);
        return res.status(201).json(movimiento);
    } catch (error) {
         // si el service detectó que el retiro super al saldo disponible
        //devolver un mensaje controlado al usuario
        if(error.message === "Saldo insuficiente"){
            return res.status(400).json({
                message: error.message
            });
        }
         next(error);
    }
}
const actualizarMovimiento = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {cuenta_id, tipo, monto} = req.body;
        if(!cuenta_id || !tipo || !monto){
            return res.status(400).json({
                message:"Movimiento, tipo y monto son obligatorios"
            });
        }
        const movimiento = await movimientosService.actualizarMovimiento(id, cuenta_id, tipo, monto);
        if(!movimiento) {
            return res.status(404).json({
                message: "Movimiento no encontrado"
            });
        }
        return res.json(movimiento);
    } catch (error) {
        next(error)
    }
}

const eliminarMovimientos = async (req, res, next) => {
    try {
        const { id } = req.params;
        const movimiento = await movimientosService.eliminarMovimiento(id);
        if(!movimiento) {
            return res.status(404).json({
                message: "Movimiento no encontrado"
            });
        }
        return res.json(movimiento)
    } catch (error) {
        next(error)   
    }
}
module.exports = {
    obtenerMovimientos,
    obtenerMovimientosPorId,
    crearMovimientos,
    actualizarMovimiento, 
    eliminarMovimientos
}