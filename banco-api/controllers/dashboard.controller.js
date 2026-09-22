const dashboardService = require("../service/dashboard.service");

const contarClientes = async(req, res,next) =>{
    try {
        const clientes = await dashboardService.contarClientes();
        return res.json(clientes);
    } catch (error) {
        next(error)
    }
}

const contarCuentas = async(req, res,next) =>{
    try {
        const cuentas = await dashboardService.contarCuentas();
        return res.json(cuentas);
    } catch (error) {
        next(error)
    }
}

const contarTransferencias = async(req,res,next) => {
    try {
        const transferencias = await dashboardService.contarTransferencias();
        return res.json(transferencias);
    } catch (error) {
        next(error)
    }
}

const sumarSaldoCuentas = async (req,res,next) => {
    try {
        const saldoCuentas = await dashboardService.sumarSaldoCuentas();
        return res.json(saldoCuentas);
    } catch (error) {
        next(error);
    }
}
const sumarTransferencias = async(req, res, next) => {
    try {
        const sumaTransferencias = await dashboardService.sumarTransferencias();
        return res.json(sumaTransferencias);
    } catch (error) {
        next(error)
    }
}

const obtenerDashboard = async(req, res, next) =>{
    try {
        const obteniendoDashboard = await dashboardService.obtenerDashboard();
        return res.json(obteniendoDashboard);
    } catch (error) {
        next(error)
    }
}

const obtenerCantidadMovimientosPorTipo = async(req, res, next) => {
    try {
        const obteniendoCantidadMovimientos = await dashboardService.obtenerCantidadMovimientosPorTipo();
        return res.json(obteniendoCantidadMovimientos);
    } catch (error) {
        next(error)
    }
}


module.exports= {
    contarClientes,
    contarCuentas,
    contarTransferencias,
    sumarSaldoCuentas,
    sumarTransferencias,
    obtenerDashboard,
    obtenerCantidadMovimientosPorTipo
}