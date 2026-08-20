//ejemplos 1
// const numeros = [1, 2, 3, 4, 5, 6];
// const pares = numeros.filter((n) => n % 2 === 0);
// console.log(pares);

//ejemplo 2
// const numeros = [5, 12, 8, 20, 3, 15];
// const mayores = numeros.filter((n) => n > 10);
// console.log(mayores);

//ejemplo 3
// const nombres = ["Ana", "Dorian", "Pedro", "Luis", "Carolina"];
// const largos = nombres.filter((nombre) => nombre.length > 4);
// console.log(largos);

//ejemplo 4 filtrar objetos por propiedad
// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 15 },
//     { nombre: "Pedro", edad: 40 }
// ];
// const adultos = usuarios.filter((u) => u.edad >= 18);
// console.log(adultos);

// ejemplo con destructuring
// let usuarios;
// const adultos = usuarios.filter(({ edad }) => edad >= 18);

//ejemplo filtrar con booleano
// const productos = [
//     { nombre: "Teclado", disponible: true },
//     { nombre: "Mouse", disponible: false },
//     { nombre: "Monitor", disponible: true }
// ];
// const disponibles = productos.filter(({ disponible }) => disponible);
// console.log(disponibles);

// ejercicio 1
// const numeros = [1, 5, 10, 15, 20, 25, 30];
// const mayores = numeros.filter(n => n > 10);

// console.log(mayores)

//ejercicio 2
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const pares = numeros.filter((numero) => numero % 2 === 0)
// console.log(pares)

//ejercicio 3
// const nombres = ["Ana", "Dorian", "Luis", "Pedro", "Carolina", "Eva"];
// const nombresLargos = nombres.filter((nombre) => nombre.length > 4);
// console.log(nombresLargos);

//ejercicio 4 objetos
// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 15 },
//     { nombre: "Pedro", edad: 40 },
//     { nombre: "Carolina", edad: 17 }
// ];
// const adultos = usuarios.filter(({edad}) => edad >= 18);
// console.log(adultos);

// ejercicio 5 objetos boleanos
// const productos = [
//     { nombre: "Teclado", stock: 5, disponible: true },
//     { nombre: "Mouse", stock: 0, disponible: false },
//     { nombre: "Monitor", stock: 2, disponible: true },
//     { nombre: "Silla", stock: 0, disponible: false }
// ];
// const productosDisponibles = productos.filter(({disponible}) => disponible)
// console.log(productosDisponibles);

// ejercicio 6 combinado con &&
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 5 },
//     { nombre: "Mouse", precio: 12000, stock: 0 },
//     { nombre: "Monitor", precio: 180000, stock: 2 },
//     { nombre: "Silla", precio: 60000, stock: 3 },
//     { nombre: "Notebook", precio: 900000, stock: 0 }
// ];
// const productosEnPromocion = productos.filter(({precio, stock}) => precio > 50000 && stock > 0);
// console.log(productosEnPromocion);

//ejercicio 7 combinado con ||
// const usuarios = [
//     { nombre: "Dorian", edad: 25, esAdmin: false },
//     { nombre: "Ana", edad: 17, esAdmin: true },
//     { nombre: "Pedro", edad: 15, esAdmin: false },
//     { nombre: "Carolina", edad: 40, esAdmin: false },
//     { nombre: "Javier", edad: 22, esAdmin: false }
// ];
// const usuariosPermitidos = usuarios.filter(({edad, esAdmin}) => edad >= 18 || esAdmin);
// console.log(usuariosPermitidos);

// ejercicio 8 con negación
// const usuarios = [
//     { nombre: "Dorian", edad: 25, activo: true },
//     { nombre: "Ana", edad: 30, activo: false },
//     { nombre: "Pedro", edad: 40, activo: true },
//     { nombre: "Carolina", edad: 22, activo: false },
//     { nombre: "Javier", edad: 35, activo: false }
// ];
// const usuariosInactivos = usuarios.filter(({activo}) => !activo);
// console.log(usuariosInactivos);

// ejercicio 9 rango con &&
// const empleados = [
//     { nombre: "Dorian", sueldo: 800000 },
//     { nombre: "Ana", sueldo: 1500000 },
//     { nombre: "Pedro", sueldo: 400000 },
//     { nombre: "Carolina", sueldo: 950000 },
//     { nombre: "Javier", sueldo: 1200000 }
// ];
// const empleadosClaseMedia = empleados.filter(({sueldo}) => sueldo >= 500000 && sueldo <= 1000000);
// console.log(empleadosClaseMedia);

//ejercicio 10 filtro con string exactos
// const productos = [
//     { nombre: "Teclado", categoria: "accesorios" },
//     { nombre: "Silla", categoria: "muebles" },
//     { nombre: "Mouse", categoria: "accesorios" },
//     { nombre: "Monitor", categoria: "electronica" },
//     { nombre: "Escritorio", categoria: "muebles" },
//     { nombre: "Notebook", categoria: "electronica" }
// ];
// const soloElectronica = productos.filter(({categoria}) => categoria === "electronica");
// console.log(soloElectronica);

//Filter con funciones 
// ejemplo 1 filtrar por mayores de edad 
// function obtenerAdultos(usuarios){
//     return usuarios.filter(({ edad }) => edad >= 18);
// }
// const adultos = obtenerAdultos([
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 15 }
// ]);

// console.log(adultos);

// ejemplo 2 filtrar productos por stock
// function obtenerDisponibles(productos){
//     return productos.filter(({ stock }) => stock > 0);
// }
// console.log(obtenerDisponibles([
//     { nombre: "Teclado", stock: 5 },
//     { nombre: "Mouse", stock: 0 }
// ]));

//ejemplo 3 filtrar por categoría

// ejercicio 1 con funciones
// function obtenerAprobados(estudiantes){
//    return estudiantes.filter(({nota}) => nota >= 4);
// }
// console.log(obtenerAprobados([
//     { nombre: "Dorian", nota: 6.5 },
//     { nombre: "Ana", nota: 3.2 },
//     { nombre: "Pedro", nota: 7.0 },
//     { nombre: "Carolina", nota: 3.8 }
// ]));

// ejercicio 2 
// function obtenerProductosCaros(productos){
//     return productos.filter(({precio}) => precio >= 100000)
// }
// console.log(obtenerProductosCaros([
//     { nombre: "Teclado", precio: 25000 },
//     { nombre: "Monitor", precio: 180000 },
//     { nombre: "Mouse", precio: 12000 },
//     { nombre: "Notebook", precio: 900000 }
// ]));

// ejercicio 3
// function obtenerUsuariosActivos(usuarios){
//     return usuarios.filter(({activo}) => activo)
// }
// console.log(obtenerUsuariosActivos([
//     { nombre: "Dorian", activo: true },
//     { nombre: "Ana", activo: false },
//     { nombre: "Pedro", activo: true },
//     { nombre: "Carolina", activo: false }
// ]));

// ejercicio 4 
// function obtenerUsuariosInactivos(usuarios){
//     return usuarios.filter(({activo}) => !activo);
// }
// console.log(obtenerUsuariosInactivos([
//     { nombre: "Dorian", activo: true },
//     { nombre: "Ana", activo: false },
//     { nombre: "Pedro", activo: true },
//     { nombre: "Carolina", activo: false }
// ]));

// ejercicio 5
// function obtenerPromociones(productos){
//     return productos.filter(({precio, stock})=> precio >= 50000 && stock > 0);
// }
// console.log(obtenerPromociones([
//     { nombre: "Teclado", precio: 25000, stock: 5 },
//     { nombre: "Mouse", precio: 12000, stock: 0 },
//     { nombre: "Monitor", precio: 180000, stock: 2 },
//     { nombre: "Silla", precio: 60000, stock: 3 },
//     { nombre: "Notebook", precio: 900000, stock: 0 }
// ]));

// ejercicio 6 
// function obtenerAccesibles(usuarios){
//     return usuarios.filter(({edad, esAdmin})=> edad >= 18 || esAdmin )
// }
// console.log(obtenerAccesibles([
//     { nombre: "Dorian", edad: 25, esAdmin: false },
//     { nombre: "Ana", edad: 15, esAdmin: true },
//     { nombre: "Pedro", edad: 12, esAdmin: false },
//     { nombre: "Carolina", edad: 40, esAdmin: false },
//     { nombre: "Javier", edad: 22, esAdmin: false }
// ]));

// ejercicio 7
// function obtenerNoCancelados(pedidos){
//     return pedidos.filter(({estado})=> estado !== "cancelado");
// }
// console.log(obtenerNoCancelados([
//     { cliente: "Dorian", estado: "pagado" },
//     { cliente: "Ana", estado: "cancelado" },
//     { cliente: "Pedro", estado: "pendiente" },
//     { cliente: "Carolina", estado: "cancelado" },
//     { cliente: "Javier", estado: "pagado" }
// ]));

// ejercicio 8 
// function obtenerClaseMedia(empleados){
//     return empleados.filter(({sueldo}) => sueldo >= 500000 && sueldo <= 1500000);
// }
// console.log(obtenerClaseMedia([
//     { nombre: "Dorian", sueldo: 800000 },
//     { nombre: "Ana", sueldo: 300000 },
//     { nombre: "Pedro", sueldo: 1200000 },
//     { nombre: "Carolina", sueldo: 2000000 },
//     { nombre: "Javier", sueldo: 500000 }
// ]));

// ejercicio 9 comparacion exacto con string
// function obtenerAdministradores(usuarios){
//     return usuarios.filter(({rol}) => rol === "admin")
// }
// console.log(obtenerAdministradores([
//     { nombre: "Dorian", rol: "admin" },
//     { nombre: "Ana", rol: "usuario" },
//     { nombre: "Pedro", rol: "moderador" },
//     { nombre: "Carolina", rol: "admin" },
//     { nombre: "Javier", rol: "usuario" }
// ]));

// ejercicio 10
// function obtenerMayoresDeEdad(personas){
//     return personas.filter(({edad})=>edad >= 18)
// }
// console.log(obtenerMayoresDeEdad([
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 17 },
//     { nombre: "Pedro", edad: 18 },
//     { nombre: "Carolina", edad: 12 },
//     { nombre: "Javier", edad: 30 }
// ]));

// ejercicio 11
// function obtenerClientesPremium(clientes){
//     return clientes.filter(({edad, saldo, activo})=> edad >= 18 && saldo >= 100000 && activo)
// }
// console.log(obtenerClientesPremium([
//     { nombre: "Dorian", edad: 25, saldo: 150000, activo: true },
//     { nombre: "Ana", edad: 17, saldo: 500000, activo: true },
//     { nombre: "Pedro", edad: 40, saldo: 80000, activo: true },
//     { nombre: "Carolina", edad: 30, saldo: 200000, activo: false },
//     { nombre: "Javier", edad: 22, saldo: 300000, activo: true },
//     { nombre: "Lila", edad: 45, saldo: 1000000, activo: true }
// ]));

// ejercicio 12
// function obtenerAccesoEspecial(usuarios){
//     return usuarios.filter(({activo, edad, esVip})=> activo && (edad >= 18 || esVip));
// }
// console.log(obtenerAccesoEspecial([
//     { nombre: "Dorian", edad: 25, esVip: false, activo: true },
//     { nombre: "Ana", edad: 15, esVip: true, activo: true },
//     { nombre: "Pedro", edad: 40, esVip: false, activo: false },
//     { nombre: "Carolina", edad: 12, esVip: false, activo: true },
//     { nombre: "Javier", edad: 22, esVip: true, activo: true },
//     { nombre: "Lila", edad: 17, esVip: true, activo: false }
// ]));

//ejercicio 13
// function obtenerPedidosEnviables(pedidos){
//     return pedidos.filter(({estado, esVip, total})=> estado === "pagado"  && (total >= 20000 || esVip));
// }
// console.log(obtenerPedidosEnviables([
//     { cliente: "Dorian", total: 15000, estado: "pagado", esVip: false },
//     { cliente: "Ana", total: 50000, estado: "pagado", esVip: false },
//     { cliente: "Pedro", total: 8000, estado: "pagado", esVip: true },
//     { cliente: "Carolina", total: 100000, estado: "pendiente", esVip: true },
//     { cliente: "Javier", total: 30000, estado: "pagado", esVip: false }
// ]));

// ejercicio 14 filter dentro de funcion rango + booleano
// function obtenerProductosDestacados(productos){
//     return productos.filter(({destacado, precio, stock})=> destacado && precio >= 20000 && precio <= 200000 && stock > 0);
// }
// console.log(obtenerProductosDestacados([
//     { nombre: "Teclado", precio: 25000, stock: 5, destacado: true },
//     { nombre: "Mouse", precio: 12000, stock: 10, destacado: true },
//     { nombre: "Monitor", precio: 180000, stock: 3, destacado: true },
//     { nombre: "Silla", precio: 60000, stock: 0, destacado: true },
//     { nombre: "Notebook", precio: 900000, stock: 2, destacado: true },
//     { nombre: "Audífonos", precio: 45000, stock: 8, destacado: false }
// ]));

// ***** map + filter
// ejercicio 1 
// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 15 },
//     { nombre: "Pedro", edad: 40 },
//     { nombre: "Carolina", edad: 17 },
//     { nombre: "Javier", edad: 30 }
// ];
// const nombresAdultos = usuarios
//     .filter(({edad})=> edad >= 18)
//     .map(({nombre})=> nombre)

//     console.log(nombresAdultos);

// ejercicio 2
// const productos = [
//     { nombre: "Teclado", precio: 20000, stock: 5 },
//     { nombre: "Mouse", precio: 15000, stock: 0 },
//     { nombre: "Monitor", precio: 100000, stock: 3 },
//     { nombre: "Silla", precio: 60000, stock: 0 },
//     { nombre: "Notebook", precio: 900000, stock: 2 }
// ];
// const preciosConIVA = productos
//     .filter(({stock}) => stock > 0)
//     .map(({precio})=> Math.round(precio * 1.19 ));
//     console.log(preciosConIVA);

//ejercicio 3 string formateado

// const usuarios = [
//     { nombre: "Dorian", edad: 25, activo: true },
//     { nombre: "Ana", edad: 15, activo: true },
//     { nombre: "Pedro", edad: 40, activo: false },
//     { nombre: "Carolina", edad: 30, activo: true },
//     { nombre: "Javier", edad: 22, activo: false }
// ];
// const saludos = usuarios
//     .filter(({activo})=> activo)
//     .map(({nombre, edad})=> `Hola ${nombre}, tienes ${edad} años`);
//     console.log(saludos);

// ejercicio 4 
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 5, categoria: "accesorios" },
//     { nombre: "Mouse", precio: 15000, stock: 0, categoria: "accesorios" },
//     { nombre: "Monitor", precio: 180000, stock: 3, categoria: "electronica" },
//     { nombre: "Silla", precio: 60000, stock: 2, categoria: "muebles" },
//     { nombre: "Notebook", precio: 900000, stock: 0, categoria: "electronica" }
// ];
// const catalogoDisponible = productos
//     .filter(({stock}) => stock > 0)
//     .map(({nombre, precio})=> ({
//         nombre,
//         precioConIVA: Math.round(precio * 1.19)
//     }))

//     console.log(catalogoDisponible);

// ejercicio 5
// const empleados = [
//     { nombre: "Dorian", sueldo: 800000, activo: true },
//     { nombre: "Ana", sueldo: 1500000, activo: false },
//     { nombre: "Pedro", sueldo: 400000, activo: true },
//     { nombre: "Carolina", sueldo: 1200000, activo: true },
//     { nombre: "Javier", sueldo: 950000, activo: false }
// ];
// const reajuste = empleados
//     .filter(({activo}) => activo)
//     .map(({nombre, sueldo})=> ({
//         nombre,
//         sueldoReajustado : Math.round(sueldo * 1.1)
//     }));
//     console.log(reajuste);

//ejercicio 6
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 5 },
//     { nombre: "Mouse", precio: 12000, stock: 0 },
//     { nombre: "Monitor", precio: 180000, stock: 3 },
//     { nombre: "Silla", precio: 60000, stock: 2 },
//     { nombre: "Notebook", precio: 900000, stock: 0 }
// ];
// const ofertas = productos
//     .filter(({stock, precio})=> stock > 0 && precio >= 50000)
//     .map(({nombre, precio})=>({
//         nombre,
//         precioOferta: Math.round(precio * 0.8)
//     }))
//     console.log(ofertas);

// const usuarios = [
//     { nombre: "Dorian", edad: 25, ciudad: "Valparaíso", activo: true },
//     { nombre: "Ana", edad: 15, ciudad: "Santiago", activo: true },
//     { nombre: "Pedro", edad: 40, ciudad: "Concepción", activo: false },
//     { nombre: "Carolina", edad: 30, ciudad: "La Serena", activo: true },
//     { nombre: "Javier", edad: 22, ciudad: "Temuco", activo: true }
// ];
// const tarjetas = usuarios  
//     .filter(({activo, edad}) => activo && edad >= 18)
//     .map(({nombre, edad, ciudad})=>(
//        `${nombre} (${edad} años) - ${ciudad}`
//     ))
// console.log(tarjetas);

// const pedidos = [
//     { cliente: "Dorian", monto: 25000, estado: "pagado" },
//     { cliente: "Ana", monto: 80000, estado: "pendiente" },
//     { cliente: "Pedro", monto: 150000, estado: "pagado" },
//     { cliente: "Carolina", monto: 45000, estado: "pagado" },
//     { cliente: "Javier", monto: 200000, estado: "cancelado" }
// ];
// const boletas = pedidos
//     .filter(({estado})=> estado === "pagado")
//     .map(({cliente, monto})=>({
//         cliente,
//         montoConIVA: Math.round(monto * 1.19)
//     }))
//     console.log(boletas);

//ejercicio 9 
// const usuarios = [
//     { nombre: "Dorian", edad: 25, saldo: 150000, activo: true },
//     { nombre: "Ana", edad: 17, saldo: 500000, activo: true },
//     { nombre: "Pedro", edad: 40, saldo: 50000, activo: false },
//     { nombre: "Carolina", edad: 30, saldo: 200000, activo: true },
//     { nombre: "Javier", edad: 22, saldo: 80000, activo: true }
// ];
// const clientesPremium = usuarios
//     .filter(({edad,activo,saldo})=> edad >= 18 && activo && saldo >= 100000)
//     .map(({nombre,saldo}) =>({
//         nombre,
//         mensaje:`${nombre} es cliente premium con $${saldo}`
//     }))
//     console.log(clientesPremium);

// ejerrcicio 10
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 5 },
//     { nombre: "Mouse", precio: 12000, stock: 0 },
//     { nombre: "Monitor", precio: 100000, stock: 3 }
// ];
// const disponibles = productos
//     .filter(({stock})=> stock > 0)
//     .map(({nombre})=> nombre)

//     console.log(disponibles);

//ejercicio 11
// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 16 },
//     { nombre: "Pedro", edad: 30 }
// ];
// const saludos = usuarios
//     .filter(({edad}) => edad >= 18)
//     .map(({nombre})=>(
//         `Hola ${nombre}`
//     ))
//     console.log(saludos);

//ejercicio 12
// const productos = [
//     { nombre: "Teclado", precio: 20000, stock: 4 },
//     { nombre: "Mouse", precio: 15000, stock: 0 },
//     { nombre: "Monitor", precio: 100000, stock: 2 }
// ];
// const catalogo = productos
//     .filter(({stock}) =>stock > 0)
//     .map(({nombre, precio})=>({
//         nombre,
//         precioFinal : Math.round(precio * 0.9)
//     }))
//     console.log(catalogo);

//ejercicio 13
// const empleados = [
//     { nombre: "Dorian", cargo: "developer", sueldo: 900000, antiguedad: 5, activo: true },
//     { nombre: "Ana", cargo: "designer", sueldo: 700000, antiguedad: 2, activo: true },
//     { nombre: "Pedro", cargo: "developer", sueldo: 1200000, antiguedad: 8, activo: false },
//     { nombre: "Carolina", cargo: "developer", sueldo: 950000, antiguedad: 3, activo: true },
//     { nombre: "Javier", cargo: "manager", sueldo: 1500000, antiguedad: 6, activo: true },
//     { nombre: "Lila", cargo: "developer", sueldo: 800000, antiguedad: 1, activo: true }
// ];
// const reporteDevelopers = empleados
//     .filter(({cargo, activo, antiguedad})=>cargo ==="developer" && activo && antiguedad >= 3)
//     .map(({nombre, sueldo, antiguedad})=> {
//         const sueldoConBono = Math.round(sueldo * 1.15);
//         const categoria = antiguedad >=5 ? "Senior" : "Semi-senior";

//         const mensaje =  `${nombre} es ${categoria} con sueldo $${sueldoConBono}`;
//         return {nombre, sueldoConBono, categoria, mensaje}
//     });
//     console.log(reporteDevelopers);


// 14
// const clientes = [
//     { nombre: "Dorian", plan: "premium", consumo: 80000, activo: true },
//     { nombre: "Ana", plan: "basico", consumo: 30000, activo: true },
//     { nombre: "Pedro", plan: "premium", consumo: 120000, activo: false },
//     { nombre: "Carolina", plan: "premium", consumo: 50000, activo: true },
//     { nombre: "Javier", plan: "premium", consumo: 200000, activo: true },
//     { nombre: "Lila", plan: "basico", consumo: 90000, activo: true }
// ];
// const factura = clientes
//     .filter(({plan, activo})=> plan === "premium" && activo)
//     .map(({nombre, consumo})=>{
//         const total = Math.round(consumo * 1.19)
//         const categoria = consumo >= 100000 ? "Alto consumo " : "Consumo normal"
//         const mensaje = `${nombre} tiene ${categoria} y debe pagar $${total}`
//         return {nombre, total, categoria, mensaje}
//     })
//     console.log(factura);

// 15
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 8, categoria: "gaming" },
//     { nombre: "Mouse", precio: 15000, stock: 0, categoria: "gaming" },
//     { nombre: "Monitor", precio: 180000, stock: 3, categoria: "oficina" },
//     { nombre: "Silla", precio: 90000, stock: 12, categoria: "gaming" },
//     { nombre: "Webcam", precio: 40000, stock: 2, categoria: "oficina" },
//     { nombre: "Notebook", precio: 900000, stock: 0, categoria: "gaming" }
// ];
// const catalogoGaming = productos
//     .filter(({categoria, stock})=>categoria === "gaming" && stock > 0)
//     .map(({nombre, precio, stock})=>{
//         const precioFinal = Math.round(precio * 0.8);
//         const disponibilidad = stock >= 10 ? "Mucho stock" : "Poco stock"
//         const mensaje = `${nombre}: ${disponibilidad} - Precio oferta $${precioFinal}`
//         return {nombre, precioFinal, disponibilidad, mensaje}
//     })
//     console.log(catalogoGaming);

// 16
// const empleados = [
//     { nombre: "Dorian", cargo: "developer", sueldo: 900000, horas: 180, activo: true },
//     { nombre: "Ana", cargo: "developer", sueldo: 700000, horas: 90, activo: true },
//     { nombre: "Pedro", cargo: "designer", sueldo: 800000, horas: 160, activo: true },
//     { nombre: "Carolina", cargo: "developer", sueldo: 1200000, horas: 200, activo: false },
//     { nombre: "Javier", cargo: "developer", sueldo: 950000, horas: 160, activo: true },
//     { nombre: "Lila", cargo: "developer", sueldo: 1100000, horas: 45, activo: true }
// ];
// const reporteFinal = empleados
//     .filter(({cargo, activo, horas})=> cargo === "developer" && activo && horas >= 160)
//     .map(({nombre, sueldo}) =>{
//         const sueldoBase = sueldo;
//         const bono = sueldo >= 1000000 ? Math.round(sueldo * 0.15) : Math.round(sueldo * 0.10);
//         const sueldoTotal = sueldoBase + bono
//         const mensaje = `${nombre} recibe un sueldo total de $${sueldoTotal} (bono incluido: $${bono})`;
//         return {nombre, sueldoBase, bono, sueldoTotal, mensaje};
//     })
//     console.log(reporteFinal);

// TEST MAP O FILTER, FILTER + MAP
// 1. 
// const usuarios = [
//     { nombre: "Dorian", edad: 25, activo: true },
//     { nombre: "Ana", edad: 16, activo: true },
//     { nombre: "Pedro", edad: 40, activo: false },
//     { nombre: "Carolina", edad: 30, activo: true }
// ];
// const nombresActivos = usuarios
//     .filter(({edad, activo})=> activo && edad >= 18)
//     .map(({nombre}) => nombre)
//     console.log(nombresActivos);

//2
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 5 },
//     { nombre: "Mouse", precio: 12000, stock: 0 },
//     { nombre: "Monitor", precio: 180000, stock: 3 },
//     { nombre: "Silla", precio: 60000, stock: 0 }
// ];
// const catalogo = productos
//     .filter(({stock}) => stock > 0)
//     .map(({nombre, precio}) =>{
//         const precioConIVA = Math.round(precio * 1.19);
//         return {nombre, precioConIVA}
//     })
//     console.log(catalogo);

// 3
// const empleados = [
//     { nombre: "Dorian", cargo: "developer", sueldo: 900000, activo: true },
//     { nombre: "Ana", cargo: "designer", sueldo: 700000, activo: true },
//     { nombre: "Pedro", cargo: "developer", sueldo: 1200000, activo: false },
//     { nombre: "Carolina", cargo: "developer", sueldo: 800000, activo: true }
// ];
// const reporte = empleados
//     .filter(({cargo,activo}) => cargo === "developer" && activo)
//     .map(({nombre, sueldo})=>{
//         const sueldoConAumento = Math.round(sueldo * 1.1);
//         const categoria = sueldo >= 850000 ? "Alto" : "Estándar"
//         const mensaje = `${nombre} es ${categoria} y ganará $${sueldoConAumento}`;
//         return {nombre, sueldoConAumento, categoria, mensaje}; 
//     })
//     console.log(reporte);

// reto senior 

// const ventas = [
//     { vendedor: "Dorian", monto: 500000, mes: "enero", cerrada: true },
//     { vendedor: "Ana", monto: 200000, mes: "enero", cerrada: false },
//     { vendedor: "Pedro", monto: 800000, mes: "enero", cerrada: true },
//     { vendedor: "Carolina", monto: 350000, mes: "enero", cerrada: true }
// ];
// const comisiones = ventas
//     .filter(({cerrada}) => cerrada)
//     .map(({vendedor,monto }) =>{
//         const comision = monto >= 600000 ? Math.round(monto * 0.08) : Math.round(monto * 0.05);
//         const mensaje = `${vendedor} recibe una comisión de $${comision}`
//         return {vendedor, comision, mensaje};
//     })
//     console.log(comisiones);

//2
// const estudiantes = [
//     { nombre: "Dorian", notas: [7, 6, 5] },
//     { nombre: "Ana", notas: [3, 4, 2] },
//     { nombre: "Pedro", notas: [6, 7, 7] },
//     { nombre: "Lila", notas: [2, 3, 3] }
// ];
// const aprobado = estudiantes
//     .filter(({notas}) => {
//         const promedio = ((notas[0] + notas[1] + notas[2]) / 3);
//         return promedio >= 4;
//     })
//     .map(({nombre, notas}) =>{
//         const promedio = Math.round(((notas[0] + notas[1] + notas[2]) / 3) * 10) / 10;
//         return {nombre, promedio, estado: "Aprobado"};
//     })
//     console.log(aprobado)

//3
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 10, categoria: "gaming" },
//     { nombre: "Mouse", precio: 12000, stock: 0, categoria: "gaming" },
//     { nombre: "Silla", precio: 90000, stock: 3, categoria: "oficina" },
//     { nombre: "Monitor", precio: 200000, stock: 5, categoria: "gaming" }
// ];
// const catalogoGaming = productos
//     .filter(({stock, categoria}) => stock > 0 && categoria === "gaming")
//     .map(({nombre, precio, stock}) =>{
//         const precioFinal = precio >= 100000 ? Math.round(precio * 0.85) : Math.round(precio * 0.95);
//         const etiqueta = stock <= 5 ? "Últimas unidades" : "Disponible";
//         return {nombre, precioFinal, etiqueta};
//     })
//     console.log(catalogoGaming);

//4
// const cuentas = [
//     { titular: "Dorian", saldo: 1500000, tipo: "premium", activa: true },
//     { titular: "Ana", saldo: 50000, tipo: "basica", activa: true },
//     { titular: "Pedro", saldo: 800000, tipo: "premium", activa: false },
//     { titular: "Carolina", saldo: 2000000, tipo: "premium", activa: true }
// ];
// const reportesPremium = cuentas
//     .filter(({tipo, activa}) => tipo === "premium" && activa)
//     .map(({titular, saldo})=>{
//         const interes = Math.round(saldo * 0.03);
//         const saldoFinal = saldo + interes;
//         const mensaje = `${titular} tendrá $${saldoFinal} tras el interés`;
//         return {titular, interes, saldoFinal, mensaje};
//     })
//     console.log(reportesPremium);

// 5
// const empleados = [
//     { nombre: "Dorian", sueldo: 900000, antiguedad: 6, cargo: "developer" },
//     { nombre: "Ana", sueldo: 700000, antiguedad: 2, cargo: "developer" },
//     { nombre: "Pedro", sueldo: 1500000, antiguedad: 10, cargo: "manager" },
//     { nombre: "Lila", sueldo: 1000000, antiguedad: 5, cargo: "developer" }
// ];
// const bonos = empleados
//     .filter(({cargo, antiguedad}) =>cargo === "developer" && antiguedad >=5)
//     .map(({nombre, antiguedad, sueldo})=>{
//         const bono = antiguedad * 100000;
//         const sueldoTotal = sueldo + bono;
//         const nivel = antiguedad >= 8 ? "Senior" : "Semi-senior"
//         return {nombre, bono, sueldoTotal, nivel}
//     })
//     console.log(bonos);

// 6
// const pedidos = [
//     { cliente: "Dorian", items: [10000, 25000, 5000], estado: "pagado" },
//     { cliente: "Ana", items: [50000], estado: "pendiente" },
//     { cliente: "Pedro", items: [30000, 40000], estado: "pagado" },
//     { cliente: "Carolina", items: [8000, 2000], estado: "pagado" }
// ];
// const boletas = pedidos
//     .filter(({estado}) =>estado === "pagado")
//     .map(({cliente,items})=>{
//         let subTotal = 0;
//         for(let i = 0 ; i < items.length; i++){
//             subTotal = subTotal + items[i]
//         }
//         const iva = Math.round(subTotal * 0.19);
//         const total = subTotal + iva;
//         const envioGratis = total >= 50000 ? true : false;
//         return {cliente, subTotal, iva, total, envioGratis};
//     })
//     console.log(boletas);

// 7
// const usuarios = [
//     { nombre: "Dorian", edad: 25, puntos: 1500, esVip: false },
//     { nombre: "Ana", edad: 17, puntos: 3000, esVip: true },
//     { nombre: "Pedro", edad: 40, puntos: 500, esVip: false },
//     { nombre: "Carolina", edad: 30, puntos: 5000, esVip: true }
// ];
// const beneficios = usuarios
//     .filter(({edad}) => edad >= 18)
//     .map(({nombre, puntos, esVip}) =>{
//         const nivel = puntos >= 5000 ? "Diamante" : puntos >= 1000 ? "Oro" : "Plata"
//         const descuento = esVip ? 30 : 10;
//         const mensaje = `${nombre} es nivel ${nivel} con ${descuento}% de descuento`;
//         return {nombre, nivel, descuento, mensaje}
//     })
//     console.log(beneficios);

// 8
// const cursos = [
//     { titulo: "JavaScript", inscritos: 120, precio: 50000, activo: true },
//     { titulo: "Python", inscritos: 40, precio: 60000, activo: true },
//     { titulo: "Java", inscritos: 200, precio: 45000, activo: false },
//     { titulo: "Node.js", inscritos: 80, precio: 70000, activo: true }
// ];
// const cursosPopulares = cursos
//     .filter(({activo, inscritos}) => activo && inscritos >= 50)
//     .map(({titulo, inscritos, precio})=>{
//         const ingresos = inscritos * precio;
//         const popularidad = inscritos >= 100 ? "Alta" : "Media";
//         const mensaje = `${titulo} generó $${ingresos} con popularidad ${popularidad}`;
//         return {titulo, ingresos, popularidad, mensaje};
//     })
//     console.log(cursosPopulares);

//9
// const vehiculos = [
//     { modelo: "Corolla", precio: 15000000, año: 2020, disponible: true },
//     { modelo: "Civic", precio: 18000000, año: 2018, disponible: false },
//     { modelo: "Mazda3", precio: 20000000, año: 2022, disponible: true },
//     { modelo: "Yaris", precio: 12000000, año: 2019, disponible: true }
// ];
// const catalogoVenta = vehiculos
//     .filter(({disponible, año})=> disponible && año >= 2020)
//     .map(({modelo, precio, año})=>{
//         const precioConDescuento = Math.round(precio * 0.9);
//         const antiguedad = 2025 - año;
//         const mensaje = `${modelo} (${antiguedad} años) a $${precioConDescuento}`;
//         return {modelo, precioConDescuento, antiguedad, mensaje};
//     })
//     console.log(catalogoVenta);

//10
const clientes = [
    { nombre: "Dorian", compras: [50000, 30000, 20000], plan: "premium", activo: true },
    { nombre: "Ana", compras: [10000], plan: "basico", activo: true },
    { nombre: "Pedro", compras: [80000, 120000], plan: "premium", activo: false },
    { nombre: "Carolina", compras: [40000, 60000], plan: "premium", activo: true }
];
const reporteFinal = clientes
    .filter(({plan, activo}) => plan === "premium" && activo)
    .map(({nombre, compras})=>{
        let totalGastado = 0;
        for (let i = 0; i < compras.length; i++){
            totalGastado = totalGastado + compras[i];
        } 
        const categoria = totalGastado >= 100000 ? "VIP" : "Regular";
        const descuento = categoria === "VIP" ? 20 : 5;
        const ahorro = Math.round(totalGastado * descuento / 100);
        const mensaje = `${nombre} (${categoria}) ahorró $${ahorro}`
        return {nombre, totalGastado, categoria, descuento, ahorro, mensaje};
    })
    console.log(reporteFinal);