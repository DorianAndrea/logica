const clientesService = require("../service/clientes.service");

const obtenerClientes = async (req, res, next) => {
  try {
    const clientes  = await clientesService.obtenerTodos();
    return res.json(clientes);
  } catch (error) {
    next(error);
  }
};

const obtenerClientesPorId = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const cliente = await clientesService.obtenerPorId(id);
    if (cliente.length === 0) {
      return res.status(404).json({
        mensaje: "Cliente no encontrado",
      });
    }
    return res.json(cliente);
  } catch (error) {
    next(error);
  }
};

const crearCliente = async (req, res, next) => {
  try {
    const { nombre, rut } = req.body;
    if (!nombre || !rut) {
      return res.status(400).json({
        mensaje: "Nombre y rut son obligatorios",
      });
    }
    const cliente = await clientesService.crearCliente(nombre, rut);
    return res.status(201).json(cliente);
  } catch (error) {
    next(error);
  }
};

const actualizarCliente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre, rut } = req.body;
    if (!nombre || !rut) {
      return res.status(400).json({
        mensaje: "Nombre y rut son obligatorios",
      });
    }
    const cliente = await clientesService.actualizarCliente(id, nombre, rut);
    if (!cliente) {
      return res.status(404).json({
        mensaje: "Cliente no encontrado",
      });
    }
    return res.json(cliente);
  } catch (error) {
    next(error);
  }
};

const eliminarCliente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cliente = await clientesService.eliminarCliente(id);
    if (!cliente) {
      return res.status(404).json({
        mensaje: "Cliente no encontrado",
      });
    }
    return res.json(cliente);
  } catch (error) {
    next(error);
  }
};

const obtenerCuentasporCliente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cliente = await clientesService.obtenerPorId(id);
    //buscar si el cliente existe
    if (cliente.length === 0) {
      return res.status({
        mensaje: "Cliente no existe",
      });
    }
    // buscar todas las cuentas
    const cuentas = await clientesService.obtenerCuentasdeCliente(id);
    if (cuentas.length === 0) {
      return res.status(404).json([]);
    }
    return res.json(cuentas);
  } catch (error) {
    next(error);
  }
};

const obtenerResumen = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cliente = await clientesService.obtenerPorId(id);
    if (cliente.length === 0) {
      return res.status(404).json({
        mensaje: "El cliente no existe",
      });
    }
    const resumen = await clientesService.obtenerResumen(id);
    return res.json(resumen);
  } catch (error) {
    next(error);
  }
};
const obtenerDashboardClientes = async (req, res, next) => {
    try {
    const dashboard = await clientesService.obtenerDashboardClientes();
    return res.json(dashboard);
    } catch (error) {
        next(error)
    }
}
module.exports = {
  obtenerClientes,
  obtenerClientesPorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
  obtenerCuentasporCliente,
  obtenerResumen,
  obtenerDashboardClientes
};
