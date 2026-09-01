const express = require("express");
const manejarErrores = require("./middlewares/error.middleware");
const clientesRoutes = require("./routes/clientes.routes");
const cuentasRoutes = require("./routes/cuentas.routes");
const movimientosRoutes = require("./routes/movimientos.routes");

const app = express();

app.use(express.json());

app.use(clientesRoutes);

app.use(cuentasRoutes);

app.use(movimientosRoutes);

app.use(manejarErrores);

app.listen(3000, () => {
    console.log("Servidor levantado");
});