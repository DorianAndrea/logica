const pool = require("./database");

const probarConexion = async () => {

    const resultado = await pool.query(
        "SELECT current_database()"
    );

    console.log(resultado.rows);
};

probarConexion();