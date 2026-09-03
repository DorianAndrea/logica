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
        if(!cuenta_origen_id || !cuenta_destino_id || !monto === undefined){
            return res.status(400).json({
                message: "Cuenta de origen, cuenta destino y monto"
            })
        }
        const transferencia = await transferenciasService.crearTransferencia(cuenta_origen_id, cuenta_destino_id, monto);
        return res.status(201).json(transferencia)
    } catch (error) {
         if(error.message === "Cuenta de origen no encontrada"){
            return res.status(404).json({
                message: error.message
            });
        }
         // Si el service detectó que la cuenta destino no existe,
    // devolvemos un mensaje amigable al usuario.
            if(error.message === "Cuenta de destino no encontrada"){
            return res.status(404).json({
                message: error.message
            });
        }
        next(error)
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
                message: "Cuenta origen, cuenta de destino y monto son obligatorios"
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