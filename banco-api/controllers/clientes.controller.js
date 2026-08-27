const clientesService = require("../service/clientes.service");

const obtenerClientes = async (req, res) => {
    const clientes = await clientesService.obtenerTodos();
    res.json(clientes);
}

const obtenerClientesPorId = async (req, res) => {
    const id = req.params.id;
    const cliente = await clientesService.obtenerPorId(id);
    res.json(cliente)
}

const crearCliente = async (req, res) => {
    const { nombre, rut } = req.body;
    if(!nombre || !rut ){
        return res.status(400).json({
            mensaje: "Nombre y rut son obligatorios"
        })
    }
    const cliente = await clientesService(nombre, rut)
    res.status(201).json(cliente)
}
const actualizarCliente = async (req, res) => {
        const id = req.params.id;
        const { nombre, rut } = req.body;
        const cliente =
            await clientesService.actualizarCliente(
                id,
                nombre,
                rut
            );
        res.json(cliente);
};
const eliminarCliente = async (req, res) => {
    const id = req.params.id;
    const cliente = await clientesService.eliminarCliente(id);
    res.json(cliente)
}

module.exports = {
    obtenerClientes,
    obtenerClientesPorId,
    crearCliente,
    actualizarCliente,
    eliminarCliente
};