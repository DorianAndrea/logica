// Ejercicio 01 — Rutinas Completadas

// const ninos = [
//     {
//         nombre: "Matías",
//         rutinas: [
//             {
//                 actividad: "Lavarse los dientes",
//                 completada: true,
//                 minutos: 10
//             },
//             {
//                 actividad: "Vestirse",
//                 completada: false,
//                 minutos: 5
//             },
//             {
//                 actividad: "Preparar mochila",
//                 completada: true,
//                 minutos: 20
//             }
//         ]
//     },
//     {
//         nombre: "Sofía",
//         rutinas: [
//             {
//                 actividad: "Ordenar juguetes",
//                 completada: true,
//                 minutos: 15
//             },
//             {
//                 actividad: "Preparar colación",
//                 completada: true,
//                 minutos: 25
//             },
//             {
//                 actividad: "Guardar materiales",
//                 completada: true,
//                 minutos: 12
//             }
//         ]
//     }
// ];

// En FloFlo los padres y terapeutas registran rutinas que realizan los niños.OK
// El equipo quiere saber qué tan activamente está utilizando cada niño las rutinas.OK
// Qué rutinas fueron completadas OK
// Cuántas rutinas completadas tiene OK
// Cuántos minutos trabajó OK
// Cuál es el promedio OK
// Cuál fue la rutina más larga OK
// const obtenerRutinas = ninos.reduce((acc, {nombre, rutinas}) =>{
//     const rutinasCompletadas = rutinas.filter(({completada}) => completada);
//     const cantidadCompletadas = rutinasCompletadas.length;
//     const totalMinutos = rutinasCompletadas.reduce((accTotal, {minutos}) => accTotal + minutos, 0);
//     const promedioMinutos = totalMinutos / cantidadCompletadas;
//     const maxMinutos = Math.max(...rutinasCompletadas.map(({minutos}) => minutos));
//     const rutinaMasLarga = rutinasCompletadas.find(({minutos}) => minutos === maxMinutos).actividad
//     acc[nombre] = {
//         rutinasCompletadas: rutinasCompletadas.map(({actividad}) => actividad),
//         cantidadCompletadas,
//         totalMinutos,
//         promedioMinutos,
//         rutinaMasLarga
//     }
//     return acc;
// },
// {}
// )
// console.log(obtenerRutinas);
