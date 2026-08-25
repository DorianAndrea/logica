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

