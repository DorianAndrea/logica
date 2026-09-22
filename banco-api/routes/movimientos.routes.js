const express = require("express");
const router = express.Router();
const movimientosController = require("../controllers/movimientos.controller");

router.get("/movimientos", movimientosController.obtenerMovimientos);
router.get("/movimientos/:id", movimientosController.obtenerMovimientosPorId);
router.get("/cuentas/:id/movimientos", movimientosController.obtenerMovimientosPorCuenta);
router.post("/movimientos", movimientosController.crearMovimientos);
router.put("/movimientos/:id", movimientosController.actualizarMovimiento);
router.delete("/movimientos/:id", movimientosController.eliminarMovimientos);

module.exports = router;
