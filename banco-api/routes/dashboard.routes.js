const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

router.get("/dashboard/contar/clientes", dashboardController.contarClientes);
router.get("/dashboard/contar/cuentas", dashboardController.contarCuentas);
router.get("/dashboard/contar/transferencias", dashboardController.contarTransferencias);
router.get("/dashboard/sumar/saldo/cuentas", dashboardController.sumarSaldoCuentas);
router.get("/dashboard/sumar/transferencias", dashboardController.sumarTransferencias);
router.get("/dashboard/obtener", dashboardController.obtenerDashboard);
router.get("/obtenerMovimientosPorTipo", dashboardController.obtenerCantidadMovimientosPorTipo);

module.exports = router;