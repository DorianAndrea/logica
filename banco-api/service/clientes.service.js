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

const obtenerCuentasdeCliente = async (id) => {
    const resultado = await pool.query(
       `SELECT *
       FROM clientes
       INNER JOIN cuentas
       ON clientes.id = cuentas.cliente_id
       WHERE clientes.id = $1; 
       `, [id]
    );
    return resultado.rows;
}

const obtenerResumen = async (id) => {
    const resultado = await pool.query(
        `
         SELECT clientes.nombre, 
            COUNT (cuentas.numero_cuenta) AS cantidad_cuentas,
            SUM (cuentas.saldo) AS saldo_total
         FROM clientes
         INNER JOIN cuentas
         ON clientes.id = cuentas.cliente_id
         where clientes.id = $1
         group by clientes.nombre;   
        `,
        [id]
    );
    return resultado.rows[0];
}

const obtenerDashboardClientes = async () => {
    const resultado = await pool.query(
    `
    SELECT clientes.nombre,
       COUNT(cuentas.numero_cuenta) AS cantidad_cuentas,
       COALESCE(SUM(cuentas.saldo), 0) AS saldo_total
    FROM clientes
    LEFT JOIN cuentas
    ON clientes.id = cuentas.cliente_id
    GROUP BY clientes.id, clientes.nombre
    ORDER BY clientes.id
    `
    );
    return resultado.rows;
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
    obtenerCuentasdeCliente,
    obtenerResumen,
    obtenerDashboardClientes
}