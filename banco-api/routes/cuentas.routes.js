const express = require("express");
const router = express.Router();
const cuentasController = require ("../controllers/cuentas.controller");

router.get("/cuentas", cuentasController.obtenerCuentas);
router.get("/cuentas/:id", cuentasController.obtenerCuentasPorId);
router.post("/cuentas", cuentasController.crearCuenta);
router.put("/cuentas/:id", cuentasController.actualizarCuenta);
router.delete("/cuentas/:id", cuentasController.eliminarCuenta);

module.exports = router;