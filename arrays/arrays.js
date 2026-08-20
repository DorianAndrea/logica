// const frutas = [
//     "Manzana",
//     "Pera",
//     "Naranje"
// ];
// console.log(frutas[1]);
// console.log(frutas.length);
// console.log(frutas[3]);

//bucles for
// const frutas = [
//      "Manzana",
//      "Pera",
//      "Naranje"
//  ];

//  const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro"
// ];

// for (let i = 0; i < usuarios.length; i++) {

//     if (usuarios[i] === "Ana") {
//         console.log("Usuario encontrado");
//     }

// }

// const usuarios = [
//     {
//         nombre: "Dorian",
//         activo: true
//     },
//     {
//         nombre: "Ana",
//         activo: false
//     },
//     {
//         nombre: "Pedro",
//         activo: true
//     }
// ];

// const activos = usuarios.filter(usuario => usuario.activo);

// console.log(activos.length);

// arrays y for

//EJERICIO1

// const colores = [
//     "Rojo",
//     "Verde",
//     "Azul"
// ]
// for(i = 0; i < colores.length; i++){
//     console.log(colores[i])
// }

// const colores = [
//     "Rojo",
//     "Verde",
//     "Azul"
// ];

// for(let i = 0; i < colores.length; i++){
//     console.log(`Posición ${i}: ${colores[i]}`);
// }

// for frutas
// const frutas = [
//     "Manzana",
//     "Pera",
//     "Naranja"
// ];
// for(i = 0; i < frutas.length ; i++){
//     console.log(frutas[i]);
// }

// const frutas = [
//     "Manzana",
//     "Pera",
//     "Naranja"
// ];
// for(i = 0 ; i < frutas.length; i++){
//     console.log(`Posición ${i}: ${frutas[i]}`);
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro"
// ];

// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i] === "Ana"){
//         console.log("Usuario encontrado")
//     }
// }

// const numeros = [10, 20, 30, 40];
// for(i = 0 ; i < numeros.length; i ++){
//     if(numeros[i] > 20){
//         console.log(numeros[i])
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro"
// ];
// for(i = 0; i < usuarios.length; i++ ){
//     if(usuarios[i] === "Ana"){
//         console.log(`Hola ${usuarios[i]}`)
//     }else{
//         console.log(usuarios[i])
//     }
// }

// const colores = [
//     "Rojo",
//     "Verde",
//     "Azul"
// ];
// for(i = 0 ; i < colores.length; i++){
//     if(colores[i] === "Verde"){
//         console.log("Color favorito encontrado")
//     }else{
//         console.log(colores[i])
//     }
// }

// const numeros = [5, 10, 15, 20];
// for(i= 0; i < numeros.length; i++){
//     if(numeros[i] >= 15){
//         console.log(numeros[i])
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro"
// ];
// for(let i = 0 ; i < usuarios.length; i++){
//     if(usuarios[i] === "Pedro"){
//         console.log("Usuario encontrado")
//     }else{
//         console.log(usuarios[i])
//     }
// }

// const numeros = [5, 10, 15, 20, 25];

// for(let i = 0; i < numeros.length; i++ ){
//     if(numeros[i] > 15){
//         console.log("Número válido")
//     }else{
//         console.log(numeros[i])
//     }
// }

// const nombres = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina"
// ];
// for(i = 0 ; i < nombres.length; i++){
//     if(nombres[i] === "Pedro"){
//         console.log("Usuario encontrado")
//     }else{
//         console.log(`Hola ${nombres[i]}`)
//     }
// }

// const notas = [3, 5, 7, 2, 6];
// for(let i = 0 ; i < notas.length; i++){
//     if(notas[i] >= 4){
//         console.log("Aprobado")
//     }else{
//         console.log("Reprobado")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina"
// ];

// for(i = 0 ; i < usuarios.length ; i++){
//     if(usuarios[i] === "Pedro" || usuarios[i] === "Carolina"){
//         console.log("Usuario encontrado")
//     }else{
//         console.log(`Hola ${usuarios[i]}`)
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro"
// ];
// for(let i = 0 ; i < usuarios.length ; i++){
//     if(usuarios[i] === "Ana" || usuarios[i] === "Pedro"){
//         console.log("Usuario autorizado")
//     }else{
//         console.log("Acceso pendiente")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina"
// ];
// if (usuarios[i] === "Pedro") {
//     console.log("Usuario encontrado");
// } else if (usuarios[i] === "Carolina") {
//     console.log("Administradora encontrada");
// } else {
//     console.log(`Hola ${usuarios[i]}`);
// }

// const numeros = [2, 8, 15, 22, 30];

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] < 10){
//         console.log("Pequeño")
//     }else if(numeros[i] < 20){
//         console.log("Mediano")
//     }else{
//         console.log("Grande")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina"
// ];

// for(i = 0; i < usuarios.length; i++){
//     if(usuarios[i] === "Pedro" || usuarios[i] === "Carolina"){
//         console.log("Accesos permitido")
//     }else{
//         console.log("Acceso denegado")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina"
// ];
// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i] === "Ana"){
//         console.log("Acceso especial")
//     }else if( usuarios[i] === "Pedro"){
//         console.log("Administrador")
//     }else{
//         console.log("Usuario normal")
//     }
// }

// const productos = [1000, 5000, 300, 8000, 1200];
// for(let i = 0; i < productos.length; i++ ){
//     if(productos[i] >= 5000){
//         console.log("Producto caro")
//     }else{
//         console.log("Producto económico")
//     }
// };

// const edades = [12, 18, 25, 15, 30];
// for(i = 0; i < edades.length; i++ ){
//     if(edades[i] < 18){
//         console.log("Menor de edad")
//     }else{
//         console.log("Mayor de edad")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina"
// ];
// for(i = 0; i < usuarios.length; i++){
//     if(usuarios[i] === "Ana"){
//         console.log("Usuario especial")
//     }else if(usuarios[i] === "Pedro" || usuarios[i] === "Carolina"){
//         console.log("Administrador")
//     }else{
//         console.log("Usuario normal")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro"
// ];
// for(i = 0; i < usuarios.length; i++){
//     if(usuarios[i] === "Ana"){
//         console.log(`Bienvenida ${usuarios[i]}`)
//     }else{
//         console.log("Saludos")
//     }
// }

// const numeros = [1, 5, 8, 12, 20];
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] < 10){
//         console.log("Pequeño")
//     }else if(numeros[i] < 15){
//         console.log("Mediano")
//     }else{
//         console.log("Grande")
//     }
// }

// const ciudades = [
//     "Valparaiso",
//     "Santiago",
//     "Concepcion",
//     "Valdivia"
// ];
// for(i = 0; i < ciudades.length; i++){
//     if(ciudades[i] === "Santiago"){
//         console.log("Capital encontrada")
//     }else if(ciudades[i] === "Valdivia"){
//         console.log("Ciudad del sur")
//     }else{
//         console.log("Ciudad normal")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina"
// ];

// for(i = 0; i < usuarios.length; i++){
//     if(usuarios[i] === "Ana"){
//         console.log("Administrador")
//     }else if(usuarios[i] === "Pedro"){
//         console.log("Moderador")
//     }else if(usuarios[i] === "Carolina"){
//         console.log("Supervisora")
//     }else{
//         console.log("Invitado")
//     }
// }  

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina",
//     "Javier"
// ];
// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i] === "Ana"){
//         console.log("Administradora")
//     }else if(usuarios[i] === "Pedro"){
//         console.log("Moderador")
//     }else if(usuarios[i] === "Carolina"){
//         console.log("Supervisora")
//     }else if(usuarios[i] === "Javier"){
//         console.log("Invitado VIP")
//     }else{
//         console.log("Invitado")
//     }
// }

// const edades = [10, 17, 18, 25, 70];

// for(let i = 0; i < edades.length; i++){
//     if(edades[i] < 18 ){
//         console.log("Menor de edad")
//     }else if(edades[i] >= 65){
//         console.log("Adulto mayor")
//     }else{
//         console.log("Adulto")
//     }
// }

// const numeros = [3, 7, 12, 18, 25];
// for(let i= 0; i < numeros.length; i++)
//  {
//     if(numeros[i] < 10){
//         console.log("Pequeño");
//     }else if(numeros[i] < 20){
//         console.log("Mediano")
//     }else{
//         console.log("Grande")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina",
//     "Javier"
// ];
// for(let i = 0; i < usuarios.length; i++ ){
//     if(usuarios[i] === "Ana"){
//         console.log("Administradora")
//     }else if(usuarios[i] === "Pedro"){
//         console.log("Moderador")
//     }else if(usuarios[i] === "Carolina"){
//         console.log("Supervisora")
//     }else{
//         console.log("Invitado")
//     }
// }

// const numeros = [5, 10, 15, 20, 25];
// for(let i = 0 ; i < numeros.length; i++){
//     if(numeros[i] === 5){
//         console.log("Cinco")
//     }else if(numeros[i] === 10){
//         console.log("Diez")
//     }else if(numeros[i] === 15){
//         console.log("Quince")
//     }else{
//         console.log("Otro número")
//     }
// }

// const numeros = [2, 4, 7, 10, 15];
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] <= 5){
//         console.log("Pequeño")
//     }else if(numeros[i] >= 5 && numeros[i] < 10){
//         console.log("Mediano")
//     }else{
//         console.log("Grande")
//     }
// }

// const numeros = [1, 8, 12, 19, 25];
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] < 10){
//         console.log("Pequeño")
//     }else if(numeros[i] <= 10 && numeros[i] < 20){
//         console.log("Mediano")
//     }else{
//         console.log("Grande")
//     }
// }
// const edades = [5, 13, 18, 30, 70];
// for(let i = 0; i < edades.length; i++){
//     if(edades[i] < 18){
//         console.log("Menor")
//     }else if(edades[i] >= 18 && edades[i] < 65){
//         console.log("Adulto")
//     }else{
//         console.log("Adulto mayor")
//     }
// }

// const numeros = [4, 9, 10, 15, 22];
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] < 10){
//         console.log("Pequeño")
//     }else if(numeros[i] >= 10 && numeros[i] < 19){
//         console.log("Mediano")
//     }else{
//         console.log("Grande")
//     }
// }

// const edades = [8, 16, 18, 40, 70];
// for(let i = 0; i < edades.length; i++){
//     if(edades[i] < 18){
//         console.log("Menor")
//     }else if(edades[i] >= 18 && edades[i] < 64){
//         console.log("Adulto")
//     }else{
//         console.log("Adulto mayor")
//     }
// }

// const numeros = [6, 14, 21, 35, 50];
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] < 10){
//         console.log("Bajo")
//     }else if(numeros[i] >= 10 && numeros[i] < 30){
//         console.log("Medio")
//     }else{
//         console.log("Alto")
//     }
// }

// const edades = [12, 25, 64, 65, 80];
// for(let i = 0; i < edades.length; i++){
//     if(edades[i] < 18){
//         console.log("Menor")
//     }else if(edades[i] >= 18 && edades[i] < 65){
//         console.log("Adulto")
//     }else{
//         console.log("Adulto mayor")
//     }  
// }

// const numeros = [1, 15, 20, 35, 50];
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] < 10){
//         console.log("Bajo")
//     }else if(numeros[i] >= 10 && numeros[i] < 30){
//         console.log("Medio")
//     }else{
//         console.log("Alto")
//     }
// }

// const edades = [15, 18, 30, 64, 70];
// for(let i = 0; i < edades.length; i++){
//     if(edades[i] < 18){
//         console.log("Menor")
//     }else if(edades[i] >= 18 && edades[i] < 65 ){
//         console.log("Adulto")
//     }else{
//         console.log("Adulto mayor")
//     }
// }

// const numeros = [3, 12, 18, 28, 40];
// for(let i = 0; i < numeros.length; i++ ){
//     if(numeros[i] < 10){
//         console.log("Pequeño")
//     }else if(numeros[i] >= 10 && numeros[i] < 30){
//         console.log("Mediano")
//     }else{
//         console.log("Grande")
//     }
// }

// const edades = [12, 25, 40, 65, 80];
// for(let i = 0; i < edades.length; i++){
//     if(edades[i] < 18){
//         console.log("Menor")
//     }else if(edades[i] >= 18 && edades[i] < 65){
//         console.log("Adulto")
//     }else{
//         console.log("Adulto mayor")
//     }
// }

// const notas = [2, 4, 5, 7, 1];
// for(let i = 0; i < notas.length; i++){
//     if(notas[i] < 4){
//         console.log("Reprobado")
//     }else{
//         console.log("Aprobado")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina"
// ];
// for(let i = 0; i < usuarios.length;i++){
//     if(usuarios[i] === "Ana"){
//         console.log("Administradora")
//     }else if(usuarios[i] === "Pedro"){
//         console.log("Moderador")
//     }else{
//         console.log("Usuario")
//     }
// }

// const productos = [1000, 5000, 300, 8000, 1200];
// for(let i = 0; i < productos.length; i++){
//     if(productos[i] < 1000){
//         console.log("Barato")
//     }else if(productos[i] >= 1000 && productos[i] < 5000){
//         console.log("Normal")
//     }else{
//         console.log("Caro")
//     }
// }

// const numeros = [2, 6, 11, 18, 25];
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] < 5){
//         console.log("Muy pequeño")
//     }else if(numeros[i] >= 5 && numeros[i] < 20){
//         console.log("Mediano")
//     }else{
//         console.log("Grande")
//     }
// }

// const notas = [1, 3, 4, 6, 7];
// for(let i = 0; i < notas.length; i++){
//     if(notas[i] < 4 ){
//         console.log("Reprobado")
//     }else if(notas[i] >= 4 && notas[i] <= 6){
//         console.log("Aprobado")
//     }else{
//         console.log("Excelente")
//     }
// }

// const edades = [10, 20, 30, 65, 70];
// for(let i = 0; i < edades.length; i++){
//     if(edades[i] < 18){
//         console.log("Menor")
//     }else if(edades[i] >= 18 && edades[i] < 65){
//         console.log("Adulto")
//     }else{
//         console.log("Adulto mayor")
//     }
// }

// const notas = [2, 5, 7, 10, 3];
// for(let i = 0; i < notas.length; i++){
//     if(notas[i] < 4){
//         console.log("Reprobado")
//     }else if(notas[i] >= 4 && notas[i] <= 7){
//         console.log("Aprobado")
//     }else{
//         console.log("Excelente")
//     }
// }

// const notas = [2, 5, 8, 10, 3];
// for(let i = 0; i < notas.length;i++){
//     if(notas[i] < 4 ){
//      console.log("Reprobado")
//     }else if(notas[i] >= 4 && notas[i] <= 7){
//         console.log("Aprobado")
//     }else {
//         console.log("Excelente")
//     }
// }

// const temperaturas = [5, 15, 22, 30, 40];
// for(let i = 0; i < temperaturas.length; i++){
//     if(temperaturas[i] < 10){
//         console.log("Frio")
//     }else if(temperaturas[i] >= 10 && temperaturas[i] < 30){
//         console.log("Templado")
//     }else{
//         console.log("Caluroso")
//     }
// }

// const salarios = [400000, 800000, 1200000, 300000];
// for(let i = 0; i < salarios.length; i++){
//     if(salarios[i] < 500000){
//        console.log("Bajo") 
//     }else if(salarios[i] >= 500000 && salarios[i] < 1000000){
//         console.log("Medio")
//     }else{
//         console.log("Alto")
//     }
// }

// const temperaturas = [2, 14, 21, 35, 50];
// for(let i = 0; i < temperaturas.length; i++){
//     if(temperaturas[i] <= 10){
//         console.log("Frio")
//     }else if(temperaturas[i] > 10 && temperaturas[i] <= 30){
//         console.log("Templado")
//     }else{
//         console.log("Caluroso")
//     }
// }

// const edades = [12, 25, 64, 65, 80];
// for(let i = 0; i < edades.length;i++){
//     if(edades[i] < 18){
//         console.log("Menor")
//     }else if(edades[i] >= 18 && edades[i] < 65){
//         console.log("Adulto")
//     }else{
//         console.log("Adulto mayor")
//     }
// }
// const numeros = [5, 10, 15, 20, 25];
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] < 10){
//         console.log("Bajo")
//     }else if(numeros[i] >= 10 && numeros[i] < 20){
//         console.log("Medio")
//     }else{
//         console.log("Alto")
//     }
// }

// const edades = [15, 18, 30, 64, 70];    
// for(let i = 0; i < edades.length; i++){
//     if(edades[i] < 18){
//         console.log("Menor")
//     }else if(edades[i] >= 18 && edades[i] < 65){
//         console.log("Adulto")
//     }else{
//         console.log("Adulto mayor")
//     }
// }

// const categorias = [3, 8, 12, 25, 40];
// for(let i = 0; i < categorias.length; i++){
//     if(categorias[i] < 5){
//         console.log("Muy bajo")
//     }else if(categorias[i] >= 5 && categorias[i] < 20){
//         console.log("Medio")
//     }else{
//         console.log("Alto")
//     }
// }

// const puntajes = [2, 15, 35, 60, 90];
// for(let i = 0; i < puntajes.length; i++){
//     if(puntajes[i] < 10){
//         console.log("Nivel bajo")
//     }else if(puntajes[i] >= 10 && puntajes[i] < 50){
//         console.log("Nivel medio")
//     }else{
//         console.log("Alto nivel")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina",
//     "Javier"
// ];
// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i] === "Ana"){
//         console.log("Administradora")
//     }else if(usuarios[i] === "Pedro"){
//         console.log("Moderador")
//     }else if(usuarios[i] === "Carolina"){
//         console.log("Supervisora")
//     }else if(usuarios[i] === "Javier"){
//         console.log("Invitado VIP")
//     }else{
//         console.log("Invitado")
//     }
// }

// const usuarios = [
//     "Dorian",
//     "Ana",
//     "Pedro",
//     "Carolina"
// ];        
// for(let i = 0; i < usuarios.length; i++ ){
//     if(usuarios[i] === "Ana" || usuarios[i] === "Carolina"){
//         console.log("Acceso especial")
//     }else if(usuarios[i] === "Pedro"){
//         console.log("Moderador")
//     }else{
//         console.log("Usuario normal")
//     }
// }
// const temperaturas = [1, 8, 12, 19, 25];
// for(let i = 0; i < temperaturas.length; i++){
//     if(temperaturas[i] < 10){
//         console.log("Frio")
//     }else if(temperaturas[i] >= 10 && temperaturas[i] < 20){
//         console.log("Templado")
//     }else{
//         console.log("Caluroso")
//     }
// }

// const usuarios = [
//     { nombre: "Dorian", edad: 17 },
//     { nombre: "Ana", edad: 25 },
//     { nombre: "Pedro", edad: 70 },
//     { nombre: "Carolina", edad: 15 }
// ];

// for(let i = 0; i < usuarios.length; i++){

//     if(usuarios[i].edad < 18){
//         console.log(`${usuarios[i].nombre}: Menor de edad`);

//     }else if(usuarios[i].edad >= 18 && usuarios[i].edad < 65){
//         console.log(`${usuarios[i].nombre}: Adulto`);

//     }else{
//         console.log(`${usuarios[i].nombre}: Adulto mayor`);
//     }

// }

// const usuarios = [
//     { nombre: "Dorian", rol: "usuario" },
//     { nombre: "Ana", rol: "admin" },
//     { nombre: "Pedro", rol: "moderador" },
//     { nombre: "Carolina", rol: "usuario" }
// ];

// for(let i = 0; i < usuarios.length; i++){

//     if(usuarios[i].rol === "admin"){
//         console.log(`${usuarios[i].nombre}: Administrador encontrado`);

//     }else if(usuarios[i].rol === "moderador"){
//         console.log(`${usuarios[i].nombre}: Moderador encontrado`);

//     }else{
//         console.log(`${usuarios[i].nombre}: Usuario normal`);
//     }

// }

// const usuarios = [
//     { nombre: "Dorian", activo: true },
//     { nombre: "Ana", activo: false },
//     { nombre: "Pedro", activo: true },
//     { nombre: "Carolina", activo: false }
// ];
// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i].activo){
//         console.log(`${usuarios[i].nombre}: Usuario activo`)
//     }else{
//         console.log(`${usuarios[i].nombre}: Usuario inactivo`)
//     }
// }

// const usuarios = [
//     { nombre: "Dorian", edad: 20 },
//     { nombre: "Ana", edad: 15 },
//     { nombre: "Pedro", edad: 30 },
//     { nombre: "Carolina", edad: 17 }
// ];
// for(let i = 0; i< usuarios.length; i++){
//     if(usuarios[i].edad > 18){
//         console.log(`${usuarios[i]. nombre}: Mayor de edad`)
//     }else{
//         console.log(`${usuarios[i]. nombre}: Menor de edad`)
//     }
// }

// const usuarios = [
//     { nombre: "Dorian", edad: 20, activo: true },
//     { nombre: "Ana", edad: 15, activo: false },
//     { nombre: "Pedro", edad: 30, activo: true },
//     { nombre: "Carolina", edad: 17, activo: false }
// ];
// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i].edad >= 18 && usuarios[i].activo){
//         console.log(`${usuarios[i]. nombre}: Acceso permitido`)
//     }else{
//         console.log(`${usuarios[i]. nombre}: Acceso denegado`)
//     }
// }
// const usuarios = [
//     { nombre: "Dorian", edad: 20, rol: "usuario" },
//     { nombre: "Ana", edad: 30, rol: "admin" },
//     { nombre: "Pedro", edad: 17, rol: "moderador" },
//     { nombre: "Carolina", edad: 65, rol: "usuario" }
// ];

// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i].rol === "admin"){
//         console.log(`${usuarios[i]. nombre}: Administrador`)
//     }else if(usuarios[i].rol === "moderador"){
//         console.log(`${usuarios[i]. nombre}: Moderador`)
//     }else{
//         console.log(`${usuarios[i]. nombre}: Usuario Normal`)
//     }
// }
// const usuarios = [
//     { nombre: "Dorian", edad: 20, activo: true },
//     { nombre: "Ana", edad: 15, activo: true },
//     { nombre: "Pedro", edad: 70, activo: false },
//     { nombre: "Carolina", edad: 17, activo: false },
//     { nombre: "Javier", edad: 40, activo: true }
// ];
// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i].edad < 18 ){
//         console.log(`${usuarios[i]. nombre}: Menor de edad`)
//     }else if(usuarios[i].edad >= 18 && usuarios[i].activo){
//         console.log(`${usuarios[i]. nombre}: Usuario activo`)
//     }else{
//         console.log(`${usuarios[i].nombre}: Usuario inactivo`)
//     }
// }
// const productos = [
//     { nombre: "Teclado", precio: 20000, stock: 5 },
//     { nombre: "Mouse", precio: 15000, stock: 0 },
//     { nombre: "Monitor", precio: 150000, stock: 3 },
//     { nombre: "Silla", precio: 90000, stock: 0 },
//     { nombre: "Escritorio", precio: 200000, stock: 2 }
// ];
// for(let i = 0; i < productos.length; i++ ){
//     if(productos[i].stock > 0){
//         console.log(`${productos[i].nombre} : Sin stock`);
//     }else if(productos[i].precio >= 100000 && productos[i].stock){
//         console.log(`${productos[i].nombre} : Producto caro disponible`);
//     }else{
//         console.log(`${productos[i].nombre} : Producto disponible`);
//     }
// }

// const usuarios = [
//     { nombre: "Dorian", edad: 25, rol: "admin", activo: true },
//     { nombre: "Ana", edad: 17, rol: "usuario", activo: true },
//     { nombre: "Pedro", edad: 40, rol: "moderador", activo: false },
//     { nombre: "Carolina", edad: 30, rol: "usuario", activo: true },
//     { nombre: "Javier", edad: 15, rol: "usuario", activo: false }
// ];
// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i].edad < 18){
//         console.log(`${usuarios[i].nombre} : Acceso bloqueado por edad`);
//     }else if(!usuarios[i].activo){
//         console.log(`${usuarios[i].nombre} : Cuenta inactiva`);
//     }else if (usuarios[i].rol === "admin"){
//         console.log(`${usuarios[i].nombre} : Bienvenida administradora`);
//     }else if (usuarios[i].rol === "moderador"){
//         console.log(`${usuarios[i].nombre} : Bienvenido moderador`);
//     }else{
//         console.log(`${usuarios[i].nombre} : Bienvenida usuario`);
//     }
// }

// const pedidos = [
//     { cliente: "Dorian", total: 25000, estado: "pendiente" },
//     { cliente: "Ana", total: 120000, estado: "pagado" },
//     { cliente: "Pedro", total: 5000, estado: "cancelado" },
//     { cliente: "Carolina", total: 80000, estado: "pagado" },
//     { cliente: "Javier", total: 300000, estado: "pendiente" }
// ];
// for(let i = 0; i < pedidos.length; i++){

//     if(pedidos[i].estado === "cancelado"){
//         console.log(`${pedidos[i].cliente}: Pedido cancelado`);

//     }else if(pedidos[i].estado === "pendiente" && pedidos[i].total >= 100000){
//         console.log(`${pedidos[i].cliente}: Pedido pendiente importante`);

//     }else if(pedidos[i].estado === "pendiente"){
//         console.log(`${pedidos[i].cliente}: Pedido pendiente`);

//     }else if(pedidos[i].estado === "pagado" && pedidos[i].total >= 100000){
//         console.log(`${pedidos[i].cliente}: Pedido pagado premium`);

//     }else{
//         console.log(`${pedidos[i].cliente}: Pedido pagado`);
//     }
// }
// const productos = [
//     { nombre: "Teclado", stock: 5 },
//     { nombre: "Mouse", stock: 0 },
//     { nombre: "Monitor", stock: 2 },
//     { nombre: "Silla", stock: 0 }
// ];
// for(let i = 0; i < productos.length; i++){
//     if(!productos[i].stock){
//         console.log(`${productos[i].nombre}: Agotado`)
//     }else{
//         console.log(`${productos[i].nombre}: Disponible`)
//     }
// }
// const usuarios = [
//     { nombre: "Dorian", edad: 25, saldo: 15000 },
//     { nombre: "Ana", edad: 17, saldo: 500 },
//     { nombre: "Pedro", edad: 40, saldo: 0 },
//     { nombre: "Carolina", edad: 65, saldo: 200000 },
//     { nombre: "Javier", edad: 30, saldo: 50000 }
// ];
// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i].edad < 18){
//         console.log(`${usuarios[i].nombre} : Bloqueado por edad`)
//     } else if(!usuarios[i].saldo){
//         console.log(`${usuarios[i].nombre} : Sin saldo`)
//     }else if(usuarios[i].saldo >= 100000){
//         console.log(`${usuarios[i].nombre} : Cliente premium`)
//     }else{
//         console.log(`${usuarios[i].nombre} : Cliente estándar`)
//     }
// }

// const productos = [
//     { nombre: "Teclado", precio: 15000, stock: 5, categoria: "accesorios" },
//     { nombre: "Silla gamer", precio: 250000, stock: 2, categoria: "muebles" },
//     { nombre: "Mouse", precio: 8000, stock: 0, categoria: "accesorios" },
//     { nombre: "Monitor", precio: 180000, stock: 3, categoria: "electronica" },
//     { nombre: "Notebook", precio: 900000, stock: 0, categoria: "electronica" }
// ];

// for(let i = 0; i < productos.length; i++){
//     if(!productos[i].stock){
//         console.log(`${productos[i].nombre} : Agotado`)
//     }else if(productos[i].categoria === "electronica" && productos[i].precio >= 500000){
//         console.log(`${productos[i].nombre} : Electrónica premium`)
//     }else if(productos[i].categoria === "electronica"){
//         console.log(`${productos[i].nombre}: Electrónica disponible`)
//     }else if(productos[i].precio >= 200000){
//         console.log(`${productos[i].nombre}: Producto caro`)
//     }else{
//         console.log(`${productos[i].nombre}: Producto estándar`)
//     }
// }

// const tareas = [
//     { titulo: "Enviar informe", estado: "pendiente", prioridad: "alta" },
//     { titulo: "Revisar mail", estado: "completada", prioridad: "baja" },
//     { titulo: "Llamar cliente", estado: "pendiente", prioridad: "media" },
//     { titulo: "Actualizar sistema", estado: "cancelada", prioridad: "alta" },
//     { titulo: "Reunión equipo", estado: "pendiente", prioridad: "alta" }
// ];
// for(let i = 0; i < tareas.length; i++){
//     if(tareas[i].estado === "cancelada"){
//         console.log(`${tareas[i].titulo} : Tarea cancelada`)
//     }else if(tareas[i].estado === "pendiente" && tareas[i].prioridad === "alta"){
//         console.log(`${tareas[i].titulo} : Pendiente urgente`)
//     }else if (tareas[i].estado === "pendiente"){
//         console.log(`${tareas[i].titulo} : Pendiente`)
//     }else {
//         console.log(`${tareas[i].titulo} : Tarea completada`)
//     }
// }

// const empleados = [
//     { nombre: "Dorian", cargo: "developer", horas: 45 },
//     { nombre: "Ana", cargo: "designer", horas: 20 },
//     { nombre: "Pedro", cargo: "manager", horas: 50 },
//     { nombre: "Carolina", cargo: "developer", horas: 40 },
//     { nombre: "Javier", cargo: "developer", horas: 10 }
// ];
// for(let i = 0; i < empleados.length; i++){
//     if(empleados[i].horas < 20){
//         console.log(`${empleados[i].nombre} : Jornada incompleta`)
//     }else if(empleados[i].cargo === "manager"){
//         console.log(`${empleados[i].nombre} : Manager`)
//     }else if(empleados[i].cargo === "developer" && empleados[i].horas >= 45){
//         console.log(`${empleados[i].nombre} : Developer senior`)
//     }else if(empleados[i].cargo === "developer"){
//         console.log(`${empleados[i].nombre} : Developer`)
//     }else{
//         console.log(`${empleados[i].nombre} : Empleado`)
//     }
// }
// const estudiantes = [
//     { nombre: "Dorian", nota: 6.5, asistencia: 95 },
//     { nombre: "Ana", nota: 3.2, asistencia: 80 },
//     { nombre: "Pedro", nota: 7.0, asistencia: 50 },
//     { nombre: "Carolina", nota: 4.5, asistencia: 60 },
//     { nombre: "Javier", nota: 6.0, asistencia: 90 }
// ];
// for(let i = 0; i < estudiantes.length; i++){
//     if(estudiantes[i].asistencia < 70){
//         console.log(`${estudiantes[i].nombre} : Reprobado por asistencia`)
//     }else if(estudiantes[i].nota < 4){
//         console.log(`${estudiantes[i].nombre} : Reprobado por nota`)
//     }else if(estudiantes[i].nota >= 6.5 && estudiantes[i].asistencia >= 90){
//         console.log(`${estudiantes[i].nombre} : Excelente`)
//     }else{
//         console.log(`${estudiantes[i].nombre} : Aprobado`)
//     }
// }
// const clientes = [
//     { nombre: "Dorian", edad: 25, compras: 15, esVip: false },
//     { nombre: "Ana", edad: 17, compras: 5, esVip: false },
//     { nombre: "Pedro", edad: 65, compras: 30, esVip: true },
//     { nombre: "Carolina", edad: 40, compras: 3, esVip: true },
//     { nombre: "Javier", edad: 30, compras: 12, esVip: false }
// ];
// for(let i = 0; i < clientes.length; i++){
//     if(clientes[i].edad < 18){
//         console.log(`${clientes[i].nombre} : Sin descuento (menor de edad)`)
//     }else if(clientes[i].esVip){
//         console.log(`${clientes[i].nombre} : Descuento VIP`)
//     }else if(clientes[i].compras >= 20){
//         console.log(`${clientes[i].nombre} : Descuento cliente frecuente`)
//     }else if(clientes[i].edad >= 65){
//         console.log(`${clientes[i].nombre} : Descuento adulto mayor`)
//     }else{
//         console.log(`${clientes[i].nombre} : Sin descuento`)
//     }
// }
// const clientes = [
//     { nombre: "Dorian", puntos: 1500, tipo: "regular" },
//     { nombre: "Ana", puntos: 5000, tipo: "premium" },
//     { nombre: "Pedro", puntos: 200, tipo: "regular" },
//     { nombre: "Carolina", puntos: 10000, tipo: "premium" },
//     { nombre: "Javier", puntos: 800, tipo: "regular" }
// ];
// for(let i = 0; i < clientes.length; i++){
//     if(clientes[i].tipo === "premium" && clientes[i].puntos >= 10000){
//         console.log(`${clientes[i].nombre} : Cliente premium platino`)
//     }else if(clientes[i].tipo === "premium"){
//          console.log(`${clientes[i].nombre} : Cliente premium`)
//     }else if(clientes[i].puntos >= 1000){
//         console.log(`${clientes[i].nombre} : Cliente frecuente`)
//     }
//     else if(clientes[i].puntos >= 500){
//         console.log(`${clientes[i].nombre} : Cliente básico`)
//     }else{
//         console.log(`${clientes[i].nombre} : Cliente nuevo`)   
//     }
// }
// const usuarios = [
//     { nombre: "Dorian", intentos: 2, bloqueado: false, rol: "admin" },
//     { nombre: "Ana", intentos: 5, bloqueado: true, rol: "usuario" },
//     { nombre: "Pedro", intentos: 0, bloqueado: false, rol: "moderador" },
//     { nombre: "Carolina", intentos: 4, bloqueado: false, rol: "usuario" },
//     { nombre: "Javier", intentos: 3, bloqueado: false, rol: "admin" }
// ];
// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i].bloqueado){
//         console.log(`${usuarios[i].nombre} : Cuenta bloqueada`)
//     }else if(usuarios[i].intentos >= 5){
//         console.log(`${usuarios[i].nombre} : Bloqueado autómatico`)
//     }else if(usuarios[i].rol === "admin"){
//         console.log(`${usuarios[i].nombre} : Bienvenida administradoro/a`)
//     }else if(usuarios[i].rol === "moderador"){
//         console.log(`${usuarios[i].nombre} : Bienvenida moderador/a`)
//     }else{
//         console.log(`${usuarios[i].nombre} : Bienvenida`)
//     }
// }
// const mascotas = [
//     { nombre: "Luna", especie: "perro", edad: 3, vacunas: true },
//     { nombre: "Michi", especie: "gato", edad: 1, vacunas: false },
//     { nombre: "Rocky", especie: "perro", edad: 10, vacunas: true },
//     { nombre: "Pelusa", especie: "gato", edad: 12, vacunas: true },
//     { nombre: "Nemo", especie: "pez", edad: 2, vacunas: false }
// ];
// for(let i = 0; i < mascotas.length; i++){
//     if(mascotas[i].especie === "pez"){
//         console.log(`${mascotas[i].nombre}: Pez sin control veterinario`)
//     }else if(!mascotas[i].vacunas){
//         console.log(`${mascotas[i].nombre}: Necesita vacunas urgente`)
//     }else if(mascotas[i].especie === "perro" && mascotas[i].edad >= 8){
//         console.log(`${mascotas[i].nombre}: Perro adulto mayor`)
//     }else if(mascotas[i].especie === "gato" && mascotas[i].edad >= 10){
//         console.log(`${mascotas[i].nombre}: Gato adulto mayor`)
//     }else if(mascotas[i].especie === "perro" ){
//         console.log(`${mascotas[i].nombre}: Perro sano`)
//     }else{
//         console.log(`${mascotas[i].nombre}: Gato sano`)
//     }
// }
const usuarios = [
    { nombre: "Dorian", edad: 25, rol: "admin", activo: true, saldo: 15000 },
    { nombre: "Ana", edad: 17, rol: "usuario", activo: true, saldo: 5000 },
    { nombre: "Pedro", edad: 40, rol: "moderador", activo: false, saldo: 0 },
    { nombre: "Carolina", edad: 30, rol: "usuario", activo: true, saldo: 200000 },
    { nombre: "Javier", edad: 65, rol: "usuario", activo: true, saldo: 800 },
    { nombre: "Lila", edad: 22, rol: "admin", activo: false, saldo: 10000 }
];
for(let i = 0; i < usuarios.length; i++){

    if(usuarios[i].edad < 18){
        console.log(`${usuarios[i].nombre}: Bloqueado por edad`);

    }else if(!usuarios[i].activo){
        console.log(`${usuarios[i].nombre}: Cuenta inactiva`);

    }else if(!usuarios[i].saldo){
        console.log(`${usuarios[i].nombre}: Sin saldo`);

    }else if(usuarios[i].rol === "admin"){
        console.log(`${usuarios[i].nombre}: Administradora activa`);

    }else if(usuarios[i].rol === "moderador"){
        console.log(`${usuarios[i].nombre}: Moderador activo`);

    }else if(usuarios[i].saldo >= 100000){
        console.log(`${usuarios[i].nombre}: Usuario premium`);

    }else{
        console.log(`${usuarios[i].nombre}: Usuario estándar`);
    }
}