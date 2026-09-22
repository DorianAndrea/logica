const express = require("express");
const router = express.Router();
const transferenciasController = require("../controllers/transferencias.controller");

router.get("/transferencias", transferenciasController.obtenerTransferencias);
router.get("/transferencias/:id", transferenciasController.obtenerTransferenciaPorId);
router.get("/cuentas/:id/transferencias/enviadas", transferenciasController.obtenerTransferenciasEnviadas);
router.get("/cuentas/:id/transferencias/recibidas", transferenciasController.obtenerTransferenciasRecibidas);
router.get("/cuentas/:id/transferencias", transferenciasController.obtenerHistorialDeTransferencias);
router.post("/transferencias", transferenciasController.crearTransferencia);
router.put("/transferencias/:id", transferenciasController.actualizarTransferencia);
router.delete("/transferencias/:id", transferenciasController.eliminarTransferencias);

module.exports = router;
