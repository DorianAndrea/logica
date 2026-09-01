const express = require("express");
const router = express.Router();
const clientesController = require ("../controllers/clientes.controller");

router.get("/clientes", clientesController.obtenerClientes);
router.get("/clientes/dashboard", clientesController.obtenerDashboardClientes);
router.get("/clientes/:id/cuentas", clientesController.obtenerCuentasporCliente);
router.get("/clientes/:id/resumen", clientesController.obtenerResumen);
router.get("/clientes/:id", clientesController.obtenerClientesPorId);
router.post("/clientes", clientesController.crearCliente);
router.put("/clientes/:id", clientesController.actualizarCliente);
router.delete("/clientes/:id", clientesController.eliminarCliente);

module.exports = router;