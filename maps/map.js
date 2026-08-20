// const numeros = [1, 2, 3, 4, 5];
// const triples = numeros.map((numero) => numero * 3)
// console.log(triples)

// const precios = [1000, 2500, 3000, 500];
// const preciosConIVA = precios.map((precio) =>precio * 1.19);
// console.log(preciosConIVA);

// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 30 },
//     { nombre: "Pedro", edad: 40 }
// ];
// const nombres = usuarios.map((usuario) => usuario.nombre)
// console.log(nombres)

// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 30 },
//     { nombre: "Pedro", edad: 40 }
// ];
// const mensajes = usuarios.map(({nombre,edad}) => `${nombre} tiene ${edad} años`);
// console.log(mensajes); 

// const productos = [
//     { nombre: "Teclado", precio: 20000 },
//     { nombre: "Mouse", precio: 15000 },
//     { nombre: "Monitor", precio: 100000 }
// ];

// const productosConIVA = productos.map(({nombre, precio})=>({
//     nombre: nombre,
//     precioConIVA: precio * 1.19
// }))
// console.log(productosConIVA)

// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 15 },
//     { nombre: "Pedro", edad: 40 },
//     { nombre: "Carolina", edad: 12 }
// ];
// const resumen = usuarios.map(({nombre,edad}) => ({
//     nombre,
//     esMayor: edad >= 18
// }));
// console.log(resumen)

// const productos = [
//     { nombre: "Teclado", precio: 20000, stock: 5 },
//     { nombre: "Mouse", precio: 15000, stock: 0 },
//     { nombre: "Monitor", precio: 100000, stock: 3 },
//     { nombre: "Silla", precio: 50000, stock: 0 }
// ];
// const disponibilidad = productos.map(({nombre,stock}) =>({
//     nombre,
//     disponibilidad: stock > 0
// }))
// console.log(disponibilidad)

// const estudiantes = [
//     { nombre: "Dorian", nota: 6.5 },
//     { nombre: "Ana", nota: 3.5 },
//     { nombre: "Pedro", nota: 4.0 },
//     { nombre: "Carolina", nota: 6.9 }
// ];
// const resultados = estudiantes.map(({nombre, nota}) =>{
//     if(nota >=4){
//         return {nombre, estado:"Aprobado"};
//     }else{
//         return {nombre, estado:"Reprobado"}
//     }
// });
// console.log(resultados)

// const productos = [
//     { nombre: "Teclado", stock: 5 },
//     { nombre: "Mouse", stock: 0 },
//     { nombre: "Monitor", stock: 3 },
//     { nombre: "Silla", stock: 0 }
// ];
// const inventario = productos.map(({nombre, stock})=>({
//     nombre,
//     estado: stock > 0 ? "Disponible": "Agotado"
// }));
// console.log(inventario)

// const usuarios = [
//     { nombre: "Dorian", edad: 25, activo: true },
//     { nombre: "Ana", edad: 15, activo: true },
//     { nombre: "Pedro", edad: 40, activo: false },
//     { nombre: "Carolina", edad: 17, activo: true },
//     { nombre: "Javier", edad: 30, activo: false }
// ];
// const resultado = usuarios.map(({nombre, edad, activo}) =>{
//     if(edad < 18){
//         return {nombre, estado:"Bloqueado por edad"};
//     }else if(!activo){
//         return {nombre, estado: "Cuenta inactiva"}
//     }else{
//         return {nombre, estado: "Activo"}
//     }
// });
// console.log(resultado);

// const productos = [
//     { nombre: "Teclado", precio: 25000 },
//     { nombre: "Mouse", precio: 12000 },
//     { nombre: "Monitor", precio: 180000 },
//     { nombre: "Silla", precio: 60000 }
// ];
// const promociones = productos.map(({nombre, precio}) =>({
//     nombre,
//     precioDescuento : precio * 0.9
// }))
// console.log(promociones)

// const empleados = [
//     { nombre: "Dorian", cargo: "developer", sueldo: 800000 },
//     { nombre: "Ana", cargo: "designer", sueldo: 700000 },
//     { nombre: "Pedro", cargo: "manager", sueldo: 1500000 },
//     { nombre: "Carolina", cargo: "developer", sueldo: 950000 }
// ];
// const nomina = empleados.map(({nombre, sueldo}) =>({
//     nombre,
//     sueldoAnual: sueldo * 12
// }))
// console.log(nomina)

// const alumnos = [
//     { nombre: "Dorian", notas: [7, 6, 5] },
//     { nombre: "Ana", notas: [4, 5, 3] },
//     { nombre: "Pedro", notas: [6, 7, 7] },
//     { nombre: "Carolina", notas: [3, 4, 2] }
// ];
// const promedio = alumnos.map(({nombre, notas}) =>({
//     nombre,
//     promedio: (notas[0] + notas[1] + notas[2]) / 3
// }))
// console.log(promedio);

// const clientes = [
//     { nombre: "Dorian", compras: 3, esVip: false },
//     { nombre: "Ana", compras: 12, esVip: false },
//     { nombre: "Pedro", compras: 8, esVip: true },
//     { nombre: "Carolina", compras: 20, esVip: false }
// ];
// const resumen = clientes.map(({nombre, compras, esVip}) =>{
//     if(esVip){
//         return {nombre, categoria:"VIP"}
//     }else if(compras >= 10){
//          return {nombre, categoria:"Frecuente"}
//     }else{
//          return {nombre, categoria:"Estándar"}
//     }
// })
// console.log(resumen)

// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 4 },
//     { nombre: "Mouse", precio: 12000, stock: 0 },
//     { nombre: "Monitor", precio: 180000, stock: 2 },
//     { nombre: "Silla", precio: 60000, stock: 10 },
//     { nombre: "Notebook", precio: 900000, stock: 0 }
// ];
// const inventario = productos.map(({nombre, precio, stock})=>{
//     let precioFinal;

//     if(precio >= 100000 ){
//         precioFinal= precio * 0.85
//     }else{
//         precioFinal= precio * 0.95
//     }
//     let estado;

//     if(stock > 0){
//         estado = "Disponible"
//     }else{
//         estado = "Agotado"
//     }
//       return {nombre, precioFinal, estado}  
// })
// console.log(inventario)

// const usuarios = [
//     { nombre: "Dorian", edad: 25, activo: true, rol: "usuario" },
//     { nombre: "Ana", edad: 15, activo: true, rol: "usuario" },
//     { nombre: "Pedro", edad: 40, activo: false, rol: "moderador" },
//     { nombre: "Carolina", edad: 30, activo: true, rol: "admin" },
//     { nombre: "Javier", edad: 22, activo: true, rol: "moderador" }
// ];
// const resultado = usuarios.map(({nombre, edad, activo, rol })=>{
//     let estado;
//     if(edad < 18){  
//         estado = "Bloqueado por edad"
//     }else if(!activo){
//         estado = "Cuenta inactiva"
//     }else if( rol === "admin"){
//         estado = "Administradora"
//     }else if(rol === "moderador"){
//         estado = "Moderador"
//     }else{
//         estado = "Usuario"
//     }
//     return {nombre, estado}
// })
// console.log(resultado);

// const empleados = [
//     { nombre: "Dorian", cargo: "developer", sueldo: 900000, antiguedad: 5 },
//     { nombre: "Ana", cargo: "designer", sueldo: 700000, antiguedad: 2 },
//     { nombre: "Pedro", cargo: "manager", sueldo: 1500000, antiguedad: 8 },
//     { nombre: "Carolina", cargo: "developer", sueldo: 950000, antiguedad: 1 },
//     { nombre: "Javier", cargo: "developer", sueldo: 800000, antiguedad: 4 }
// ];
// const informe = empleados.map(({nombre, cargo, sueldo, antiguedad})=>{
//     let sueldoConBono;
    
//     if(antiguedad >= 5){
//        sueldoConBono = sueldo * 1.2 
//     }else if(antiguedad >= 3){
//         sueldoConBono = sueldo * 1.1 
//     }else{
//         sueldoConBono = sueldo
//     }
//     let categoria;
//     if(cargo  === "developer" && antiguedad >= 3){
//         categoria = "Senior"
//     }else if(cargo  === "developer" && antiguedad < 3){
//         categoria = "Junior"
//     }else{
//         categoria = "Otro"
//     }
//     return {nombre, sueldoConBono, categoria}
// })
// console.log(informe)

// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 4, categoria: "accesorios" },
//     { nombre: "Silla gamer", precio: 350000, stock: 2, categoria: "muebles" },
//     { nombre: "Mouse", precio: 12000, stock: 0, categoria: "accesorios" },
//     { nombre: "Monitor", precio: 180000, stock: 3, categoria: "electronica" },
//     { nombre: "Notebook", precio: 900000, stock: 0, categoria: "electronica" }
// ];
// const catalogo = productos.map(({nombre, precio, stock, categoria})=>{
//     let precioFinal
//     if(categoria === "electronica"){
//         precioFinal = precio * 0.85
//     }else if(categoria === "muebles" ){
//         precioFinal = precio * 0.90
//     }else{
//         precioFinal = precio
//     }
//     let disponibilidad
//     if(stock === 0){
//         disponibilidad = "Agotado"
//     }else if(stock <= 2){
//         disponibilidad = "Últimas unidades"
//     }else {
//         disponibilidad = "Disponible"
//     }
//     return {nombre, precioFinal, disponibilidad}
// })
// console.log(catalogo);

// const usuarios = [
//     { nombre: "Dorian", saldo: 15000 },
//     { nombre: "Ana", saldo: 0 },
//     { nombre: "Pedro", saldo: 200000 },
//     { nombre: "Carolina", saldo: 50000 },
//     { nombre: "Javier", saldo: 800 }
// ];
// const clasificacion = usuarios.map(({nombre, saldo})=>{
//     let nivel;
//     if(saldo >= 100000){
//         nivel = "Premium"
//     }else if(saldo >= 1000){
//         nivel = "Estándar"
//     }else{
//         nivel = "Básico"
//     }
//     return {nombre, nivel}
// })
// console.log(clasificacion);

// const empleados = [
//     { nombre: "Dorian", horas: 200, valorHora: 8000, tipo: "planta" },
//     { nombre: "Ana", horas: 160, valorHora: 6500, tipo: "honorarios" },
//     { nombre: "Pedro", horas: 180, valorHora: 12000, tipo: "planta" },
//     { nombre: "Carolina", horas: 100, valorHora: 15000, tipo: "honorarios" },
//     { nombre: "Javier", horas: 40, valorHora: 5000, tipo: "practicante" }
// ];
// const nomina = empleados.map(({nombre, horas, valorHora, tipo})=>{
    
//     const sueldoBruto = valorHora * horas;

//     let sueldoLiquido;
//     if(tipo === "planta"){
//         sueldoLiquido = sueldoBruto * 0.875
//     }else if(tipo === "honorarios"){
//         sueldoLiquido = sueldoBruto * 0.90
//     }else{
//         sueldoLiquido = sueldoBruto;
//     }
//     let categoria;
//     if(horas >= 160){
//         categoria = "Full-time";
//     }else{
//         categoria = "Part-time";
//     }
//     return{nombre, sueldoBruto, sueldoLiquido, categoria}
// })
// console.log(nomina);

// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 4, categoria: "accesorios" },
//     { nombre: "Silla gamer", precio: 350000, stock: 0, categoria: "muebles" },
//     { nombre: "Mouse", precio: 12000, stock: 15, categoria: "accesorios" },
//     { nombre: "Monitor", precio: 180000, stock: 1, categoria: "electronica" },
//     { nombre: "Notebook", precio: 900000, stock: 3, categoria: "electronica" },
//     { nombre: "Escritorio", precio: 250000, stock: 0, categoria: "muebles" }
// ];
// const catalogo = productos.map(({nombre, precio, stock, categoria}) =>{
//     let precioFinal;
//     if(categoria === "electronica"){
//         precioFinal = precio * 0.85;
//     }else if(categoria === "muebles"){
//         precioFinal = precio * 0.90;
//     }else{
//         precioFinal = precio;
//     }
//     let estadoStock;
//     if(stock === 0){
//         estadoStock = "Agotado";
//     }else if(stock <= 3){
//         estadoStock = "Bajo";
//     }else{
//         estadoStock = "Disponible";
//     }
//     let etiqueta;
//     if(precio >= 100000 && stock > 0){
//         etiqueta = "Oferta"
//     }else{
//         etiqueta = ""
//     }
//     return {nombre, precioFinal, estadoStock, etiqueta};
// })
// console.log(catalogo);

// const usuarios = [
//     { nombre: "Dorian", edad: 25, saldo: 15000, esVip: false },
//     { nombre: "Ana", edad: 17, saldo: 500, esVip: false },
//     { nombre: "Pedro", edad: 40, saldo: 200000, esVip: true },
//     { nombre: "Carolina", edad: 65, saldo: 800, esVip: false },
//     { nombre: "Javier", edad: 30, saldo: 50000, esVip: true }
// ];
// const resumen = usuarios.map(({nombre, edad, saldo, esVip })=>{
//     let estadoCuenta;
//     if(edad < 18){
//         estadoCuenta = "Bloqueado"
//     }else if(saldo === 0){
//         estadoCuenta = "Sin saldo"
//     }else{
//         estadoCuenta = "Activo"
//     }
//     let nivel;
//     if(esVip){
//         nivel = "VIP";
//     }else if(saldo >= 100000){
//         nivel = "Premium";
//     }else if(saldo >= 1000){
//         nivel= "Regular"
//     }else{
//         nivel = "Básico"
//     }
//     let descuento;
//     if(nivel === "VIP"){
//         descuento = 25;
//     }else if(nivel === "Premium"){
//         descuento = 15;
//     }else if(nivel === "Regular"){
//         descuento = 5;
//     }else{
//         descuento = 0;
//     }
//     return {nombre, estadoCuenta, nivel, descuento}
// })
// console.log(resumen);

// const pedidos = [
//     { cliente: "Dorian", productos: [10000, 25000, 5000], estado: "pendiente", esExpress: false },
//     { cliente: "Ana", productos: [50000, 150000], estado: "pagado", esExpress: true },
//     { cliente: "Pedro", productos: [8000], estado: "cancelado", esExpress: false },
//     { cliente: "Carolina", productos: [30000, 40000, 20000, 10000], estado: "pagado", esExpress: false },
//     { cliente: "Javier", productos: [500000, 300000], estado: "pendiente", esExpress: true }
// ];
// const informe = pedidos.map(({cliente, productos, estado, esExpress})=>{
//     let total = 0;
//     for(let i = 0; i < productos.length; i++){
//         total = total + productos[i];
//     }   
//     let envio;
//     if(esExpress){
//         envio = "Express (+5000)"
//     }else{
//         envio = "Estándar (gratis)";
//     }
//     let totalConEnvio;
//     if(esExpress){
//         totalConEnvio = total + 5000;
//     }else{
//         totalConEnvio = total;
//     }
//     let mensaje;
//     if(estado === "cancelado"){
//         mensaje = `${cliente}: Pedido cancelado`
//     }else if(estado === "pagado"){
//         mensaje = `${cliente}: Pedido confirmado`
//     }else{
//         mensaje = `${cliente}: Pendiente de pago`
//     }
//     return {cliente, total, envio, totalConEnvio, mensaje};
// })
// console.log(informe);

//****MAP CON FUNCIONES****

// function duplicarNumeros(numeros){
//     return numeros.map((numero) => numero * 2);
// }
// console.log(duplicarNumeros([1,2,3]));
// console.log(duplicarNumeros([10, 20, 30]));
// console.log(duplicarNumeros([100 ,200 ,300]));

// function aplicarIVA(precios){
//     return precios.map((precio) => Math.round(precio * 1.19));
// }
// console.log(aplicarIVA([1000, 2500, 3000]));  
// console.log(aplicarIVA([10000]));             
// console.log(aplicarIVA([]));                  

// function mostrarNombres(usuarios){
//     return usuarios.map(({nombre})=> nombre)
// }

// console.log(mostrarNombres([
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 30 },
//     { nombre: "Pedro", edad: 40 }
// ]));
// console.log(mostrarNombres([
//     { nombre: "Carolina", edad: 22 }
// ]));

// console.log(mostrarNombres([]));

// function crearSaludos(usuarios){
//     return usuarios.map(({nombre, ciudad})=>{
//        return `Hola ${nombre}, saludos desde ${ciudad}`
//     })
// }
// console.log(crearSaludos([
//     { nombre: "Dorian", ciudad: "Valparaíso" },
//     { nombre: "Ana", ciudad: "Santiago" }
// ]));

// function prepararProductos(productos){
//     return productos.map(({nombre, precio})=>{
//         return {nombre, precioConIVA: Math.round(precio * 1.19)}
//     })
// }
// console.log(prepararProductos([
//     { nombre: "Teclado", precio: 20000 },
//     { nombre: "Mouse", precio: 15000 }
// ]));

// function formatearUsuarios(usuarios){
//     return usuarios.map(({nombre, apellido})=>{
//         return { nombreCompleto: `${nombre} ${apellido}` }
//     })
// }
// console.log(formatearUsuarios([
//     { nombre: "Dorian", apellido: "Donoso" },
//     { nombre: "Ana", apellido: "Soto" }
// ]));

// function resumenEstudiantes(estudiantes){
//     let estado;
//     return estudiantes.map(({nombre, nota})=>{
//         if(nota >= 4){
//             estado = "Aprobado"
//         }else{
//             estado = "Reprobado"
//         }
//         return {nombre,estado}
//     })   
// }
// console.log(resumenEstudiantes([
//     { nombre: "Dorian", nota: 6.5 },
//     { nombre: "Ana", nota: 3.0 },
//     { nombre: "Pedro", nota: 4.0 }
// ]));

// function prepararProductos(productos){
//     return productos.map(({nombre, precio, stock})=>{
//         let precioConIVA;
//         const precioConIVA = Math.round(precio * 1.19)
//         let disponible;
//         const disponible = stock > 0;

//        return {nombre, precioConIVA, disponible}
//     })
// }
// console.log(prepararProductos([
//     { nombre: "Teclado", precio: 20000, stock: 5 },
//     { nombre: "Mouse", precio: 15000, stock: 0 },
//     { nombre: "Monitor", precio: 100000, stock: 3 }
// ]));

// function prepararPedidos(pedidos){
//     return pedidos.map(({ cliente, total, esExpress }) => {

//         // 1️⃣ Zona 1: decidir el texto de envío
//         let envio;
//         if(esExpress){
//             envio = "Express (+5000)";
//         }else{
//             envio = "Estándar (gratis)";
//         }

//         // 2️⃣ Zona 2: decidir el total con envío
//         let totalConEnvio;
//         if(esExpress){
//             totalConEnvio = total + 5000;
//         }else{
//             totalConEnvio = total;
//         }

//         // 3️⃣ Zona 3: retornar el objeto final
//         return { cliente, envio, totalConEnvio };
//     });
// }

// console.log(prepararPedidos([
//     { cliente: "Dorian", total: 25000, esExpress: false },
//     { cliente: "Ana", total: 40000, esExpress: true },
//     { cliente: "Pedro", total: 100000, esExpress: true }
// ]));

// function prepararReservas(reservas){
//     return reservas.map(({huesped, noches, precioNoche, esVip})=>{
//         let categoria;
//         if(esVip){
//             categoria = "Cliente VIP";
//         }else{
//             categoria = "Cliente regular"
//         }
//         let totalFinal;
//         if(esVip){
//             totalFinal = Math.round(noches * precioNoche * 0.9);
//         }else{
//             totalFinal = Math.round(noches * precioNoche);
//         }
//         return {huesped, categoria, totalFinal, esVip}
//     })
    
// }
// console.log(prepararReservas([
//     { huesped: "Dorian", noches: 3, precioNoche: 45000, esVip: false },
//     { huesped: "Ana", noches: 5, precioNoche: 60000, esVip: true },
//     { huesped: "Pedro", noches: 1, precioNoche: 30000, esVip: false }
// ]));

// function prepararEmpleados(empleados){
//     return empleados.map(({nombre, horas, valorHora, esGerente})=>{
//         let sueldoBase;
//         sueldoBase = Math.round(horas * valorHora);

//         let sueldoFinal;
//         if(esGerente){
//             sueldoFinal = sueldoBase + 300000;
//         }else{
//             sueldoFinal = sueldoBase;
//         }

//         let categoria;
//         if(esGerente){
//             categoria = "Gerente";
//         }else{
//             categoria = "Empleado"
//         }
//         return {nombre, sueldoBase, sueldoFinal, categoria}
//     })
// }
// console.log(prepararEmpleados([
//     { nombre: "Dorian", horas: 180, valorHora: 8000, esGerente: false },
//     { nombre: "Ana", horas: 160, valorHora: 10000, esGerente: true },
//     { nombre: "Pedro", horas: 200, valorHora: 6000, esGerente: false }
// ]));

// function prepararProductosPromo(productos) {
//     return productos.map(({nombre, precio, stock, categoria})=>{
//         let precioFinal;
//         if(categoria === "electronica"){
//             precioFinal = Math.round(precio * 0.85);
//         }else if(categoria === "muebles"){
//             precioFinal = Math.round(precio * 0.9);
//         }else{
//             precioFinal = precio;
//         }
//         let estado;
//         if(stock === 0){
//             estado = "Agotado";
//         }else if(stock > 2){
//              estado = "Disponible"
//         }else{
//             estado = "Últimas unidades";
//         }
//         let mensaje;
//         if(precioFinal < precio){
//             mensaje = `${nombre}: Producto en oferta`
//         }else{
//             mensaje = `${nombre}: Precio normal`
//         }

//         return {nombre, precioFinal, estado, mensaje}
//     })
// }
// console.log(prepararProductosPromo([
//     { nombre: "Teclado", precio: 25000, stock: 4, categoria: "otros" },
//     { nombre: "Silla gamer", precio: 350000, stock: 0, categoria: "muebles" },
//     { nombre: "Mouse", precio: 12000, stock: 2, categoria: "otros" },
//     { nombre: "Monitor", precio: 180000, stock: 1, categoria: "electronica" },
//     { nombre: "Notebook", precio: 900000, stock: 3, categoria: "electronica" }
// ]));

// function formatearContactos(contactos){
//     return contactos.map(({nombre, email})=>{
    
//      return `${nombre} (${email})`  
//     })  
// }
// console.log(formatearContactos([
//     { nombre: "Dorian", email: "dorian@correo.cl" },
//     { nombre: "Ana", email: "ana@correo.cl" }
// ]));

// function generarEtiquetas(productos){
//     return productos.map(({nombre, precio})=> `${nombre} - $${precio}`)
// }
// console.log(generarEtiquetas([
//     { nombre: "Teclado", precio: 25000 },
//     { nombre: "Mouse", precio: 12000 },
//     { nombre: "Monitor", precio: 180000 }
// ]));

// function generarBadges(usuarios){
//     return usuarios.map(({nombre, puntos, nivel})=> `${nombre} | ${nivel} | ${puntos} pts`);
// }
// console.log(generarBadges([
//     { nombre: "Dorian", puntos: 1500, nivel: "Oro" },
//     { nombre: "Ana", puntos: 800, nivel: "Plata" },
//     { nombre: "Pedro", puntos: 3200, nivel: "Platino" }
// ]));

// function generarSaludos(personas){
//     return personas.map(({nombre, edad})=>{
//         if(edad >= 18){
//             return `Hola ${nombre}, bienvenido/a` 
//         }else{
//             return `Hola ${nombre}, ¡eres muy joven!` 
//         }
//     })
// }
// console.log(generarSaludos([
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 15 },
//     { nombre: "Pedro", edad: 40 },
//     { nombre: "Carolina", edad: 12 }
// ]));

function mostrarProductos(productos){
    return productos.map(({nombre,precio,stock})=>{
        if(stock > 0){
            return `${nombre} - $${precio} - Disponible`;
        }else{
            return `${nombre} - ${precio} - Agotado`;
        }

    })
}
console.log(mostrarProductos([
    { nombre: "Teclado", precio: 25000, stock: 4 },
    { nombre: "Mouse", precio: 12000, stock: 0 },
    { nombre: "Monitor", precio: 180000, stock: 2 },
    { nombre: "Silla", precio: 60000, stock: 0 }
]));