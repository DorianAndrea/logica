const {Pool} = require ("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "banco",
    user: "postgres",
    password: "1254"
});
module.exports = pool;