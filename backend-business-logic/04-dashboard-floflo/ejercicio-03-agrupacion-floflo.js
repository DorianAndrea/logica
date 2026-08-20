//MINI CLASE DE AGRUPACION CON REDUCE, SE REQUIERE AGRUPAR EMOCIONES CON UN CONTADOR
const emociones = [
    "Felicidad",
    "Tristeza",
    "Felicidad",
    "Calma",
    "Felicidad"
];
// QUE SE QUIERE OBTENER
// {
//     Felicidad: 3,
//     Tristeza: 1,
//     Calma: 1
// }

//COMO SE OBTIENE
// const resultado = emociones.reduce((acc, emocion) => {
//     if (!acc[emocion]) {
//         acc[emocion] = 1;
//     } else {
//         acc[emocion]++;
//     }

//     return acc;

// }, {});
// console.log(resultado);

// Ejercicio 03 — Emociones más trabajadas
//Contexto de negocio
//FloFlo quiere saber cuáles son las emociones 
// que más se trabajan entre todos los niños.
// const ninos = [
//     {
//         nombre: "Matías",
//         emociones: [
//             { emocion: "Felicidad" },
//             { emocion: "Tristeza" },
//             { emocion: "Felicidad" }
//         ]
//     },
//     {
//         nombre: "Sofía",
//         emociones: [
//             { emocion: "Calma" },
//             { emocion: "Felicidad" },
//             { emocion: "Calma" }
//         ]
//     }
// ];
// // Recorrer niños con forEach
// ninos.forEach(({emociones}) =>{
//     console.log(emociones);
// });

// // Obtener emociones
// const todasLasEmociones = ninos.flatMap(({emociones}) => emociones) //console.log(todasLasEmociones);

// // Contar cuántas veces aparece cada emoción
// const resultado = todasLasEmociones.reduce((acc, {emocion}) => {
//     if(!acc[emocion]){
//         acc[emocion] = 1;
//     }else{
//         acc[emocion]++;
//     }
//     return acc
// },
// {}
// )
// console.log(resultado);

// RUTINAS MAS UTILIZADAS ENTRE TODOS LOS NIÑOS
// const ninos = [
//     {
//         nombre: "Matías",
//         rutinas: [
//             { categoria: "Higiene" },
//             { categoria: "Vestimenta" },
//             { categoria: "Higiene" }
//         ]
//     },
//     {
//         nombre: "Sofía",
//         rutinas: [
//             { categoria: "Alimentación" },
//             { categoria: "Higiene" },
//             { categoria: "Alimentación" }
//         ]
//     }
// ];
// // Recorrer niños
// ninos.forEach(({rutinas}) =>{
//     //console.log(rutinas);
// })
// // Obtener todas las rutinas
// const todasLasRutinas = ninos.flatMap(({rutinas}) => rutinas)
// //console.log(todasLasRutinas);
// // Agrupar por categoría
// const resultado = todasLasRutinas.reduce((acc, {categoria}) =>{
//     if(!acc[categoria]){
//         acc[categoria] = 1;
//     }else{
//         acc[categoria]++
//     }
//     return acc;
// },
// {}
// )
// console.log(resultado)
// // Contar ocurrencias

// ejercicio 5 cuantas actividades existen por nivel de dificultad
// const actividades = [
//     {
//         emocion: "Felicidad",
//         nivel: "Facil"
//     },
//     {
//         emocion: "Tristeza",
//         nivel: "Medio"
//     },
//     {
//         emocion: "Calma",
//         nivel: "Facil"
//     },
//     {
//         emocion: "Miedo",
//         nivel: "Dificil"
//     },
//     {
//         emocion: "Sorpresa",
//         nivel: "Facil"
//     },
//     {
//         emocion: "Enojo",
//         nivel: "Medio"
//     }
// ];
// Recorrer actividades
// actividades.forEach(({emocion})=>{
//     //console.log(emocion)
// })

// 6 Agrupar por nivel
//const todasLasActividades = actividades.flatMap(({nivel}) => nivel);
//console.log(todasLasActividades);
// Contar cuántas veces aparece cada nivel
// const resultado = actividades.reduce((acc, {nivel}) =>{
//     if(!acc[nivel]){
//         acc[nivel] = 1;
//     }else{
//         acc[nivel]++
//     }
//     return acc;
// },
// {}
// );
// console.log(resultado)

// 7 emociones completadas
// const ninos = [
//     {
//         nombre: "Matías",
//         emociones: [
//             {
//                 emocion: "Felicidad",
//                 completada: true
//             },
//             {
//                 emocion: "Tristeza",
//                 completada: true
//             },
//             {
//                 emocion: "Felicidad",
//                 completada: false
//             }
//         ]
//     },
//     {
//         nombre: "Sofía",
//         emociones: [
//             {
//                 emocion: "Calma",
//                 completada: true
//             },
//             {
//                 emocion: "Felicidad",
//                 completada: true
//             },
//             {
//                 emocion: "Calma",
//                 completada: true
//             }
//         ]
//     }
// ];
// Obtener todas las emociones OK
// const todasLasEmociones = ninos.flatMap(({emociones}) =>emociones)
// //console.log(todasLasEmociones);

// // Filtrar solo las completadas ok
// const agruparEmociones = todasLasEmociones.filter(({completada}) => completada);
// //console.log(agruparEmociones)

// // Agrupar por emoción
// // Contar ocurrencias
// const resultado = agruparEmociones.reduce((acc, {emocion}) =>{
//     if(!acc[emocion]){
//         acc[emocion] = 1;
//     }else{
//         acc[emocion]++
//     }
//     return acc
// },
// {}
// )
// console.log(resultado);

//ejercicio 8 que emociones estan siendo trabajadas exitosamente. Exitosa >=20
// const actividades = [
//     {
//         emocion: "Felicidad",
//         puntos: 15
//     },
//     {
//         emocion: "Tristeza",
//         puntos: 25
//     },
//     {
//         emocion: "Felicidad",
//         puntos: 30
//     },
//     {
//         emocion: "Calma",
//         puntos: 22
//     },
//     {
//         emocion: "Calma",
//         puntos: 18
//     },
//     {
//         emocion: "Tristeza",
//         puntos: 35
//     }
// ];

// const actividadesExitosas = actividades.filter(({puntos}) => puntos >=20);
// console.log(actividadesExitosas);
// // contar las emociones
// const resultado = actividadesExitosas.reduce((acc, {emocion}) =>{
//     if(!acc[emocion]){
//         acc[emocion] = 1;
//     }else{
//         acc[emocion]++
//     }
//     return acc
// },
// {}
// )
// console.log(resultado);

//ejercicio 9 
//Por ahora solo quiere la cantidad de actividades por emoción,
//  pero quiere guardar el resultado dentro de objetos porque más 
// adelante agregaremos más métricas.
// const actividades = [
//     {
//         emocion: "Felicidad"
//     },
//     {
//         emocion: "Tristeza"
//     },
//     {
//         emocion: "Felicidad"
//     },
//     {
//         emocion: "Calma"
//     },
//     {
//         emocion: "Calma"
//     }
// ];
// // actividades.forEach(({emocion})=>{
// //     //console.log(emocion)
// // })
// // Recorrer actividades
// actividades.forEach(({emocion}) => {
//     console.log(emocion)
// });
// Agrupar por emoción
// Crear objeto por emoción
// Incrementar cantidad
// const resultado = actividades.reduce((acc, {emocion})=>{
//     if(!acc[emocion]){
//         acc[emocion] = {
//             cantidad : 1
//         };
//     }else{
//             acc[emocion].cantidad ++;
        
//     }
//     return acc;
// },
// {}
// )
// console.log(resultado);

//EJEMPLO CON OBJETO CON MAS DE 1 DATO
// const resultado = actividades.reduce(
//     (acc, { emocion, puntos }) => {
//         if (!acc[emocion]) {
//             acc[emocion] = {
//                 cantidad: 1,
//                 totalPuntos: puntos
//             };
//         } else {
//             acc[emocion].cantidad++;
//             acc[emocion].totalPuntos += puntos;
//         }
//         return acc;

//     },
//     {}
// );

// console.log(resultado);

//ejercicio 10: Con agrupacion: cuantas actividades se realizaron 
// por emocion y cuantos puntos se obtuvieron en total
// const actividades = [
//     {
//         emocion: "Felicidad",
//         puntos: 10
//     },
//     {
//         emocion: "Tristeza",
//         puntos: 30
//     },
//     {
//         emocion: "Felicidad",
//         puntos: 20
//     },
//     {
//         emocion: "Calma",
//         puntos: 15
//     },
//     {
//         emocion: "Calma",
//         puntos: 25
//     }
// ];

// // Agrupar por emoción
// const agruparPorEmocion = actividades.flatMap(({emocion})=>emocion);
// console.log(agruparPorEmocion);
// // Guardar cantidad
// // Guardar totalPuntos
// // Calcular promedio
// const resultado = actividades.reduce((acc, {emocion,puntos}) =>{
//     if(!acc[emocion]){
//         acc[emocion] = {
//             cantidad:1,
//             totalPuntos: puntos,
//         }
//     }else{
//         acc[emocion].cantidad++;
//         acc[emocion].totalPuntos += puntos;
//     }
//     return acc;
// },
// {}
// );
// Object.keys(resultado).forEach((emocion) =>{
//     resultado[emocion].promedio = 
//         resultado[emocion].totalPuntos / resultado[emocion].cantidad;
// })
// console.log(resultado);

//ejercicio 11: ¿Cuántas actividades existen por categoría y cuántos puntos acumula cada categoría?
// const actividades = [
//     {
//         categoria: "Emociones",
//         puntos: 10
//     },
//     {
//         categoria: "Rutinas",
//         puntos: 20
//     },
//     {
//         categoria: "Emociones",
//         puntos: 15
//     },
//     {
//         categoria: "Rutinas",
//         puntos: 25
//     },
//     {
//         categoria: "Social",
//         puntos: 30
//     }
// ];
// Agrupar por categoria cuando hay un arrays dentro de arrays. En este ejercicio no usamos flatMap
// Guardar cantidad
// Guardar totalPuntos
// Calcular promedio
// const resultado = actividades.reduce((acc, {categoria, puntos}) =>{
//     if(!acc[categoria]){
//         acc[categoria] ={
//             cantidad : 1,
//             totalPuntos: puntos
//         }
//     }else{
//         acc[categoria].cantidad++;
//         acc[categoria].totalPuntos += puntos
//     }
//     return acc;
// },
// {}
// )
// Object.keys(resultado).forEach((categoria) => {
//     resultado[categoria].promedio =
//         resultado[categoria].totalPuntos / resultado[categoria].cantidad;
// })
// console.log(resultado);

//Ejercicio 12:FloFlo quiere saber cuántas actividades 
// realizó cada terapeuta y cuántos puntos acumuló.
// const actividades = [
//     {
//         terapeuta: "Paula",
//         puntos: 20
//     },
//     {
//         terapeuta: "Javier",
//         puntos: 15
//     },
//     {
//         terapeuta: "Paula",
//         puntos: 30
//     },
//     {
//         terapeuta: "Javier",
//         puntos: 25
//     },
//     {
//         terapeuta: "Paula",
//         puntos: 10
//     }
// ];
// Agrupar por terapeuta
// Guardar cantidad
// Guardar totalPuntos
// Calcular promedio
// const resultados = actividades.reduce((acc, {terapeuta, puntos}) =>{
//     if(!acc[terapeuta]){
//         acc[terapeuta] ={
//             cantidad : 1,
//             totalPuntos: puntos
//         }
//     }else{
//         acc[terapeuta].cantidad++;
//         acc[terapeuta].totalPuntos += puntos
//     }
//     return acc;
// },
// {}
// )
// Object.keys(resultados).forEach((terapeuta) =>{
//     resultados[terapeuta].promedio =
//         resultados[terapeuta].totalPuntos / resultados[terapeuta].cantidad
// })
// console.log(resultados);

// ejercicio 13 El equipo quiere saber las métricas por categoría pero solamente de actividades exitosas.
// const actividades = [
//     {
//         categoria: "Emociones",
//         puntos: 10
//     },
//     {
//         categoria: "Rutinas",
//         puntos: 20
//     },
//     {
//         categoria: "Emociones",
//         puntos: 30
//     },
//     {
//         categoria: "Rutinas",
//         puntos: 25
//     },
//     {
//         categoria: "Social",
//         puntos: 15
//     },
//     {
//         categoria: "Social",
//         puntos: 40
//     }
// ];
// Filtrar actividades exitosas donde puntos >= 20
// const actividadesExitosas = actividades.filter(({puntos}) => puntos >= 20);
//console.log(actividadesExitosas);
// Agrupar por categoria
// Guardar cantidad
// Guardar totalPuntos
// Calcular promedio
// const resultado = actividadesExitosas.reduce((acc,{categoria, puntos}) =>{
//     if(!acc[categoria]){
//         acc[categoria] = {
//             cantidad : 1,
//             totalPuntos : puntos
//         }
//     }else{
//         acc[categoria].cantidad++;
//         acc[categoria].totalPuntos += puntos
//     }
//     return acc;
// },
// {}
// )
// Object.keys(resultado).forEach((categoria) =>{
//     resultado[categoria].promedio = 
//         resultado[categoria].totalPuntos / resultado[categoria].cantidad;
// })
// console.log(resultado);

//ejercicio 14
// const sesiones = [
//     {
//         emocion: "Felicidad",
//         puntos: 10,
//         minutos: 15
//     },
//     {
//         emocion: "Tristeza",
//         puntos: 30,
//         minutos: 20
//     },
//     {
//         emocion: "Felicidad",
//         puntos: 20,
//         minutos: 25
//     },
//     {
//         emocion: "Calma",
//         puntos: 15,
//         minutos: 10
//     },
//     {
//         emocion: "Calma",
//         puntos: 25,
//         minutos: 30
//     }
// ];
// Agrupar por emoción
// Guardar cantidad
// Guardar totalPuntos
// Guardar totalMinutos
// const agruparPorEmocion = sesiones.reduce((acc, {emocion, puntos, minutos}) =>{
//     if(!acc[emocion]){
//         acc[emocion] = {
//             cantidad : 1,
//             totalPuntos: puntos,
//             totalMinutos: minutos
//         }
//     }else{
//         acc[emocion].cantidad++;
//         acc[emocion].totalPuntos += puntos;
//         acc[emocion].totalMinutos += minutos
//     }
//     return acc;
// },
// {}
// )
// // Calcular promedio
// Object.keys(agruparPorEmocion).forEach((emocion) =>{
//     agruparPorEmocion[emocion].promedio =
//         agruparPorEmocion[emocion].totalPuntos / agruparPorEmocion[emocion].cantidad;
//     agruparPorEmocion[emocion].promedioMinutos =
//         agruparPorEmocion[emocion].totalMinutos / agruparPorEmocion[emocion].cantidad;
// })
// console.log(agruparPorEmocion);

//ejercicio 15