const pool = require("../database");

const todasLasCuentas = async () => {
    const resultado = await pool.query("SELECT * FROM cuentas");
    return resultado.rows
}

const obtenerCuentasPorId = async (id) => {
    const resultado = await pool.query("SELECT * FROM cuentas WHERE id = $1", [id])
    return resultado.rows;
}

const crearCuenta = async (cliente_id, numero_cuenta, saldo) => {
    const resultado = await pool.query(
        `
        INSERT INTO cuentas (
            cliente_id,
            numero_cuenta,
            saldo
        )
            VALUES ($1, $2, $3)
            RETURNING *
        `,
        [cliente_id, numero_cuenta, saldo]
    );
    return resultado.rows[0];
}

const actualizarCuenta = async (id, numero_cuenta, saldo) => {
    const resultado = await pool.query(
        `
        UPDATE cuentas 
            SET numero_cuenta = $1,
                saldo = $2
            WHERE id = $3
            RETURNING *
        `, [numero_cuenta, saldo, id]
    );
    return resultado.rows[0]
}

const eliminarCuenta = async (id) => {
    const resultado = await pool.query(
        `
        DELETE FROM cuentas
        WHERE id = $1
        RETURNING *
        `, [id]
    )
    return resultado.rows[0];
}

module.exports = {
    todasLasCuentas,
    obtenerCuentasPorId,
    crearCuenta,
    actualizarCuenta,
    eliminarCuenta
}