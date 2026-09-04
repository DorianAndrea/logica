const transferenciasService = require("../service/transferencias.service");

const obtenerTransferencias = async (req, res, next) => {
    try {
        const transferencias = await transferenciasService.obtenerTransferencias();
        return res.json(transferencias);
    } catch (error) {
        next(error);
    }
} 

const obtenerTransferenciaPorId = async (req,res,next) => {
    try {
        const {id} = req.params;
        const transferencias = await transferenciasService.obtenerTransferenciaPorId(id);
        if(transferencias.length === 0){
            return res.status(404).json({
                message: "Transferencia no encontrada"
            })
        }
        return res.json(transferencias);
        
    } catch (error) {
        next(error);
    }
}

const crearTransferencia = async (req, res, next) => {
    try {
        const {cuenta_origen_id, cuenta_destino_id, monto} = req.body;
        if(!cuenta_origen_id || !cuenta_destino_id || monto === undefined){
            return res.status(400).json({
                message: "Cuenta de origen, cuenta destino y monto son obligatorios"
            })
        }
        const transferencia = await transferenciasService.crearTransferencia(cuenta_origen_id, cuenta_destino_id, monto);
        return res.status(201).json(transferencia)
    } catch (error) {
        console.log("Mensaje recibido:", JSON.stringify(error.message));
        //este rror se utuliza solamente para comprobar
        //que postgres ejecuenta el ROLLBACK
        if(error.message === "PRUEBA ROLLBACK"){
            return res.status(400).json({
                message: error.message
            })
        }
        // La cuenta origen indicada no existe
        if (error.message === "Cuenta de origen no encontrada") {
            return res.status(404).json({
                message: error.message
            });
        }

        // La cuenta destino indicada no existe
        if (error.message === "Cuenta de destino no encontrada") {
            return res.status(404).json({
                message: error.message
            });
        }
        if(error.message === "El monto debe ser mayor que cero"){
             return res.status(400).json({
             message: error.message
            });
        }


        // No se puede transferir dinero hacia la misma cuenta
        if (
            error.message ===
            "La cuenta de origen y destino no pueden ser iguales"
        ) {
            return res.status(400).json({
                message: error.message
            });
        }
        if(error.message === "El monto debe ser mayor a cero"){
            return res.status(400).json({
                message: error.message
            });
        }
        if(error.message === "Saldo insuficiente"){
            return res.status(400).json({
                message: error.message
            });
        }
        // Solo los errores no controlados llegan al middleware global
        return next(error);
    }
}

const actualizarTransferencia = async(req, res, next) => {
    try {
        const {id} = req.params;
        console.log(req.body);
        const {cuenta_origen_id, cuenta_destino_id, monto} = req.body;
        const transferencia = await transferenciasService.actualizarTransferencia(id, cuenta_origen_id, cuenta_destino_id, monto);
        if(!cuenta_origen_id || !cuenta_destino_id || !monto){
            return res.status(400).json({
                message: "La cuenta origen, cuenta de destino y monto son obligatorios"
            })
        }
        return res.json(transferencia)
    } catch (error) {
        next(error)
    }
}
const eliminarTransferencias = async (req, res, next) => {
    try {
        const { id } = req.params;
        const transferencia = await transferenciasService.eliminarTransferencias(id);
        if(!transferencia){
            return res.status(404).json({
                message: "Transferencia no encontrada"
            });
        }
        return res.json(transferencia)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    obtenerTransferencias,
    obtenerTransferenciaPorId,
    crearTransferencia,
    actualizarTransferencia,
    eliminarTransferencias
}