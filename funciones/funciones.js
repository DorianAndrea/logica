/* function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Dorian");
saludar("Node");

function sumar(a, b){
    return a + b;

}
const resultado = sumar(10, 20);
console.log(resultado) */

//1 sumar
// function sumar (a, b){
//     return a + b;
// }
// const resultado = sumar(10,5);
// console.log(`El resultado de la suma es ${resultado}`);

// // 2 restar
// function restar (a,b){
//     return a - b;
// }
// const resultado1 = restar(10,5);
// console.log(`El resultado de la resta es ${resultado1}`);

// // 3 multiplicar
// function multiplicar(a,b){
//     return a * b;
// }
// const resultado3= multiplicar(10, 5);
// console.log(`El resultado de la multiplicación es ${resultado3}`);

// // 4 dividir
// function dividir (a,b) {
//     return a / b;
// } 
// const resultado4 = dividir(10,5);
// console.log(`El resultado de la división es ${resultado4}`);

// function saludar(){
//     console.log("Hola Dorian")
// }
// saludar()
// saludar()
// saludar()

// function saludar(nombre) {
//     console.log(`Hola ${nombre}, bienvenido/a`)
// }
// saludar("Dorian")
// saludar("Ana")
// saludar("Pedro")

// function presentarse(nombre, ciudad){
//     console.log(`Hola soy ${nombre} y vivo en ${ciudad}`)
// }
// presentarse("Dorian", "Valparaíso")
// presentarse("Ana", "Santiago")
// presentarse("Pedro", "Concepción")

// function sumar(a,b){
//     return a + b
// }
// const total = sumar(10,5)
// console.log(total);

// function esMayorDeEdad(edad){
//     if(edad >= 18){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(esMayorDeEdad(20));
// console.log(esMayorDeEdad(15));
// console.log(esMayorDeEdad(18));

// function saludar(usuario){
//     return `Hola ${usuario.nombre}, tienes ${usuario.edad} años`;
// }
// const mensaje = saludar({nombre:"Dorian", edad:25});
// console.log(mensaje)

// function verificarEdad({nombre,edad}){
//     if(edad < 18 ){
//         return `${nombre}: Menor de edad`
//     }else{
//         return `${nombre}: Mayor de edad`
//     }
// }
// console.log(verificarEdad({nombre:"Dorian", edad:25}))
// console.log(verificarEdad({nombre:"Ana", edad:15}))
// console.log(verificarEdad({nombre:"Pedro", edad:18}))

// function verificarUsuario({nombre,edad,activo,rol}){
//     if(edad < 18){
//         return `${nombre}: Usuario bloqueado por edad`;
//     }else if(!activo){
//         return `${nombre}: Cuenta inactiva`;
//     }else if(rol === "admin"){
//         return `${nombre}: Bienvenida administradora`;
//     }else if(rol === "moderador"){
//         return `${nombre}: Bienvenido modadeadora`;
//     }else{
//         return `${nombre}: Bienvenida`;
//     }
// }
// console.log(verificarUsuario({ nombre: "Dorian", edad: 25, activo: true, rol: "admin" }));
// console.log(verificarUsuario({ nombre: "Ana", edad: 17, activo: true, rol: "usuario" }));
// console.log(verificarUsuario({ nombre: "Pedro", edad: 40, activo: false, rol: "moderador" }));
// console.log(verificarUsuario({ nombre: "Carolina", edad: 30, activo: true, rol: "usuario" }));
// console.log(verificarUsuario({ nombre: "Javier", edad: 22, activo: true, rol: "moderador" }));

// function tieneAcceso({nombre, edad, activo}){
//     if(edad >= 18 && activo ){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(tieneAcceso({ nombre: "Dorian", edad: 25, activo: true }));   // true
// console.log(tieneAcceso({ nombre: "Ana", edad: 17, activo: true }));      // false
// console.log(tieneAcceso({ nombre: "Pedro", edad: 30, activo: false }));   // false
// console.log(tieneAcceso({ nombre: "Carolina", edad: 40, activo: true })); // true

// function calcularDescuento({nombre, edad, esVip, compras}){
//     if(edad < 18){
//         return 0;
//     }else if(esVip){
//         return 30
//     }else if(edad >= 65){
//         return 20
//     }else if(compras >= 10){
//         return 15
//     }else{
//         return 5
//     }
// }
// console.log(calcularDescuento({ nombre: "Dorian", edad: 25, esVip: false, compras: 12 }));  // 15
// console.log(calcularDescuento({ nombre: "Ana", edad: 17, esVip: true, compras: 5 }));       // 0
// console.log(calcularDescuento({ nombre: "Pedro", edad: 70, esVip: false, compras: 3 }));    // 20
// console.log(calcularDescuento({ nombre: "Carolina", edad: 30, esVip: true, compras: 3 }));  // 30
// console.log(calcularDescuento({ nombre: "Javier", edad: 20, esVip: false, compras: 4 }));   // 5

// function calcularPrecioFinal({nombre, precio, descuento}){
//     return precio * (1 - descuento / 100)
// }
// console.log(calcularPrecioFinal({ nombre: "Teclado", precio: 20000, descuento: 10 }));   // 18000
// console.log(calcularPrecioFinal({ nombre: "Mouse", precio: 15000, descuento: 0 }));      // 15000
// console.log(calcularPrecioFinal({ nombre: "Monitor", precio: 100000, descuento: 25 }));  // 75000
// console.log(calcularPrecioFinal({ nombre: "Silla", precio: 50000, descuento: 50 }));     // 25000

// function calcularPrecioFinal({nombre, precio, esVip}){
//     if(esVip){
//         return precio * 0.80
//     }else{
//         return precio * 0.95
//     }
// }
// console.log(calcularPrecioFinal({ nombre: "Teclado", precio: 20000, esVip: true }));  // 16000
// console.log(calcularPrecioFinal({ nombre: "Mouse", precio: 20000, esVip: false })); // 19000
// console.log(calcularPrecioFinal({ nombre: "Monitor", precio: 100000, esVip: true })); // 80000

// function duplicar(numero){
  
//     return numero * 2;
// }
// console.log(duplicar(5));   // 10
// console.log(duplicar(20));  // 40
// console.log(duplicar(100)); // 200

// function esPar(numero){
//     if(numero % 2){
//         return false
//     }else{
//         return true
//     }
// }
// console.log(esPar(4));   // true
// console.log(esPar(7));   // false
// console.log(esPar(10));  // true

// function crearSaludo({nombre, ciudad}){
//     return `Hola ${nombre}, saludos desde ${ciudad}`
// }
// console.log(crearSaludo({ nombre: "Dorian", ciudad: "Valparaíso" }));
// console.log(crearSaludo({ nombre: "Ana", ciudad: "Santiago" }));
// console.log(crearSaludo({ nombre: "Pedro", ciudad: "Concepción" }));

// function calcularIVA(precio){
//     return precio * 1.19
// }
// console.log(calcularIVA(10000));  // 11900
// console.log(calcularIVA(50000));  // 59500
// console.log(calcularIVA(100000)); // 119000

// function esMayorDeEdad({nombre, edad}){
//     if(edad >= 18){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(esMayorDeEdad({ nombre: "Dorian", edad: 25 })); // true
// console.log(esMayorDeEdad({ nombre: "Ana", edad: 15 }));    // false
// console.log(esMayorDeEdad({ nombre: "Pedro", edad: 18 }));  // true

// function aplicarDescuento(precio, descuento){
//     return precio * (1 - descuento / 100)
// }
// console.log(aplicarDescuento(20000, 10));   // 18000
// console.log(aplicarDescuento(100000, 25));  // 75000
// console.log(aplicarDescuento(50000, 50));   // 25000
// console.log(aplicarDescuento(10000, 0));    // 10000

// function clasificarEdad(edad){
//     if(edad < 18){
//         return "Menor"
//     }else if(edad < 65){
//         return "Adulto"
//     }else{
//         return "Adulto mayor"
//     }
// }
// console.log(clasificarEdad(10));  // Menor
// console.log(clasificarEdad(30));  // Adulto
// console.log(clasificarEdad(70));  // Adulto mayor

// function calcularCarrito(precios){
//     let total = 0;
    
//     for(let i = 0; i < precios.length; i++){
//         total = total + precios[i];
//     }
//     return total;
// }
// console.log(calcularCarrito([1000, 2000, 3000]));    // 6000
// console.log(calcularCarrito([500, 500, 500, 500]));  // 2000
// console.log(calcularCarrito([10000, 5000]));         // 15000
// console.log(calcularCarrito([]));                    // 0

// function contarAdultos(usuarios){
//     let cantidad = 0;
//     for(let i = 0; i < usuarios.length; i++){
//         if(usuarios[i].edad >= 18){
//             cantidad++;
//         }
//     }
//     return cantidad;
// }
// console.log(contarAdultos([
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 15 },
//     { nombre: "Pedro", edad: 40 }
// ])); // 2

// console.log(contarAdultos([
//     { nombre: "Carolina", edad: 12 },
//     { nombre: "Javier", edad: 17 }
// ])); // 0

// console.log(contarAdultos([
//     { nombre: "Luis", edad: 30 },
//     { nombre: "Maria", edad: 45 }
// ])); // 2

// function verificarAcceso(usuario){
//     if(usuario.edad < 18){
//         return `${usuario.nombre} : Bloqueado por edad`
//     }else if(!usuario.activo){
//          return `${usuario.nombre} : Cuenta inactiva`
//     }else if(usuario.rol === "admin"){
//         return `${usuario.nombre} : Bienvenida administradora`
//     }else if(usuario.rol === "moderador"){
//         return `${usuario.nombre} : Bienvenida moderadora`
//     }else{
//         return `${usuario.nombre} : Bienvenida`
//     }
// }
// console.log(verificarAcceso({ nombre: "Dorian", edad: 25, activo: true, rol: "admin" }));
// console.log(verificarAcceso({ nombre: "Ana", edad: 17, activo: true, rol: "usuario" }));
// console.log(verificarAcceso({ nombre: "Pedro", edad: 40, activo: false, rol: "moderador" }));
// console.log(verificarAcceso({ nombre: "Carolina", edad: 30, activo: true, rol: "usuario" }));
// console.log(verificarAcceso({ nombre: "Javier", edad: 22, activo: true, rol: "moderador" }));