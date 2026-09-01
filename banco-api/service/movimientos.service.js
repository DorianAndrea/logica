const pool = require("../database");
const cuentasService = require("./cuentas.service");

const obtenerMovimientos = async () => {
  const resultado = await pool.query("SELECT * FROM movimientos");
  return resultado.rows;
};

const obtenerMovimientosPorId = async (id) => {
  const resultado = await pool.query(
    "SELECT * FROM movimientos WHERE id = $1",
    [id],
  );
  return resultado.rows;
};
const crearMovimientos = async (cuenta_id, tipo, monto) => {
  //Buscar la cuenta asociada al movimiento
  //Necesitamos conocer su saldo actual antes de registrar el movimiento
  const cuenta = await cuentasService.obtenerCuentasPorId(cuenta_id);
  // validar que la cuenta exista
  if (cuenta.length === 0) {
    throw new Error("Cuenta no encontrada");
  }
  // obtener saldo actual  de la cuenta
  // Se convierte a Nunbre porque postgres puede devolverlo como string
  const saldoActual = Number(cuenta[0].saldo);

  // Guardará el saldo despues del movimiento
  let nuevoSaldo;

  const numeroCuenta = cuenta[0].numero_cuenta;
  //Si el movimiento es un deposito, se suma el monto al saldo actual

  if (tipo === "deposito") {
    nuevoSaldo = saldoActual + Number(monto);
  }
  //Si el movimiento es un retiro, se resta el monto al saldo actual
  if (tipo === "retiro") {
    // si el cliente intanta retirar mas dinero del que tiene
    //se detiene la operacion y no se actualiza la cuenta
    if (Number(monto) > saldoActual) {
      throw new Error("Saldo insuficiente");
    }
    nuevoSaldo = saldoActual - Number(monto);
  }
  //actualizar el saldo de la cuenta, utilizando el nuevo saldo caculado
  await cuentasService.actualizarCuenta(cuenta_id, numeroCuenta, nuevoSaldo);
  //registrar el movimiento de la tabla movimientos
  const resultado = await pool.query(
    `
    INSERT INTO movimientos (
        cuenta_id,
        tipo,
        monto
    )
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [cuenta_id, tipo, monto],
  );
  // devolver el movimiento recien creado
  return resultado.rows[0];
};

const actualizarMovimiento = async (id, cuenta_id, tipo, monto) => {
  const resultado = await pool.query(
    `
        UPDATE movimientos
            SET cuenta_id = $1,
                tipo = $2,
                monto= $3
            WHERE id= $4
            RETURNING *
        `,
    [cuenta_id, tipo, monto, id],
  );
  return resultado.rows[0];
};

const eliminarMovimiento = async (id) => {
  const resultado = await pool.query(
    `
        DELETE FROM movimientos
        WHERE id = $1
        RETURNING *
        `,
    [id],
  );
  return resultado.rows[0];
};

module.exports = {
  obtenerMovimientos,
  obtenerMovimientosPorId,
  crearMovimientos,
  actualizarMovimiento,
  eliminarMovimiento,
};
