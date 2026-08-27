const express = require("express");

const clientesRoutes =
    require("./routes/clientes.routes");

const app = express();

app.use(express.json());

app.use(clientesRoutes);

app.listen(3000, () => {
    console.log("Servidor levantado");
});