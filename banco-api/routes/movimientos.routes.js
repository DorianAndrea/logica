const express = require("express");
const router = express.Router();
const movimientosController = require("../controllers/movimientos.controller");

router.get("/movimientos", movimientosController.obtenerMovimientos);
router.get("/movimientos/:id", movimientosController.obtenerMovimientosPorId);
router.post("/movimientos", movimientosController.crearMovimientos);
router.put("/movimiento/:id", movimientosController.actualizarMovimiento);
router.delete("/movimientos/:id", movimientosController.eliminarMovimientos);

module.exports = router;
