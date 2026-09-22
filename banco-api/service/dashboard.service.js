const pool = require("../database");

const contarClientes = async () =>{
    const resultado = await pool.query(
        `SELECT COUNT(*)
         FROM clientes;
        `
    )
    return resultado.rows;
}

const contarCuentas = async () =>{
    const resultado = await pool.query(
        `
        SELECT COUNT(*) as Cuentas
        FROM cuentas;
        `
    )
    return resultado.rows ;  
}

const contarTransferencias = async () =>{
    const resultado = await pool.query(
        `
        SELECT COUNT(*) as Transferencias
        FROM transferencias;
        `
    )
    return resultado.rows;
}

const sumarSaldoCuentas = async () =>{
    const resultado = await pool.query(
        `
        SELECT SUM(saldo) as Saldo
        FROM cuentas
        `
    )
    return resultado.rows;
}

const sumarTransferencias = async () =>{
    const resultado = await pool.query(
        `
        SELECT COUNT(*) as transferencias
        FROM transferencias;
        `
    )
    return resultado.rows;
}

const obtenerDashboard = async () => {
    const totalClientes = await pool.query(
        `
        select count(*) as totalclientes
        from clientes;
    `
    )
    const totalCuentas = await pool.query(
        `
        select count(*) as totalcuentas
        from cuentas;
        `
    )
   const totalTransferencias = await pool.query(
       `
        select count(*) as totaltransferencias
        from transferencias 
      `
    )

    const dineroTotalSistema = await pool.query(
        `
        select sum(saldo) as dinerototalsistema
        from cuentas;
        
        `
    )
    const sumarTransferencias = await pool.query(
        `
        select sum(monto) as sumartransferencias
        from transferencias 
        
        `
    )
    
    return {
        totalClientes: totalClientes.rows[0].totalclientes,
        totalCuentas: totalCuentas.rows[0].totalcuentas, 
        totalTransferencias: totalTransferencias.rows[0].totaltransferencias,
        dineroTotalSistema: dineroTotalSistema.rows[0].dinerototalsistema, 
        sumarTranferencias: sumarTransferencias.rows[0].sumartransferencias     
    } 
}

const obtenerCantidadMovimientosPorTipo = async () => {
    const resultado = await pool.query(
        `
        select tipo,
            count(*) as cantidad
        from movimientos
        group by tipo;
        `
    )
    return resultado.rows;
}


module.exports = {
    contarClientes,
    contarCuentas,
    contarTransferencias,
    sumarSaldoCuentas,
    sumarTransferencias,
    obtenerDashboard,
    obtenerCantidadMovimientosPorTipo
}