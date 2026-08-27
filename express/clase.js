// clase express
//¿Qué es express? libreria de Node.js que nos permite crear APIS, servidores web
//rutas y endpoints
//EJEMPLOS : Dame todas las emociones => la petición llega al servidor GET/emociones 
//Express lo recibe y responde ["Feliz", "Triste", "Enojado" ]
//crear un proyecto Express: en una carpeta vacia corre el comando npm init -y, 
// con este comando se crea un archivo package.json.
// Cómo instalar con npm install express
// primer servidor
// const express = require("express"); // importar express
// const app = express();//creamos una aplicación, aqui nace el servidor

//primera ruta
// app.get("/", (req, res) =>{
//     res.send("Hola Dorian");
// });


// app.listen(3000, () =>{ // escuchamos peticiones en el puerto 3000
//     console.log("Servidor levantado")
// });

// Qué es JSON? forma de intercambiar datos, piense en json como Objetos de javascript que viajan por internet
// primera ruta json, antes teniamos:

// app.get("/", (req, res) =>{
//     res.send("Hola Dorian");
// });
// //Ahora podemos hacer
// app.get("/saludo", (req, res) =>{
//     res.json({
//         mensaje: "Hola Dorian"
//     });
// });

//Y que devuelve? si visitas http://localhost:3000/saludo verás { "mensaje": "Hola Dorian" }

//Ejemplo 
// const emociones = [
//     "Feliz",
//     "Triste",
//     "Enojado"
// ];
// // creamos una ruta:
// app.get("/emociones", (req, res) =>{
//     res.json(emociones);
// })
// resultado: al visitar http://localhost:3000/emociones obtienes el array de emociones
// regla mental cuando veas res.send(...), piensa: "responder texto"
// cuando veas res.json(...), piense "responder datos"

// Clase 3: Parámetros de rutas
// las APIS's reales no son GET/emociones tambien hacen: GET/emociones/1, GET/emociones/2
// es decir quiero una cosa específica
// ejemplo: tienes:
// app.get("/emociones/:id", (req, res) =>{
//     res.json({
//         mensaje: "Legué aquí"
//     });
// });
// el :id significa "Recibir un valor dinámico"
// si visitas http://localhost:3000/emociones/1, Express hace req.params.id y devuelve "1"
// Ejemplo completo:
// app.get("/emociones/:id", (req, res) =>{
//     const id = req.params.id;
//     res.json({
//         id
//     });
// });
// resultado { "id" : "1"}
// RESUMEN: req, lo que envia el cliente. req.params : parámetros de la URL,
//  req.params.id:dame el valor que viene despúes

// clase 4 usar find()
//¿Qué pasa si quiero una emoción específica? ej: GET /emociones/2
// solamente quiero {"id": 2, "nombre": "Triste"}
// const emociones = [
//     {
//         id: 1,
//         nombre: "Feliz"
//     },
//     {
//         id: 2,
//         nombre: "Triste"
//     },
//     {
//         id: 3,
//         nombre: "Enojado"
//     }
// ];
// ruta 
// app.get("/emociones/:id", (req, res) =>{
//     const id = Number(req.params.id);
//     const emocion = emociones.find(
//         (emocion) => emocion.id === id
//     );
//     res.json(emocion);
// });

// clase 6 POST, si get trae información, post la crea
//ejemplo
// const express = require("express");
// const app = express();
// app.use(express.json);
// esto le dice a express si me mandan json yo lo entiendo
//¿De donde vienen los datos ? aca aparece el req.body
//¿Cómo lo capturo? const nuevaEmocion = req.body, 
// cómo lo guardo? emociones.push(nuevaEmocion);
//cómo respondo? 
// res.json({
//     mensaje: "Emoción creada"
// });
//como seria el código completo
// app.post("/emociones", (req, res) =>{
//     const nuevaEmocion = req.body;
//     emociones.push(nuevaEmocion);
//     res.json({
//         mensaje: "Emoción creada"
//     });
// });
// resumen: req.params => datos que vienen en la URL,
// diferencia entre req.params viene de la url /emociones/3 actua el req.params.id y trae 3
// el req.body viene dentro de la petición {"nombre" : "Tranquilo"}
// IMPORTANTE el req.params se usa cuando los datos vienen de la url ej: GET /emociones/3 
//ruta app.get("/emociones/:id", (req, res) =>{})
// IMPORTANTE el req.body se usa cuando los datos vienen de adentro de 
// la peticion ej: POST /emociones, el body trae {"nombre" : "Feliz"}
// siempre piensa: GET => params, POST => body

// clase 7 validar datos antes de guardar, problema si el usuario manda algun 
// formulario vacio y el sistema lo guarda sin verificar, tenemos un problema
// cómo solucionarlo? con un if
//ej:
// app.post("/emociones", (req, res) =>{
//     if(!req.body.nombre){
//         return res.json({
//             mensaje: "Falta el nombre"
//         })
//     }
// })
// que significa todo esto? si req.body.nombre no existe o está vacio, 
// entonces !req.body.nombre será true y responderá:
// {
//     "mensaje": "Falta el nombre"
// }
//Ahora por qué usamos return, porque cuando encontramos un error return res.jeson(), 
// eso significa Devuelve la respuesta y sal de la función, no sigue ejecutando el resto
// codigo completo
// app.post("/emociones", (req, res) =>{
//     if(!req.body.nombre){
//     return res.json({
//         mensaje: "Falta el nombre"
//     })
// }
//     emociones.push(req.body);
//     res.json({
//     mensaje: "Emoción creada"
//     })
// })
// HTTP Status codes son codigos que el servidor envia junto con la 
// respuesta para decirle al cliente como salio la petición
// ejemplo si vas a la biblioteca y pides un libro, la bibliotecaria lo busca 
// y lo encuentra el código es 200, si no el código es 404, si no le das suficiente 
// info codigo 400. Por otro lado si lo registra coreectamente codigo 201
// familias de codigos:
//  2xx => salio todo bien
// ejemplo res.status(200).json(...) o res.status(201).json(...)
// 4xx => error del cliente, el cliente hizo algo incorrecto, ejemplo no 
// llena un campo llega un 400 o busque un usuario y no existe, código 404
//5xx error del servidor: fallo el backend => 500 Internal server error, 
// ejemplo se cayó la bd da 500
//RECORDAR: GET exitosos 200 ok, POST existoso 201 created (se creo algo nuevo)
// datos malo 400 bad request acá falta info o 404 no no existe
// error del servidor 500

// node_modules cuando instalo express npm install express
// cuando subes el archivo a git solo subes el package.json y el te dice que descargar
//dentro de gitignore se debe poner node_modules/

// API´s que es un intermediario que permite que dos aplicaciones hablen entre si
// CRUD Create, Read, Update, Delete
// en la API create: crea algo POST /emociones, read: lee la info GET /emociones, 
// update: modificar PUT /emociones/1 o PATH /empociones/1, delete: elimina DELETE /emociones/1

// PUT = actualizar la ruta es app.put("/emociones/id" (req, res) =>{}), 
// que necesitamos? el ID siempre debe ser /emociones/1 (req.params.id)
// app.put("/emociones/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const emocion = emociones.find(
//         (emocion) => emocion.id === id
//     );
//     if (!emocion) {
//         return res.status(404).json({
//             mensaje: "No encontrada"
//         });
//     }
//     emocion.nombre = req.body.nombre;
//     return res.status(200).json({
//         mensaje: "Actualizada"
//     });
// });

// diferencia entre PUT y PATH es que PUT reemplaza completo y PATH modifica parcialmente

// DELETE quieres borrar una emocion {id: 1, nombre:"feliz"} 
// para borrar la ruta app.delete("/emociones/:id" (req, res) =>{}), 
// necesitas solo el id req.params.id
// app.delete("/emociones/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const emocion = emociones.find(
//         (emocion) => emocion.id === id
//     );
//     if (!emocion) {
//         return res.status(404).json({
//             mensaje: "No encontrada"
//         });
//     }
//     return res.status(200).json({
//         mensaje: "Eliminada"
//     });
// });

// mapa completo de una petición
// cuando llega una peticion POST /emociones/5?modo=test el body {"nombre": "Feliz"}
// express recibe tres fuentes de datos distintas: params con req.params.id, 
// Query req.query.modo "test" y 
// el body con req.body.nombre

//Middleware
//funcion que se ejetuca antes de llegar a la ruta
//express.json() => esto es un middleware
//el middleware recibe la petición, la procesa y la pasa a la ruta
//Ej:
// {
//     "nombre": "Feliz"
// }
//sin el app.use(express.json()); => hace req.body y la respuesta es undefined
//Ahora con el app.use(express.json()); => hace req.body y la respuesta es:
// {
//     "nombre": "Feliz"
// }
//Middleware personalizado
// const verificarToken = (req, res, next) => {

//     console.log("Verificando token...");

//     next();

// };
//Qué hace el next()?
//significa ya termine, puedes seguir
//Sin next() no llega a la ruta
//Next es un guardia en la puerta, ademas se mueva la validacion al middleware
//ejemplo :
// const validarNombre = (req, res, next) => {
//     if (!req.body.nombre) {
//         return res.status(400).json({
//             mensaje: "Falta el nombre"
//         });
//     }
//     next();
// };
// app.post(
//     "/emociones",
//     validarNombre,
//     (req, res) => {
//         emociones.push(req.body);
//         res.status(201).json({
//             mensaje: "Creada"
//         });

//     }
// );

// Arquitectura básica de una API
//Para que un archivo js sea muy grande conviene separarlas 
// src/
// ├── routes/
// ├── controllers/
// ├── services/
// ├── app.js
//Routes: Definen las rutas:
// router.get("/emociones");
// router.post("/emociones");
//Piensa que la URL EXISTE?

//Controllers: reciben la petición y responden:
// const obtenerEmociones = (req, res) => {
//     res.json(emociones);
// };
//Piensa: Que hago cuando alguien llama la ruta?

//Services: Acá va la logica de negocio

//LA BASE DE DATOS: lugar donde guardas la información para que sobreviva
//flujo real: se crea emción => la API recibe => la BD la guarda 201 created

//Base de datos conexión del backend con la bd
// PASO 1: instalar PostgresSQL en node => npm install pg 
// PASO 2: archivo database.js configuración básica:
// const { Pool } = require("pg");
// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "floflo",
//     password: "123456",
//     port: 5432
// });
// module.exports = pool;
//PASO 3: crear endpoint express:
// const express = require("express");
// const db = require("./database");
// const app = express();
// app.get("/emociones/:id", async (req, res) => {
//     const id = Number(req.params.id);
//     const resultado = await db.query(
//         "SELECT * FROM emociones WHERE id = $1",
//         [id]
//     );
//     res.json(resultado.rows[0]);
// });

//viaje completo de una petición
//En react se ejecuta: fetch("/emociones/3")
//PASO 1 Llega a Express, la petición entra a GET /emociones/3
//PASO 2: Route: router.get("/emociones/:id", obtenerEmocion), 
// la ruta dice su alguien pide /emociones/:id ejecuta obtenerEmocion
//PASO 3: Controller:
// const obtenerEmocion = async (req, res) => {
//     const id = Number(req.params.id);
//     const emocion =
//         await emocionService.buscarPorId(id);
//     res.json(emocion);
// };
//aqui => req.params.id obtiene 3
//PASO 4: Service: acá vivde la lógica
// const buscarPorId = async (id) => {
//     return db.query(
//         "SELECT * FROM emociones WHERE id = $1",
//         [id]
//     );
// };
//PASO 5: La BD recibe:
// SELECT * FROM emociones
// WHERE id = 3;
// Y responde id:3, nombre: "Enojado"

//PASO 6 Vuelve a express genera:
// {
//     "id": 3,
//     "nombre": "Enojado"
// }

//PASO7: React recibe: y lo muestra
// {
//     id: 3,
//     nombre: "Enojado"
// }



