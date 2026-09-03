const pool = require ("../database");
const cuentasService = require("./cuentas.service");

const obtenerTransferencias = async () => {
    const resultado = await pool.query("SELECT * FROM transferencias");
    return resultado.rows;
}

const obtenerTransferenciaPorId = async (id) =>{
    const resultado = await pool.query(
        "SELECT * FROM transferencias WHERE id = $1",
        [id],
    );
    return resultado.rows;
}

const crearTransferencia = async (cuenta_origen_id, cuenta_destino_id, monto) => {
    // Buscar la cuenta de origen para verificar que exista
    // antes de registrar la transferencia
    const cuentaOrigen = await cuentasService.obtenerCuentasPorId(cuenta_origen_id);
    //validar cuanta origen
    if(cuentaOrigen.length === 0){
        throw new Error("Cuenta de origen no encontrada")
    }

    //validar cuenta destino existe. Buscar cuenta destino
    const cuentaDestino = await cuentasService.obtenerCuentasPorId(cuenta_destino_id)
    //validar cuanta destino
    if(cuentaDestino.length === 0){
        throw new Error("Cuenta de destino no encontrada")
    }

    // Obtener saldo actual de la cuenta destino
    const saldoDestino = Number(cuentaDestino[0].saldo);
    //calcular como quedará el saldo de la destino. 
    //despues de recibir la transferencia
    const nuevoSaldoDestino = saldoDestino + Number(monto);
    
      // obtener saldo actual  de la cuenta.Obtener saldos
    const saldoOrigen = Number(cuentaOrigen[0].saldo);
    
    // validacion si el monto a transferir supera el saldo disponible
    // se detiene la operación. Validar saldo suficiente
    if(Number(monto) > saldoOrigen){
        throw new Error("Saldo insuficiente ")
    }
    //Calcular como quedará el saldo de la cuenta de origen
    // despues de realizar tranferencia.Actualizar origen
    const nuevoSaldoOrigen = saldoOrigen - Number(monto);
    await cuentasService.actualizarCuenta(
        cuentaOrigen[0].id,
        cuentaOrigen[0].numero_cuenta,
        nuevoSaldoOrigen
    );
    // actualizar destino
    await cuentasService.actualizarCuenta(
        cuentaDestino[0].id,
        cuentaDestino[0].numero_cuenta,
        nuevoSaldoDestino
    );
 // registrar tranferencias
    const resultado = await pool.query(
        `
        INSERT INTO transferencias (
        cuenta_origen_id,
        cuenta_destino_id,
        monto
        )
        VALUES($1, $2, $3)
        RETURNING *
        `,
        [cuenta_origen_id, cuenta_destino_id, monto]
    )
    return resultado.rows[0];
}

const actualizarTransferencia = async (id, cuenta_origen_id, cuenta_destino_id, monto) => {
    
    const resultado = await pool.query(
    `
        UPDATE transferencias
        SET cuenta_origen_id = $1,
            cuenta_destino_id = $2,
            monto = $3
            WHERE id = $4
            RETURNING *
    `, [cuenta_origen_id, cuenta_destino_id, monto, id]
    );
    return resultado.rows[0];
}

const eliminarTransferencias = async (id) => {
    const resultado = await pool.query(
        `
        DELETE FROM transferencias
        WHERE id = $1
        RETURNING *
        `, [id]
    );
    return resultado.rows[0]
}

module.exports = {
    obtenerTransferencias,
    obtenerTransferenciaPorId,
    crearTransferencia,
    actualizarTransferencia,
    eliminarTransferencias,
}