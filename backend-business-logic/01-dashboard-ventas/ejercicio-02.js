// //Mini clase de entries con reduce y sort
// const clientes = [
//     {
//         ciudad: "Valparaíso"
//     },
//     {
//         ciudad: "Santiago"
//     },
//     {
//         ciudad: "Valparaíso"
//     },
//     {
//         ciudad: "Concepción"
//     },
//     {
//         ciudad: "Valparaíso"
//     },
//     {
//         ciudad: "Santiago"
//     }
// ];
// //Paso 1: agrupar con reduce
// const agruparPorCiudad = clientes.reduce((acc, {ciudad}) =>{
//     if(!acc[ciudad]){
//         acc[ciudad] = {
//             cantidadClientes: 1
//         }
//     }else{
//         acc[ciudad].cantidadClientes++;
//     }
//     return acc;
// },
// {}
// )
// //Paso 2 Convertir el objeto en array
// //Object.entries()
// // Paso 3 Ordenar de mayor a menor
// const top3Ciudades = Object.entries(agruparPorCiudad)
//     .sort(
//         ([, ciudadA], [, ciudadB]) =>
//             ciudadA.cantidadClientes -
//             ciudadB.cantidadClientes
//     )
// // Quedarte con los 3 primeros
//     .slice(0, 3);
// console.log(top3Ciudades);

// ejercicio 1
// const ciudades = {
//     Valparaiso: 3,
//     Santiago: 2,
//     Concepcion: 1
// };
// const ordenarCiudades = Object.entries(ciudades)
// //console.log(ordenarCiudades); 
// ordenarCiudades.forEach(
//     ([nombreCiudad, cantidadClientes]) => {
//         console.log(
//             `${nombreCiudad} tiene ${cantidadClientes} clientes`
//         );
//     }
// );

// ejercicio 1
// const productos = {
//     Laptop: 15,
//     Mouse: 30,
//     Teclado: 10
// };
// const ordenarProductos = Object.entries(productos);
// ordenarProductos.forEach(
//     ([nombreProducto, stock]) => {
//         console.log(`${nombreProducto} tiene stock de ${stock}`)
//     }
// )

// el equivalente al ejercicio de arriba es:
// ordenarProductos.forEach((producto) => {

//     const nombreProducto = producto[0];
//     const stock = producto[1];

//     console.log(
//         `${nombreProducto} tiene stock de ${stock}`
//     );

// });

// ejercicio 2 debe imprimir por ejemplo Pan cuesta $1200
// const precios = {
//     Pan: 1200,
//     Leche: 1500,
//     Queso: 3500
// };
// const obtenerPrecios = Object.entries(precios);
// obtenerPrecios.forEach(
//     ([producto, precio]) =>{
//         console.log(`${producto} cuesta $${precio}`)
//     }
// )

// ejercicio 3 imprime si es mayor a 3000 es caro
// const precios = {
//     Pan: 1200,
//     Leche: 1500,
//     Queso: 3500,
//     Jamon: 4200
// };
// const obtenerPrecios = Object.entries(precios);
// obtenerPrecios.forEach(
//     ([producto, precio]) =>{
//         if(precio >= 3000){
//             console.log(`${producto} es caro`)
//         }
//     }
// )
// const persona = {
//     nombre: "Dorian",
//     edad: 30
// };
// console.log(Object.entries(persona));
// //console.log(persona)

// ejercicio 3  de imprimir por ejemplo Luna es un Perro
// const mascotas = {
//     Luna: "Perro",
//     Mishi: "Gato",
//     Rocky: "Perro"
// };
// const listaMascotas = Object.entries(mascotas);
// listaMascotas.forEach(
//     ([nombre, especie]) =>{
//         console.log(`${nombre} es un ${especie}`)
//     }
// )

// ejercicio 4
// const ciudades = {
//     Valparaiso: 3,
//     Santiago: 5,
//     Concepcion: 2
// };

// let totalClintes = 0;
// const obtenerCiudades = Object.entries(ciudades);
// obtenerCiudades.forEach(
//     ([ciudad, cantidadClientes]) =>{
//        totalClintes += cantidadClientes 
//     }
// );
// console.log(`Total cliente: ${totalClintes}`)

// ejercicio 5 calcular el total de las mascotas
// const mascotasPorTipo = {
//     Perro: 12,
//     Gato: 8,
//     Conejo: 3
// };
// let totalMascotas = 0;
// const obtenerMascotas = Object.entries(mascotasPorTipo);
// obtenerMascotas.forEach(
//     ([nombre, sumarMascotas]) => {
//         totalMascotas += sumarMascotas
//     }
// );
// console.log(`Total mascotas: ${totalMascotas}`)

// ejercicio 6 obtener producto mas caro e imprimir su precio
// const precios = {
//     Pan: 1200,
//     Leche: 1500,
//     Queso: 3500,
//     Jamon: 4200
// };

// let precioMayor = 0
// let productoMasCaro= "";

// const obtenerMasCaro = Object.entries(precios);
// obtenerMasCaro.forEach(
//     ([producto, precio]) => {
//         if(precio > precioMayor ){
//             precioMayor = precio;
//             productoMasCaro = producto
//         }
//     }
// );
// console.log(`El producto más caro : ${productoMasCaro}`);
// console.log(`Precio: ${precioMayor}`);

// ejercicio 7 encontrar la ciudad con mas clientes
// const ciudades = {
//     Valparaiso: 8,
//     Santiago: 15,
//     Concepcion: 5,
//     ViñaDelMar: 12
// };
// let cantidadClientes = 0;
// let ciudadGanadora = "";
// const obtenerCiudades = Object.entries(ciudades);
// obtenerCiudades.forEach(
//     ([ciudad, clientes]) => {
//         if(clientes > cantidadClientes){
//             cantidadClientes = clientes;
//             ciudadGanadora = ciudad;
//         }
//     }
// );
// console.log(`Ciudad ganadora : ${ciudadGanadora}`);
// console.log(`Cantidad clientes: ${cantidadClientes}`)

//ejercicio 8 encontrar la emoción más usada
// const emociones = {
//     Feliz: 12,
//     Triste: 4,
//     Enojado: 7,
//     Sorprendido: 2
// };
// let maxUsos = 0;
// let emocionMasUsada = ""
// const obtenerEmocion = Object.entries(emociones);
// obtenerEmocion.forEach(
//     ([emocion, cantidad]) => {
//         if(cantidad >= maxUsos){
//             maxUsos = cantidad;
//             emocionMasUsada = emocion
//         }
//     }
// );
// console.log(`Emoción más usada ${emocionMasUsada}`);
// console.log(`Cantidad: ${maxUsos}`);

// ejercicio 9 emocion menos usada
// const emociones = {
//     Feliz: 12,
//     Triste: 4,
//     Enojado: 7,
//     Sorprendido: 2
// };
// let minUsos = Infinity;
// let emocionMenosUsada = "";
// const emocionMenos = Object.entries(emociones);
// emocionMenos.forEach(
//     ([emocion, cantidad]) =>{
//         if(cantidad < minUsos){
//             minUsos = cantidad;
//             emocionMenosUsada = emocion;
//         }
//     }
// );
// console.log(`La emoción menos usada es : ${emocionMenosUsada}`);
// console.log(`Cantidad: ${minUsos}`);

//console.log(Infinity); el infinity se usa cuando buscamos un minimo, necesitamos partir desde un numero enorme

// 10 emoción más usada y menos usada
// const emociones = {
//     Feliz: 12,
//     Triste: 4,
//     Enojado: 7,
//     Sorprendido: 2,
//     Motivado: 9
// };
// let maxUsos = 0;
// let emocionMasUsada = "";
// let minUsos = Infinity;
// let emocionMenosUsada = "";
// const obtenerEmociones = Object.entries(emociones);
// obtenerEmociones.forEach(
//     ([emocion, cantidad]) => {
//         if(cantidad > maxUsos){
//             maxUsos = cantidad;
//             emocionMasUsada = emocion;
//         }
//         if(cantidad < minUsos){
//             minUsos = cantidad;
//             emocionMenosUsada = emocion;
//         }
//     }
// )
// console.log(`La emoción más usada es : ${emocionMasUsada}`);
// console.log(`Cantidad: ${maxUsos}`);

// console.log(`La emoción menos usada es : ${emocionMenosUsada}`);
// console.log(`Cantidad: ${minUsos}`);

//ejercicio 11 total de alumnos con un solo forEach
// const cursos = {
//     JavaScript: 25,
//     NodeJS: 18,
//     React: 32,
//     SQL: 12,
//     Git: 20
// };
// let totalAlumnos = 0;
// let maxAlumnos = 0;
// let cursoMasPopular = "";
// let minAlumnos = Infinity;
// let cursoMenosPopular = "";

// const obtenerCursos = Object.entries(cursos);
// obtenerCursos.forEach(
//     ([curso, cantidad]) =>{
//         totalAlumnos += cantidad;

//         if(cantidad > maxAlumnos){
//             maxAlumnos = cantidad;
//             cursoMasPopular = curso;
//         }
//         if(cantidad < minAlumnos){
//             minAlumnos = cantidad;
//             cursoMenosPopular = curso;
//         }
//     }
// )
// console.log(`Suma total de alumnos : ${totalAlumnos}`);
// console.log(`El curso mas popular: ${cursoMasPopular}`);
// console.log(`Cantidad de alumnos : ${maxAlumnos}`);
// console.log(`El curso menos popular: ${cursoMenosPopular}`);
// console.log(`Cantidad de alumnos : ${minAlumnos}`);


