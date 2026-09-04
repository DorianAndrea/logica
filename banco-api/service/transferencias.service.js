const pool = require("../database");
const cuentasService = require("./cuentas.service");

const obtenerTransferencias = async () => {
  const resultado = await pool.query("SELECT * FROM transferencias");
  return resultado.rows;
};

const obtenerTransferenciaPorId = async (id) => {
  const resultado = await pool.query(
    "SELECT * FROM transferencias WHERE id = $1",
    [id],
  );
  return resultado.rows;
};

const crearTransferencia = async (
    cuenta_origen_id,
    cuenta_destino_id,
    monto
) => {
    // Obtener una conexión específica del pool.
    // Todas las consultas de la transacción usarán este mismo client.
    const client = await pool.connect();

    try {
        // Iniciar la transacción.
        // Los cambios todavía no quedan confirmados definitivamente.
        await client.query("BEGIN");

        // Convertir el monto una sola vez para utilizarlo en los cálculos.
        const montoTransferencia = Number(monto);

        // Validar que el monto sea un número válido y mayor que cero.
        if (
            !Number.isFinite(montoTransferencia) ||
            montoTransferencia <= 0
        ) {
            throw new Error("El monto debe ser mayor a cero");
        }

        // Validar que origen y destino no correspondan a la misma cuenta.
        if (
            Number(cuenta_origen_id) ===
            Number(cuenta_destino_id)
        ) {
            throw new Error(
                "La cuenta de origen y destino no pueden ser iguales"
            );
        }

        // Buscar y bloquear la cuenta origen mientras dura la transacción.
        // FOR UPDATE evita que otra operación modifique esta fila al mismo tiempo.
        const resultadoOrigen = await client.query(
            `
            SELECT *
            FROM cuentas
            WHERE id = $1
            FOR UPDATE
            `,
            [cuenta_origen_id]
        );

        // Verificar que la cuenta origen exista.
        if (resultadoOrigen.rows.length === 0) {
            throw new Error("Cuenta de origen no encontrada");
        }

        // Buscar y bloquear la cuenta destino.
        const resultadoDestino = await client.query(
            `
            SELECT *
            FROM cuentas
            WHERE id = $1
            FOR UPDATE
            `,
            [cuenta_destino_id]
        );

        // Verificar que la cuenta destino exista.
        if (resultadoDestino.rows.length === 0) {
            throw new Error("Cuenta de destino no encontrada");
        }

        // Obtener los objetos de las cuentas.
        const cuentaOrigen = resultadoOrigen.rows[0];
        const cuentaDestino = resultadoDestino.rows[0];

        // PostgreSQL puede devolver DECIMAL como string.
        // Por eso convertimos ambos saldos a Number.
        const saldoOrigen = Number(cuentaOrigen.saldo);
        const saldoDestino = Number(cuentaDestino.saldo);

        // Verificar que la cuenta origen tenga dinero suficiente.
        if (montoTransferencia > saldoOrigen) {
            throw new Error("Saldo insuficiente");
        }

        // Calcular cómo quedarán los dos saldos.
        const nuevoSaldoOrigen =
            saldoOrigen - montoTransferencia;

        const nuevoSaldoDestino =
            saldoDestino + montoTransferencia;

        // Descontar el dinero de la cuenta origen.
        await client.query(
            `
            UPDATE cuentas
            SET saldo = $1
            WHERE id = $2
            `,
            [nuevoSaldoOrigen, cuentaOrigen.id]
        );

        // Sumar el dinero a la cuenta destino.
        await client.query(
            `
            UPDATE cuentas
            SET saldo = $1
            WHERE id = $2
            `,
            [nuevoSaldoDestino, cuentaDestino.id]
        );

       //throw new Error("PRUEBA ROLLBACK");

        // Registrar la transferencia.
        const resultadoTransferencia = await client.query(
            `
            INSERT INTO transferencias (
                cuenta_origen_id,
                cuenta_destino_id,
                monto
            )
            VALUES ($1, $2, $3)
            RETURNING *
            `,
            [
                cuenta_origen_id,
                cuenta_destino_id,
                montoTransferencia
            ]
        );

        // Todo salió correctamente.
        // Confirmamos definitivamente las tres operaciones.
        await client.query("COMMIT");

        // Devolver la transferencia recién creada.
        return resultadoTransferencia.rows[0];
    } catch (error) {
        // Si falla cualquier consulta o validación,
        // deshacer todas las modificaciones realizadas desde BEGIN.
        await client.query("ROLLBACK");

        // Volver a lanzar el error para que llegue al controller.
        throw error;
    } finally {
        // Liberar siempre la conexión para devolverla al pool,
        // tanto si hubo COMMIT como si hubo ROLLBACK.
        client.release();
    }
};

const actualizarTransferencia = async (
  id,
  cuenta_origen_id,
  cuenta_destino_id,
  monto,
) => {
  const resultado = await pool.query(
    `
        UPDATE transferencias
        SET cuenta_origen_id = $1,
            cuenta_destino_id = $2,
            monto = $3
            WHERE id = $4
            RETURNING *
    `,
    [cuenta_origen_id, cuenta_destino_id, monto, id],
  );
  return resultado.rows[0];
};

const eliminarTransferencias = async (id) => {
  const resultado = await pool.query(
    `
        DELETE FROM transferencias
        WHERE id = $1
        RETURNING *
        `,
    [id],
  );
  return resultado.rows[0];
};

module.exports = {
  obtenerTransferencias,
  obtenerTransferenciaPorId,
  crearTransferencia,
  actualizarTransferencia,
  eliminarTransferencias,
};
