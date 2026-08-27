const pool = require("../database");

const obtenerTodos = async () => {
    const resultado = await pool.query(
        "SELECT * FROM clientes"
    );
    return resultado.rows
}

const obtenerPorId = async (id) => {
    const resultado = await pool.query(
        "SELECT * FROM clientes WHERE id = $1",[id]
    );
    return resultado.rows;
}

const crearCliente = async (nombre, rut) => {
    const resultado = await pool.query(
        `
        INSERT INTO clientes (
            nombre,
            rut
        )
        VALUES ($1, $2)
        RETURNING *
        `,
        [nombre, rut]
    );
    return resultado.rows[0];
}

const actualizarCliente = async (
    id,
    nombre,
    rut
) => {

    const resultado = await pool.query(
        `
        UPDATE clientes
        SET nombre = $1,
            rut = $2
        WHERE id = $3
        RETURNING *
        `,
        [nombre, rut, id]
    );

    return resultado.rows[0];
};

const eliminarCliente = async (id) => {
    const resultado = await pool.query(
        `
        DELETE FROM clientes
        WHERE id = $1
        RETURNING *
        `,
        [id]
    );
    return resultado.rows[0];
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    actualizarCliente,
    eliminarCliente
}