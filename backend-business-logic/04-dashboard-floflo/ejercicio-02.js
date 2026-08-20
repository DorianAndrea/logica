// const ninos = [
//     {
//         nombre: "Matías",
//         emociones: [
//             {
//                 emocion: "Felicidad",
//                 completada: true,
//                 puntos: 15
//             },
//             {
//                 emocion: "Tristeza",
//                 completada: true,
//                 puntos: 25
//             },
//             {
//                 emocion: "Enojo",
//                 completada: false,
//                 puntos: 10
//             }
//         ]
//     },
//     {
//         nombre: "Sofía",
//         emociones: [
//             {
//                 emocion: "Calma",
//                 completada: true,
//                 puntos: 20
//             },
//             {
//                 emocion: "Sorpresa",
//                 completada: true,
//                 puntos: 30
//             },
//             {
//                 emocion: "Miedo",
//                 completada: true,
//                 puntos: 18
//             }
//         ]
//     }
// ];

// Qué emociones fueron completadas OK
// Cuántas emociones completadas tiene OK
// Cuántos puntos obtuvo
// Cuál es el promedio de puntos
// Cuál fue la emoción con mejor puntaje
// const reporteEmociones = ninos.reduce((acc, {nombre, emociones}) => {
//     const emocionesCompletadas = emociones.filter(({completada}) => completada);
//     const cantidadCompletadas = emocionesCompletadas.length;
//     const totalPuntos = emocionesCompletadas.reduce((accTotal, {puntos}) => accTotal + puntos, 0);
//     const promedioPuntos = totalPuntos / cantidadCompletadas;
//     const maxPuntaje = Math.max(...emocionesCompletadas.map(({puntos}) => puntos));
//     const emocionMejorPuntaje = emocionesCompletadas.find(({puntos}) => puntos === maxPuntaje).emocion;

//     acc[nombre] = {
//         emocionesCompletadas: emocionesCompletadas.map(({emocion}) => emocion),
//         cantidadCompletadas,
//         totalPuntos,
//         promedioPuntos,
//         emocionMejorPuntaje
//     }
//     return acc;
// },
// {}
// )
// console.log(reporteEmociones);