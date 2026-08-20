//1
// function obtenerSaludos(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//            resolve("Hola Dorian") 
//         }, 1000);
//     });
// }
// async function main() {
//     const saludo = await obtenerSaludos();
//     console.log(saludo)
// }
// main()

//const { cargo } = require("async");

// 2
// function obtenerNombre() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Dorian");
//         }, 1000);
//     });
// }

// function obtenerEdad() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(25);
//         }, 1000);
//     });
// }
// async function main() {
//     const nombre = await obtenerNombre();
//     const edad = await obtenerEdad();
//     console.log(`${nombre} tiene ${edad} años`)
// }
// main()

//3
// function obtenerPrecio() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(50000);
//         }, 1000);
//     });
// }

// async function main() {
//     const precio = await obtenerPrecio();
//     const precioConIVA = precio * 1.19;
//     console.log(`El precio con IVA es ${precioConIVA}`)
        
// }
// main();

// 4
// function obtenerUsuario() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ nombre: "Dorian", edad: 25, ciudad: "Valparaíso" });
//         }, 1000);
//     });
// }
// async function main() {
//     const usuario = await obtenerUsuario();
//     console.log(`${usuario.nombre} tiene ${usuario.edad} años y vive en ${usuario.ciudad}`);
// }
// main()

// try catch 
// function obtenerDatos() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Error: no se pudo conectar");
//         }, 1000);
//     });
// }

// async function main() {
//     try {
//         const datos = await obtenerDatos();
//         console.log(datos);
//     } catch (error) {
//         console.log("Ocurrio un problema", error);
//     }
// }
// main();

// 6
// function obtenerPago() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = Math.random() > 0.5;   // 50% de probabilidad
//             if (exito) {
//                 resolve("Pago procesado con éxito");
//             } else {
//                 reject("Error: pago rechazado");
//             }
//         }, 1000);
//     });
// }

// async function main() {
//     try {
//         const pago = await obtenerPago();
//         console.log(`✅ ${pago}`)
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

// 7
// function obtenerNombre() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Dorian"), 1000);
//     });
// }

// function obtenerEmpresa() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Accenture"), 1000);
//     });
// }
// async function main() {
//     try {
//         const nombre = await obtenerNombre();
//         const empresa = await obtenerEmpresa();
//         console.log(`${nombre} trabaja en ${empresa}`)
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

//8
// function obtenerProducto() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ nombre: "Notebook", precio: 800000, stock: 5 });
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const producto = await obtenerProducto();
//         const precioConIVA = Math.round(producto.precio * 1.19);
//         console.log(`${producto.nombre} cuesta $${precioConIVA} con IVA`);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

// 9 array + map con async await
// function obtenerUsuarios() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Dorian", edad: 25 },
//                 { nombre: "Ana", edad: 30 },
//                 { nombre: "Pedro", edad: 40 }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const usuarios = await obtenerUsuarios();
//         const nombres = usuarios.map(({ nombre })=> nombre);
//         console.log(nombres);
//     } catch (error) {
//          console.log(`❌ ${error}`)
//     }
// }
// main();

// 10 async/await + filter + map
// function obtenerProductos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Teclado", precio: 25000, stock: 5 },
//                 { nombre: "Mouse", precio: 12000, stock: 0 },
//                 { nombre: "Monitor", precio: 180000, stock: 3 },
//                 { nombre: "Silla", precio: 60000, stock: 0 }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const productos = await obtenerProductos();
//         const producto = productos.filter(({ stock }) => stock > 0)
//         const nombres  = producto.map(({ nombre })=> nombre)
//         console.log(nombres);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()
// // segunda forma mejor de hacerlo 
// const productos = await obtenerProductos();
// const nombres = productos
//     .filter(({ stock }) => stock > 0)
//     .map(({ nombre }) => nombre);
// console.log(nombres);

// 11 — async/await + filter + reduce
// function obtenerVentas() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { producto: "Teclado", monto: 25000, pagada: true },
//                 { producto: "Mouse", monto: 12000, pagada: false },
//                 { producto: "Monitor", monto: 180000, pagada: true },
//                 { producto: "Silla", monto: 60000, pagada: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const ventas = await obtenerVentas();
//         const pagadas = ventas.filter(({ pagada }) => pagada)
//                               .reduce((acc,{monto}) => acc + monto, 0)
//         console.log(`Total recaudado: $${pagadas}`)
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

//12 — async/await + map con cálculo
// function obtenerProductos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Teclado", precio: 20000 },
//                 { nombre: "Mouse", precio: 15000 },
//                 { nombre: "Monitor", precio: 100000 }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const productos = await obtenerProductos();
//         const nuevos = productos.map(({nombre, precio}) => ({
//             nombre,
//             precioConIVA: Math.round(precio * 1.19)
//         }))
//         console.log(nuevos);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

// 13 — async/await + filter + map + objeto nuevo
// function obtenerEmpleados() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Dorian", sueldo: 800000, activo: true },
//                 { nombre: "Ana", sueldo: 600000, activo: false },
//                 { nombre: "Pedro", sueldo: 900000, activo: true },
//                 { nombre: "Carolina", sueldo: 1200000, activo: true }
//             ]);
//         }, 1000);
//     });
// }

// async function main() {
//     try {
//         const empleados = await obtenerEmpleados();
//         const nuevos = empleados.filter(({ activo}) => activo)
//                                 .map(({nombre, sueldo}) =>({
//                                     nombre,
//                                     sueldoConAumento: Math.round(sueldo * 1.2)
//                                 })) 
//         console.log(nuevos);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

// 14 — async/await + filter + reduce (total)
// function obtenerPedidos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { cliente: "Dorian", total: 30000, estado: "pagado" },
//                 { cliente: "Ana", total: 50000, estado: "pendiente" },
//                 { cliente: "Pedro", total: 80000, estado: "pagado" },
//                 { cliente: "Carolina", total: 120000, estado: "pagado" }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const pedidos = await obtenerPedidos();
//         const pagados = pedidos.filter(({estado})=> estado === "pagado")
//                                .reduce((acc,{total}) => acc + total, 0)
//         console.log(`Total: $${pagados}`);
//     } catch (error) {
//          console.log(`❌ ${error}`)
//     }
// }
// main();

// 15 — async/await + find
// function obtenerUsuarios() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, nombre: "Dorian", edad: 25 },
//                 { id: 2, nombre: "Ana", edad: 30 },
//                 { id: 3, nombre: "Pedro", edad: 40 }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const usuarios = await obtenerUsuarios();
//          const usuario = usuarios.find(({ id }) => id === 2)
//         console.log(`Encontrado : ${usuario.nombre}`);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

// 16 — async/await + find + validar si existe
// function obtenerUsuarios() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, nombre: "Dorian" },
//                 { id: 2, nombre: "Ana" },
//                 { id: 3, nombre: "Pedro" }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const usuarios = await obtenerUsuarios();
//         const usuario = usuarios.find(({ id }) => id === 99);
//             if(usuario){
//                 console.log(`Encontrado ${usuario.nombre}`)
//             }else{
//                 console.log("Usuario no encontrado")
//             }
//     } catch (error) {
//          console.log(`❌ ${error}`)
//     }
// }
// main();

// 17 — async/await + filter + map + reduce
// function obtenerVentas() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { producto: "Teclado", precio: 20000, cantidad: 3, pagada: true },
//                 { producto: "Mouse", precio: 15000, cantidad: 2, pagada: false },
//                 { producto: "Monitor", precio: 100000, cantidad: 1, pagada: true },
//                 { producto: "Silla", precio: 50000, cantidad: 4, pagada: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const ventas = await obtenerVentas();
//         const pagadas = ventas.filter(({pagada}) => pagada)
//                             .map(({precio, cantidad}) => Math.round(precio * cantidad))
//                             .reduce((acc, total) => acc + total, 0)
//         console.log(`Total pagado: $${pagadas}`)
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

// 18 — async/await + filter + find
// function obtenerProductos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Teclado", precio: 25000, stock: 0, categoria: "gaming" },
//                 { nombre: "Mouse", precio: 12000, stock: 5, categoria: "gaming" },
//                 { nombre: "Monitor", precio: 180000, stock: 3, categoria: "gaming" },
//                 { nombre: "Silla", precio: 60000, stock: 2, categoria: "oficina" }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const productos = await obtenerProductos();
//         const producto = productos.filter(({categoria, stock}) => categoria === "gaming" && stock > 0)
//                                 .find(({precio})=> precio > 100000)
//                                 if(producto){
//                                     console.log(`Producto: ${producto.nombre}`)
//                                 }else{
//                                     console.log("No hay productos")
//                                 }
        
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

//19 — async/await + reduce (promedio)
// function obtenerEstudiantes() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Dorian", nota: 6.5 },
//                 { nombre: "Ana", nota: 4.0 },
//                 { nombre: "Pedro", nota: 7.0 },
//                 { nombre: "Carolina", nota: 5.5 }
//             ]);
//         }, 1000);
//     });
// }

// async function main() {
//     try {
//         const estudientes = await obtenerEstudiantes();
//         const suma = 
//               estudiantes.reduce((acc,{nota}) => acc + nota, 0);
//         const promedio = suma / estudiantes.length;
// console.log(`El promedio del curso: ${promedio}`);
        
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

// 20 — async/await + map + reduce
// function obtenerCarrito() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { producto: "Teclado", precio: 20000, cantidad: 2 },
//                 { producto: "Mouse", precio: 15000, cantidad: 3 },
//                 { producto: "Monitor", precio: 100000, cantidad: 1 }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const carrito = await obtenerCarrito();
//         // paso 1: subtotales con map
//         const subtotales = carrito.map(({precio, cantidad}) => precio * cantidad);
//         console.log(`Subtotales ${subtotales}`);
//         //Paso 2: sumar con reduce
//         const total = subtotales.reduce((acc, subtotal)=> acc + subtotal, 0);
//         console.log(`Total: $${total}`);  
//         // paso 3 Aplicar IVA
//         const totalConIVA = Math.round(total * 1.19);
//         console.log(`Total con IVA: $${totalConIVA}`)     
//     } catch (error) {
//          console.log(`❌ ${error}`)
//     }
// }
// main()

// 21 — async/await + filter + reduce
// function obtenerGastos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { concepto: "Arriendo", monto: 400000, tipo: "fijo" },
//                 { concepto: "Comida", monto: 150000, tipo: "variable" },
//                 { concepto: "Internet", monto: 30000, tipo: "fijo" },
//                 { concepto: "Salidas", monto: 80000, tipo: "variable" }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const gastos = await obtenerGastos();
//         const gastosFijos = gastos.filter(({ tipo })=> tipo === "fijo");
//         const totalFijos = gastosFijos.reduce((acc, {monto})=> acc + monto, 0);
//         console.log(`Gastos fijos: $${totalFijos}`)

//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

// 22 — async/await + filter + map (nombres descriptivos)
// function obtenerEmpleados() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Dorian", sueldo: 800000, departamento: "TI" },
//                 { nombre: "Ana", sueldo: 600000, departamento: "Ventas" },
//                 { nombre: "Pedro", sueldo: 900000, departamento: "TI" },
//                 { nombre: "Carolina", sueldo: 700000, departamento: "TI" }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const empleados = await obtenerEmpleados();
//         const empleadosFiltrados = empleados.filter(({departamento}) => departamento === "TI");
//         const empleadosTi = empleadosFiltrados.map(({nombre, sueldo}) =>{
//             const sueldoConBono = Math.round(sueldo * 1.15);
//             return{nombre, sueldoConBono}
//         })
//         console.log(empleadosTi);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

// 23 — async/await + find + validar
// function obtenerUsuarios() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, nombre: "Dorian", rol: "admin" },
//                 { id: 2, nombre: "Ana", rol: "usuario" },
//                 { id: 3, nombre: "Pedro", rol: "moderador" }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const usuarios = await obtenerUsuarios();
//         const usuarioModerador = usuarios.find(({rol}) => rol === "moderador");
//         if(usuarioModerador){
//             console.log(`Moderador: ${usuarioModerador.nombre}`);
//         }else{
//             console.log("No hay moderador")
//         }
//     } catch (error) {
//          console.log(`❌ ${error}`)
//     }
// }
// main();

// 24 — async/await + filter + map + reduce
// function obtenerPedidos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { cliente: "Dorian", precio: 20000, cantidad: 3, pagado: true },
//                 { cliente: "Ana", precio: 15000, cantidad: 2, pagado: false },
//                 { cliente: "Pedro", precio: 50000, cantidad: 1, pagado: true },
//                 { cliente: "Carolina", precio: 30000, cantidad: 4, pagado: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         // 1 Almaceno obtenerPedidos en pedidos
//         const pedidos = await obtenerPedidos();
//         //filtro solo los pagados
//         const pedidosPagados = pedidos.filter(({pagado}) => pagado)
//         //uso map para que de los pedidos pagados salga el subtotal 
//         const subtotalPagados = pedidosPagados.map(({precio, cantidad})=>{
//             const subtotal = precio * cantidad;    
//             return subtotal        
//         })
//         // sumo los subtotales para obtener el total
//         const total = subtotalPagados.reduce((acc, subtotal) => acc + subtotal, 0)
//         // imprimo el valor
//         console.log(`Total : $${total}`)
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

//25 — async/await + filter + map + reduce (con condición)
// function obtenerEmpleados() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Dorian", sueldo: 800000, cargo: "developer", activo: true },
//                 { nombre: "Ana", sueldo: 600000, cargo: "designer", activo: true },
//                 { nombre: "Pedro", sueldo: 900000, cargo: "developer", activo: false },
//                 { nombre: "Carolina", sueldo: 1000000, cargo: "developer", activo: true },
//                 { nombre: "Javier", sueldo: 700000, cargo: "developer", activo: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const empleados = await obtenerEmpleados();
//         const empleadosFiltrados = empleados.filter(({cargo, activo}) => cargo === "developer" && activo);
//         const sueldoEmpleados = empleadosFiltrados.map(({sueldo}) => {
//             const totalSueldo = Math.round(sueldo * 1.1);
//             return totalSueldo;
//         });
//         const sumarSueldos = sueldoEmpleados.reduce((acc, totalSueldo) => acc + totalSueldo, 0);
//         console.log(`Planilla developers: $${sumarSueldos}`);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

// 26 — async/await + find + validar
// function obtenerProductos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, nombre: "Teclado", precio: 25000, stock: 0 },
//                 { id: 2, nombre: "Mouse", precio: 12000, stock: 5 },
//                 { id: 3, nombre: "Monitor", precio: 180000, stock: 3 }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const productos = await obtenerProductos();
//         const productoId = productos.find(({ id })=> id === 2);
//             if(productoId){
//                 console.log(`${productoId.nombre} cuesta $${productoId.precio}`)
//             }else{
//                 console.log("Producto no encontrado")
//             }
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

//27 — async/await + map + filter
// function obtenerProductos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Teclado", precio: 20000 },
//                 { nombre: "Mouse", precio: 12000 },
//                 { nombre: "Monitor", precio: 150000 },
//                 { nombre: "Silla", precio: 80000 }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const productos = await obtenerProductos();
//         const productosMap = productos.map(({nombre, precio})=>{
//             const precioConIVA = Math.round(precio * 1.19)
//             return {nombre, precioConIVA}
//         })
//         const productosFiltrados = productosMap.filter(({precioConIVA}) => precioConIVA > 50000)
//         console.log(productosFiltrados);
//     } catch (error) {
//        console.log(`❌ ${error}`) 
//     }
// }
// main();

// 28 — async/await + filter + map + reduce (combo completo)
// function obtenerVentas() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { vendedor: "Dorian", monto: 100000, cerrada: true },
//                 { vendedor: "Ana", monto: 50000, cerrada: false },
//                 { vendedor: "Pedro", monto: 200000, cerrada: true },
//                 { vendedor: "Carolina", monto: 80000, cerrada: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const ventas = await obtenerVentas();
//         const ventasCerradas = ventas.filter(({cerrada}) => cerrada);
//         const ventasComision = ventasCerradas.map(({monto}) =>{
//             const montoComision = monto * 0.05;
//             return montoComision;
//         })
//         const sumaComision = ventasComision.reduce((acc, montoComision) => acc + montoComision, 0);
//         console.log(`Total comisiones: $${sumaComision}`);

//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

//29 — async/await + find + cálculo
// function obtenerProductos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, nombre: "Teclado", precio: 25000 },
//                 { id: 2, nombre: "Mouse", precio: 12000 },
//                 { id: 3, nombre: "Monitor", precio: 180000 }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const productos = await obtenerProductos();
//         const encontrarProducto = productos.find(({ id }) => id === 3)
//         if(encontrarProducto){
//             const precioConIVA = Math.round(encontrarProducto.precio * 1.19);
//             console.log(`${encontrarProducto.nombre}: $${precioConIVA}`) 
//         }else{
//             console.log("No encontrado");
//         }
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

//30 — async/await + filter + map + reduce 
// function obtenerCarritos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { cliente: "Dorian", precio: 20000, cantidad: 3, pagado: true },
//                 { cliente: "Ana", precio: 15000, cantidad: 2, pagado: false },
//                 { cliente: "Pedro", precio: 50000, cantidad: 2, pagado: true },
//                 { cliente: "Carolina", precio: 30000, cantidad: 1, pagado: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const carritos = await obtenerCarritos();
//         const carritosPagados = carritos.filter(({pagado}) => pagado);
//         const carritoPrecio = carritosPagados.map(({precio, cantidad}) =>{
//             const subtotal = precio * cantidad;
//             return subtotal;
//         })
//         const sumaSubtotales = carritoPrecio.reduce((acc, subtotal)=> acc + subtotal, 0);
//         const sumaConIVA = Math.round(sumaSubtotales * 1.19);
//         console.log(`Total facturado con IVA: $${sumaConIVA}`);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

// ***** Ejercicio 1: NIVEL SENIOR *****

// function obtenerEmpleados() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Dorian", sueldo: 800000, cargo: "developer", antiguedad: 6, activo: true },
//                 { nombre: "Ana", sueldo: 600000, cargo: "designer", antiguedad: 3, activo: true },
//                 { nombre: "Pedro", sueldo: 1200000, cargo: "developer", antiguedad: 10, activo: false },
//                 { nombre: "Carolina", sueldo: 900000, cargo: "developer", antiguedad: 5, activo: true },
//                 { nombre: "Javier", sueldo: 700000, cargo: "developer", antiguedad: 2, activo: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const empleados = await obtenerEmpleados();
//         const empleadosFiltrados = empleados.filter(({cargo, activo, antiguedad}) => cargo ==="developer" && activo && antiguedad >= 5);
//         const sueldoEmpleados = empleadosFiltrados.map(({sueldo,antiguedad})=>{
//             const sueldoConBono = antiguedad >= 6
//                 ? Math.round(sueldo * 1.2)
//                 : Math.round(sueldo * 1.1)
//             return sueldoConBono;
//         })
//         const sumaBonos = sueldoEmpleados.reduce((acc, sueldoConBono) => acc + sueldoConBono, 0);
//         console.log(`Total plantilla $${sumaBonos}`)
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

//2 
// function obtenerProductos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Teclado", precio: 25000, stock: 10, categoria: "gaming" },
//                 { nombre: "Mouse", precio: 15000, stock: 0, categoria: "gaming" },
//                 { nombre: "Monitor", precio: 180000, stock: 5, categoria: "oficina" },
//                 { nombre: "Silla", precio: 90000, stock: 3, categoria: "gaming" },
//                 { nombre: "Notebook", precio: 900000, stock: 2, categoria: "gaming" }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const productos = await obtenerProductos();
//         const productosFiltrados = productos.filter(({categoria, stock}) => categoria === "gaming" && stock > 0);
//         const productosPrecioFinal = productosFiltrados.map(({nombre, precio})=>{
//             let precioConBono  
//             if(precio >= 100000){
//                 precioConBono = Math.round(precio * 0.85);
//             }else{
//                 precioConBono = Math.round(precio * 0.95);
//             }
//            return {nombre, precioConBono}
//         })
//          console.log(productosPrecioFinal);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main()

// 3
// function obtenerPedidos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { cliente: "Dorian", items: [20000, 30000], estado: "pagado" },
//                 { cliente: "Ana", items: [50000, 10000], estado: "pendiente" },
//                 { cliente: "Pedro", items: [80000, 40000, 30000], estado: "pagado" },
//                 { cliente: "Carolina", items: [15000], estado: "pagado" }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const pedidos = await obtenerPedidos();
//         //console.log("1. pedidos:", pedidos); 

//         const pedidosPagados = pedidos.filter(({estado}) => estado === "pagado");
//         //console.log("2. pedidosPagados:", pedidosPagados);

//         const totalPagados = pedidosPagados.map(({cliente, items}) =>{
//             let total = 0;
//             for(let i = 0; i < items.length; i++){
//                 total += items[i]
//             }
//             return {cliente, total};
//         })
//         console.log(totalPagados);
//     } catch (error) {
//          console.log(`❌ ${error}`)
//     }
// }
// main();

// 4
// function obtenerClientes() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Dorian", compras: 5, montoTotal: 150000, vip: false },
//                 { nombre: "Ana", compras: 12, montoTotal: 300000, vip: true },
//                 { nombre: "Pedro", compras: 3, montoTotal: 80000, vip: false },
//                 { nombre: "Carolina", compras: 20, montoTotal: 500000, vip: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const clientes = await obtenerClientes();
//         //console.log(clientes);
//         const soloVip = clientes.filter(({vip}) => vip);
//         //console.log(soloVip)
//         const descuentoCliente = soloVip.map(({nombre, montoTotal }) => {
//             let descuentoAplicado;
//             if(montoTotal >= 400000){
//                 descuentoAplicado = Math.round(montoTotal * 0.25);
//             }else{
//                 descuentoAplicado = Math.round(montoTotal * 0.15);
//             }
//             return {nombre, descuentoAplicado}
            
//         })
//         console.log(descuentoCliente);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

// // como hacerlo con ternario
// const descuentoAplicado = montoTotal >= 400000
//     ? Math.round(montoTotal * 0.25)
//     : Math.round(montoTotal * 0.15);

//5
// function obtenerCursos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { titulo: "JavaScript", precio: 50000, inscritos: 120, activo: true },
//                 { titulo: "Python", precio: 60000, inscritos: 80, activo: false },
//                 { titulo: "Java", precio: 45000, inscritos: 200, activo: true },
//                 { titulo: "Go", precio: 70000, inscritos: 40, activo: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const cursos = await obtenerCursos();
//         const cursosActivos = cursos.filter(({activo, inscritos}) => activo && inscritos >= 50);
//         const precioCursos = cursosActivos.map(({precio, inscritos}) => {
//             const ingresoTotal = precio * inscritos;
//             return ingresoTotal;
//         })
//         const sumaIngresos = precioCursos.reduce((acc, ingresoTotal) => acc + ingresoTotal, 0);
//         console.log(`Ingresos totales: $${sumaIngresos}`);
//     } catch (error) {
//          console.log(`❌ ${error}`)
//     }
// }
// main();

//6
// function obtenerEmpleados() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Dorian", ventas: 8, sueldoBase: 500000, activo: true },
//                 { nombre: "Ana", ventas: 15, sueldoBase: 600000, activo: true },
//                 { nombre: "Pedro", ventas: 3, sueldoBase: 550000, activo: false },
//                 { nombre: "Carolina", ventas: 20, sueldoBase: 700000, activo: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const empleados = await obtenerEmpleados();
//         const filtrarActivos = empleados.filter(({ activo }) => activo);
//         const totalSueldos = filtrarActivos.map(({ nombre, sueldoBase, ventas }) =>{
//             let sueldoFinal;
//             sueldoFinal = sueldoBase + (ventas * 10000);
//             //console.log(sueldoFinal);
           
//             return {nombre, sueldoFinal};
            
//         })
//          console.log(totalSueldos);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

//7
// function obtenerUsuarios() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, nombre: "Dorian", puntos: 1500, activo: true },
//                 { id: 2, nombre: "Ana", puntos: 3000, activo: false },
//                 { id: 3, nombre: "Pedro", puntos: 800, activo: true },
//                 { id: 4, nombre: "Carolina", puntos: 5000, activo: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const usuarios = await obtenerUsuarios();
//         const usuariosActivos = usuarios.filter(({ activo }) => activo);
//         const encontrarUsuarios = usuariosActivos.find(({ puntos }) => puntos >= 2000);
      
//         if(encontrarUsuarios){
//             console.log(`${encontrarUsuarios.nombre} tiene ${encontrarUsuarios.puntos} puntos`)
//            }else{
//             console.log("Ninguno califica")
//            }    
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

//8
// function obtenerProductos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Teclado", precio: 25000, cantidad: 4, categoria: "gaming" },
//                 { nombre: "Mouse", precio: 15000, cantidad: 10, categoria: "gaming" },
//                 { nombre: "Monitor", precio: 180000, cantidad: 2, categoria: "oficina" },
//                 { nombre: "Silla", precio: 90000, cantidad: 5, categoria: "gaming" }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const productos = await obtenerProductos();
//         const filtrarProductos = productos.filter(({categoria}) => categoria === "gaming");
//         const totalInventario = filtrarProductos.map(({precio, cantidad})=>{
//             const valorTotal = precio * cantidad;
//             return valorTotal;
//         }) 
//         const sumaProductos = totalInventario.reduce((acc, valorTotal) => acc + valorTotal, 0);
//         //console.log(sumaProductos)
//         const aplicarIVA = Math.round(sumaProductos * 1.19);
//         console.log(`Valor inventario gaming: $${aplicarIVA}`);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

// 9
// function obtenerVendedores() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Dorian", ventas: [50000, 30000, 20000], meta: 80000 },
//                 { nombre: "Ana", ventas: [40000, 10000], meta: 60000 },
//                 { nombre: "Pedro", ventas: [100000, 50000], meta: 100000 },
//                 { nombre: "Carolina", ventas: [20000, 20000], meta: 50000 }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const vendedores = await obtenerVendedores();
//         const ventasVendedores = vendedores.map(({nombre, ventas, meta}) => {
//             let totalVentas = 0;
//             for(let i = 0; i < ventas.length; i++){
//                 totalVentas += ventas[i];
//             }
//             const cumplioMeta = totalVentas >= meta;
//             return {nombre, totalVentas, cumplioMeta};
//         })
//          console.log(ventasVendedores);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

//10
// function obtenerCuentas() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { titular: "Dorian", movimientos: [100000, -30000, 50000], tipo: "ahorro" },
//                 { titular: "Ana", movimientos: [-20000, -10000], tipo: "corriente" },
//                 { titular: "Pedro", movimientos: [200000, -50000, -20000], tipo: "ahorro" },
//                 { titular: "Carolina", movimientos: [80000, 20000], tipo: "ahorro" }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const cuentas = await obtenerCuentas();
//         const ahorroCuentas = cuentas.filter(({ tipo }) => tipo === "ahorro");
//         const sumarMovimientos = ahorroCuentas.map(({titular, movimientos}) =>{
//             let saldos = 0;
//             for(let i = 0; i < movimientos.length; i++){
//                 saldos += movimientos[i];
//             }
//             const saldoPositivo = saldos > 0;
//             return {titular, saldos, saldoPositivo};
//         })
//         console.log(sumarMovimientos);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

// 11
// function obtenerPedidos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { cliente: "Dorian", productos: [20000, 30000], envioExpress: true, pagado: true },
//                 { cliente: "Ana", productos: [50000], envioExpress: false, pagado: false },
//                 { cliente: "Pedro", productos: [40000, 10000, 10000], envioExpress: true, pagado: true },
//                 { cliente: "Carolina", productos: [15000, 15000], envioExpress: false, pagado: true }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const pedidos = await obtenerPedidos();
//         const pedidosPagados = pedidos.filter(({pagado}) => pagado);
//         const totalPedidos = pedidosPagados.map(({cliente, productos, envioExpress}) =>{
//             let totalFinal = 0;
//             for(let i = 0; i < productos.length; i++){
//                 totalFinal += productos[i];
//             }
//             if(envioExpress){
//                  totalFinal += 5000;
//             }
//             return {cliente, totalFinal};
           
//         })
//         console.log(totalPedidos);
         
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

//12
// function obtenerEstudiantes() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { nombre: "Dorian", notas: [7, 6, 5], asistencia: 90 },
//                 { nombre: "Ana", notas: [4, 3, 2], asistencia: 85 },
//                 { nombre: "Pedro", notas: [6, 7, 7], asistencia: 60 },
//                 { nombre: "Carolina", notas: [5, 5, 6], asistencia: 95 }
//             ]);
//         }, 1000);
//     });
// }
// async function main() {
//     try {
//         const estudiantes = await obtenerEstudiantes();
//         const asistenciaEst = estudiantes.filter(({asistencia}) => asistencia >= 80);
//         // console.log(asistenciaEst)
//         const promedioEst = asistenciaEst.map(({ nombre, notas}) =>{
//             let promedio = 0;
//             for(let i = 0; i < notas.length; i++){
//                 promedio += notas[i];
//             }
//             promedio = Math.round(promedio / notas.length * 10) / 10;
//             const aprobado = promedio >=4;
//             return {nombre, promedio, aprobado}
            
//         })
//         console.log(promedioEst);
//     } catch (error) {
//         console.log(`❌ ${error}`)
//     }
// }
// main();

// 13
// async function obtenerProyectos() {
//     return [
//         {
//             nombre: "API Pagos",
//             activo: true,
//             tareas: [
//                 { horas: 10, completada: true },
//                 { horas: 5, completada: true },
//                 { horas: 8, completada: false }
//             ]
//         },
//         {
//             nombre: "E-commerce",
//             activo: true,
//             tareas: [
//                 { horas: 12, completada: true },
//                 { horas: 7, completada: true }
//             ]
//         },
//         {
//             nombre: "CRM",
//             activo: false,
//             tareas: [
//                 { horas: 20, completada: true }
//             ]
//         }
//     ];
// }

// async function main() {
//     try {
//         const proyectos = await obtenerProyectos();
//         const proyectosActivos = proyectos.filter(({activo}) => activo)
//         const resultado = proyectosActivos.map(({ nombre, tareas }) => {
//             const horasTotales = tareas.reduce((acc, {horas})=> acc + horas, 0);

//             const categoria = horasTotales > 20
//                             ? "GRANDE"
//                             : "PEQUEÑO";
//         return {
//             nombre,
//             horasTotales,
//             categoria
//          };
// });
// console.log(resultado);
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

//39 
// async function obtenerClientes() {
//     return [
//         {
//             nombre: "Dorian",
//             activo: true,
//             compras: [
//                 { monto: 12000 },
//                 { monto: 8000 },
//                 { monto: 5000 }
//             ]
//         },
//         {
//             nombre: "Carolina",
//             activo: true,
//             compras: [
//                 { monto: 4000 },
//                 { monto: 3000 }
//             ]
//         },
//         {
//             nombre: "Pedro",
//             activo: false,
//             compras: [
//                 { monto: 20000 }
//             ]
//         }
//     ];
// }
// async function main() {
//     try {
//         const clientes = await obtenerClientes();
//         const clientesActivos = clientes.filter(({activo}) => activo);
//         //console.log(clientesActivos);
//         const sumarCompras = clientesActivos.map(({nombre, compras}) =>{
//             const montoTotal = compras.reduce((acc, {monto})=> acc + monto, 0);
//             //console.log(montoTotal);
//             const nivel = montoTotal >= 10000
//             ? "VIP"
//             : "Normal"
//              return {nombre, montoTotal, nivel}
//         })
//         console.log(sumarCompras);
       
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

// 40

// async function obtenerVendedores() {
//     return [
//         {
//             nombre: "Ana",
//             activo: true,
//             ventas: [
//                 { monto: 10000 },
//                 { monto: 12000 },
//                 { monto: 8000 }
//             ],
//             meta: 25000
//         },
//         {
//             nombre: "Luis",
//             activo: true,
//             ventas: [
//                 { monto: 5000 },
//                 { monto: 4000 }
//             ],
//             meta: 15000
//         },
//         {
//             nombre: "Pedro",
//             activo: false,
//             ventas: [
//                 { monto: 50000 }
//             ],
//             meta: 30000
//         }
//     ];
// }
// async function main() {
//     try {
//         const vendedores = await obtenerVendedores();
//         const vendedoresActivos = vendedores.filter(
//             ({ activo }) => activo
//         );
//         const resultado = vendedoresActivos.map(
//             ({ nombre, ventas, meta }) => {
//                 const totalVentas = ventas.reduce(
//                     (acc, { monto }) => acc + monto,
//                     0
//                 );
//                 const cumpleMeta = totalVentas >= meta;

//                 return {
//                     nombre,
//                     totalVentas,
//                     cumpleMeta
//                 };
//             }
//         );
//         console.log(resultado);

//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

//41
// async function obtenerCursos() {
//     return [
//         {
//             nombre: "Node.js",
//             activo: true,
//             alumnos: [
//                 { nota: 6 },
//                 { nota: 7 },
//                 { nota: 5 }
//             ]
//         },
//         {
//             nombre: "JavaScript",
//             activo: true,
//             alumnos: [
//                 { nota: 4 },
//                 { nota: 3 }
//             ]
//         },
//         {
//             nombre: "Python",
//             activo: false,
//             alumnos: [
//                 { nota: 7 }
//             ]
//         }
//     ];
// }
// async function main() {
//     try {
//         const cursos = await obtenerCursos();
//         const cursosActivos = cursos.filter(({activo}) => activo);
//         //console.log(cursosActivos);
//         const resultado = cursosActivos.map(({nombre, alumnos})=>{
//             const sumaNotas = alumnos.reduce((acc, {nota}) => acc + nota, 0);
//             //console.log(sumaNotas)
//             const destacado = sumaNotas >= 15;
//             return{nombre, sumaNotas, destacado};
//         })
//         console.log(resultado);
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main()

// 42
// async function obtenerPedidos() {
//     return [
//         {
//             cliente: "Dorian",
//             pagado: true,
//             productos: [
//                 { precio: 1000 },
//                 { precio: 2000 },
//                 { precio: 3000 }
//             ]
//         },
//         {
//             cliente: "Ana",
//             pagado: true,
//             productos: [
//                 { precio: 500 }
//             ]
//         },
//         {
//             cliente: "Luis",
//             pagado: false,
//             productos: [
//                 { precio: 9000 }
//             ]
//         }
//     ];
// }
// async function main() {
//     try {
//         const pedidos = await obtenerPedidos();
//         const pedidosPagados = pedidos.filter(({pagado}) => pagado);
//         const totalPedidos = pedidosPagados.map(({cliente, productos}) =>{
//             const total = productos.reduce((acc,{precio})=> acc + precio, 0);
//             const categoria = total >= 5000
//                             ? "ALTO"
//                             : "BAJO"
//             return {cliente, total, categoria};
//         })
//         console.log(totalPedidos);
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

//43
// async function obtenerCuentas() {
//     return [
//         {
//             titular: "Pedro",
//             activa: true,
//             movimientos: [
//                 { monto: 2000 },
//                 { monto: 3000 }
//             ]
//         },
//         {
//             titular: "Carolina",
//             activa: true,
//             movimientos: [
//                 { monto: 500 }
//             ]
//         },
//         {
//             titular: "Juan",
//             activa: false,
//             movimientos: [
//                 { monto: 10000 }
//             ]
//         }
//     ];
// }
// async function main() {
//     try {
//         const cuentas = await obtenerCuentas();
//         const cuentasActivas = cuentas.filter(({activa}) => activa);
//         const resultado = cuentasActivas.map(({titular, movimientos, monto})=>{
//             const totalMovimientos = movimientos.reduce((acc,{monto}) => acc + monto, 0);
//             const premium = totalMovimientos >= 5000;
//             return {titular, totalMovimientos, premium};
//         });
//         console.log(resultado);
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

//44
// async function obtenerEquipos() {
//     return [
//         {
//             nombre: "Backend",
//             activo: true,
//             tareas: [
//                 { horas: 10 },
//                 { horas: 12 }
//             ]
//         },
//         {
//             nombre: "Frontend",
//             activo: true,
//             tareas: [
//                 { horas: 4 }
//             ]
//         },
//         {
//             nombre: "QA",
//             activo: false,
//             tareas: [
//                 { horas: 20 }
//             ]
//         }
//     ];
// }
// async function main() {
//     try {
//         const equipos = await obtenerEquipos();
//         const equiposActivos = equipos.filter(({activo}) => activo);
//         const resultado = equiposActivos.map(({nombre, tareas}) =>{
//             const totalHoras = tareas.reduce((acc, {horas}) => acc + horas, 0);
//             //console.log(totalHoras;
//             const esfuerzo = totalHoras >= 20
//                             ? "ALTO"
//                             : "NORMAL"
//             return { nombre, totalHoras, esfuerzo};
//         });
//         console.log(resultado);
//     } catch (error) {
 //       console.log(`❌ ${error}`);
//     }
// }
// main();

// 45
// async function obtenerEstudiantes() {
//     return [
//         {
//             nombre: "Dorian",
//             activo: true,
//             evaluaciones: [
//                 { puntaje: 60 },
//                 { puntaje: 40 }
//             ]
//         },
//         {
//             nombre: "Ana",
//             activo: true,
//             evaluaciones: [
//                 { puntaje: 30 }
//             ]
//         },
//         {
//             nombre: "Pedro",
//             activo: false,
//             evaluaciones: [
//                 { puntaje: 100 }
//             ]
//         }
//     ];
// }
// async function main() {
//     try {
//         const estudiantes = await obtenerEstudiantes();
//         const estudiantesActivos = estudiantes.filter(({activo}) => activo);
//         const resultado = estudiantesActivos.map(({nombre, evaluaciones}) =>{
//             const totalPuntaje = evaluaciones.reduce((acc, {puntaje}) => acc + puntaje, 0);
//             const aprobado = totalPuntaje >= 100;
//             return {nombre, totalPuntaje, aprobado}; 
//         })
//         console.log(resultado);
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

// 46
// async function obtenerProductos() {
//     return [
//         {
//             id: 1,
//             nombre: "Mouse",
//             precio: 15000
//         },
//         {
//             id: 2,
//             nombre: "Teclado",
//             precio: 25000
//         },
//         {
//             id: 3,
//             nombre: "Monitor",
//             precio: 120000
//         }
//     ];
// }
// async function main() {
//    try {
//     const productos = await obtenerProductos();
//     const producto = productos.find(({ id }) => id === 3);
//     if(producto){
//         console.log(producto)
//     }else{
//         console.log("Producto no encontrado")
//     }
    
//    } catch (error) {
//      console.log(`❌ ${error}`);
//    }
// }
// main();

// 47 producto no encontrado
// async function obtenerProductos() {
//     return [
//         {
//             id: 1,
//             nombre: "Mouse",
//             precio: 15000
//         },
//         {
//             id: 2,
//             nombre: "Teclado",
//             precio: 25000
//         },
//         {
//             id: 3,
//             nombre: "Monitor",
//             precio: 120000
//         }
//     ];
// }
// async function main() {
//     try {
//         const productos = await obtenerProductos();
//         const producto = productos.find(({id}) => id === 99);
//         if(producto){
//             console.log(producto);
//         }else{
//             console.log("Producto no encontrado");
//         }
        
//     } catch (error) {
//          console.log(`❌ ${error}`);
//     }
// }
// main();

// 48 
// async function obtenerUsuarios() {
//     return [
//         {
//             id: 1,
//             nombre: "Dorian",
//             activo: true
//         },
//         {
//             id: 2,
//             nombre: "Carolina",
//             activo: true
//         },
//         {
//             id: 3,
//             nombre: "Pedro",
//             activo: false
//         }
//     ];
// }
// async function main() {
//     try {
//         const usuarios = await obtenerUsuarios();
//         const encontrarUsuario = usuarios.find(({ nombre }) => nombre === "Pedro");
//         if(encontrarUsuario ){
//             if(encontrarUsuario.activo){
//                 console.log("Usuario activo encontrado");
//             }else{
//                  console.log("Usuario encontrado pero inactivo");
//             }
//         }else{
//              console.log("Usuario no encontrado");
//         }
        
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

//49
// async function obtenerProductos() {
//     return [
//         {
//             id: 1,
//             nombre: "Monitor",
//             precio: 120000
//         },
//         {
//             id: 2,
//             nombre: "Mouse",
//             precio: 15000
//         },
//         {
//             id: 3,
//             nombre: "Teclado",
//             precio: 25000
//         }
//     ];
// }
// async function main() {
//     try {
//         const productos = await obtenerProductos();
//         const ordenarProductos = productos.sort((a,b) => a.precio - b.precio);
//         console.log(ordenarProductos);
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();}

// EJMPLO LOCALCOMPARE PARA ORDENAR STRING
// const usuarios = [
//     { nombre: "Pedro" },
//     { nombre: "Ana" },
//     { nombre: "Carolina" }
// ];

// usuarios.sort((a, b) =>
//     a.nombre.localeCompare(b.nombre)
// );

// console.log(usuarios);

// async function obtenerUsuarios() {
//     return [
//         { id: 1, nombre: "Pedro" },
//         { id: 2, nombre: "Ana" },
//         { id: 3, nombre: "Carolina" }
//     ];
// }
// async function main() {
//     try {
//         const  usuarios = await obtenerUsuarios();
//         const ordenarUsuarios = usuarios.sort((a,b) => a.nombre.localeCompare(b.nombre));
//         console.log(ordenarUsuarios)
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

// some() ¿Existe AL MENOS UN elemento que cumpla una condición?
// const numeros = [1, 2, 3, 4];

// const existePar = numeros.some(
//     numero => numero % 2 === 0
// );

// console.log(existePar);

//51 administrador
// async function obtenerUsuarios() {
//     return [
//         {
//             nombre: "Dorian",
//             rol: "user"
//         },
//         {
//             nombre: "Carolina",
//             rol: "admin"
//         },
//         {
//             nombre: "Pedro",
//             rol: "user"
//         }
//     ];
// }
// async function main() {
//     try {
//         const usuarios = await obtenerUsuarios();
//         const usuarioAdmin = usuarios.some(({rol }) => rol === "admin");
//         console.log(usuarioAdmin);
//     } catch (error) {
//          console.log(`❌ ${error}`);
//     }
// }
// main();

// 52
// async function obtenerEmpresas() {
//     return [
//         {
//             nombre: "TechCorp",
//             activa: true,
//             proyectos: [
//                 { nombre: "API Pagos", horas: 20 },
//                 { nombre: "Dashboard", horas: 15 },
//                 { nombre: "Auth Service", horas: 10 }
//             ]
//         },
//         {
//             nombre: "CodeLab",
//             activa: true,
//             proyectos: [
//                 { nombre: "E-commerce", horas: 30 },
//                 { nombre: "CRM", horas: 25 }
//             ]
//         },
//         {
//             nombre: "OldSoft",
//             activa: false,
//             proyectos: [
//                 { nombre: "Sistema Antiguo", horas: 100 }
//             ]
//         }
//     ];
// }
// async function main() {
//     const empresas = await obtenerEmpresas();
//     const empresasActivas = empresas.filter(({activa}) => activa);
//     const resultadoEmpresa = empresasActivas.map(({nombre, proyectos}) => {
//         const totalHoras = proyectos.reduce((acc, {horas}) => acc + horas, 0);
//         const categoria = totalHoras >= 50
//                          ? "GRANDE"
//                          : "MEDIANA"
//         return {nombre, totalHoras, categoria};
//     })
//     console.log(resultadoEmpresa);
// }
// main();

// 53 anidados
// async function obtenerDepartamentos() {
//     return [
//         {
//             nombre: "Backend",
//             activo: true,
//             empleados: [
//                 { salario: 4000 },
//                 { salario: 3500 },
//                 { salario: 3000 }
//             ]
//         },
//         {
//             nombre: "Frontend",
//             activo: true,
//             empleados: [
//                 { salario: 2500 },
//                 { salario: 2000 }
//             ]
//         },
//         {
//             nombre: "QA",
//             activo: false,
//             empleados: [
//                 { salario: 10000 }
//             ]
//         }
//     ];
// }

// async function main() {
//     try {
//         const departamentos = await obtenerDepartamentos();
//         const departamentosActivos = departamentos.filter(({activo}) => activo);
//         const resultadoDepartamento = departamentosActivos.map(({ nombre, empleados}) => {
//             const totalSalarios = empleados.reduce((acc, {salario}) => acc + salario, 0);
//             const nivel = totalSalarios >= 10000
//                             ? "ALTO"
//                             : "NORMAL"
//                 return {nombre, nivel, totalSalarios}
//         })
//         console.log(resultadoDepartamento);
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

//54
// async function obtenerTiendas() {
//     return [
//         {
//             nombre: "Tienda Centro",
//             abierta: true,
//             ventas: [
//                 { monto: 8000 },
//                 { monto: 7000 },
//                 { monto: 6000 }
//             ]
//         },
//         {
//             nombre: "Tienda Norte",
//             abierta: true,
//             ventas: [
//                 { monto: 4000 },
//                 { monto: 5000 }
//             ]
//         },
//         {
//             nombre: "Tienda Sur",
//             abierta: false,
//             ventas: [
//                 { monto: 50000 }
//             ]
//         }
//     ];
// }
// async function main(params) {
//     try {
//        const tiendas = await obtenerTiendas();
//        const tiendasAbiertas = tiendas.filter(({abierta}) => abierta);
//        const resultadoTienda = tiendasAbiertas.map(({nombre, ventas}) =>{
//         const totalVentas = ventas.reduce((acc, {monto}) => acc + monto, 0);
//         const estado = totalVentas >= 20000
//                     ? "EXITOSA"
//                     : "PROMEDIO"
//             return{nombre, totalVentas, estado};
//        });
//        console.log(resultadoTienda);
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main();

// 55 anidado con some
// async function obtenerCursos() {
//     return [
//         {
//             nombre: "Node.js",
//             activo: true,
//             estudiantes: [
//                 { nombre: "Dorian", nota: 6, asistencia: 90 },
//                 { nombre: "Carolina", nota: 5, asistencia: 85 },
//                 { nombre: "Pedro", nota: 3, asistencia: 70 }
//             ]
//         },
//         {
//             nombre: "JavaScript",
//             activo: true,
//             estudiantes: [
//                 { nombre: "Ana", nota: 7, asistencia: 95 },
//                 { nombre: "Luis", nota: 6, asistencia: 88 }
//             ]
//         },
//         {
//             nombre: "Python",
//             activo: false,
//             estudiantes: [
//                 { nombre: "Camila", nota: 7, asistencia: 100 }
//             ]
//         }
//     ];
// }
// async function main() {
//     try {
//         const cursos = await obtenerCursos();
//         const cursosActivos = cursos.filter(({activo}) => activo);
//         const resultadoCursos = cursosActivos.map(({nombre, estudiantes})=>{
//             const promedioNotas = estudiantes.reduce((acc, {nota}) => acc + nota, 0);
//             const promedio = Math.round(promedioNotas / estudiantes.length * 10) / 10;
//             const tieneEstudianteConBajaAsistencia = estudiantes.some(({asistencia}) => asistencia < 80);
//             const nivel = promedio >= 6
//                         ? "ALTO"
//                         : "NORMAL"
//                 return {nombre, promedio, tieneEstudianteConBajaAsistencia, nivel};
//         });
//         console.log(resultadoCursos);
//     } catch (error) {
//         console.log(`❌ ${error}`);
//     }
// }
// main()

// EVERY TODOS CUMPLEN LA CONDICION entrega un TRUE O FALSE
// const todosActivos = usuarios.every(({ activo}) => activo);

// 56
// async function obtenerEstudiantes() {
//     return [
//         {
//             nombre: "Dorian",
//             nota: 6
//         },
//         {
//             nombre: "Carolina",
//             nota: 5
//         },
//         {
//             nombre: "Pedro",
//             nota: 3
//         }
//     ];
// }

// async function main() {
//     try {
//         const usuarios = await obtenerEstudiantes();
//         const todosAprobados = usuarios.every(({nota}) => nota >= 4);
//         console.log(todosAprobados);
//     } catch (error) {
//         console.log(`❌ ${error}`); 
//     }
// }
// main();

// 57}
// async function obtenerCursos() {
//     return [
//         {
//             nombre: "Node.js",
//             estudiantes: [
//                 { nombre: "Dorian", nota: 6 },
//                 { nombre: "Carolina", nota: 5 },
//                 { nombre: "Pedro", nota: 3 }
//             ]
//         },
//         {
//             nombre: "JavaScript",
//             estudiantes: [
//                 { nombre: "Ana", nota: 7 },
//                 { nombre: "Luis", nota: 6 }
//             ]
//         }
//     ];
// }
// async function main() {
//     try {
//         const cursos = await obtenerCursos();
//         const cursoNode = cursos.find(({nombre}) => nombre === "Node.js");
//         const todosAprobados = cursoNode.estudiantes.every(({nota}) => nota >= 4);
       
//     } catch (error) {
//         console.log(`❌ ${error}`); 
//     }
// }
// main();

// 58
// async function obtenerPlataformas() {
//     return [
//         {
//             nombre: "Academia Backend",
//             activa: true,
//             cursos: [
//                 {
//                     nombre: "Node.js",
//                     activo: true,
//                     estudiantes: [
//                         { nombre: "Dorian", nota: 6, asistencia: 90 },
//                         { nombre: "Carolina", nota: 5, asistencia: 85 },
//                         { nombre: "Pedro", nota: 3, asistencia: 70 }
//                     ]
//                 },
//                 {
//                     nombre: "Express",
//                     activo: true,
//                     estudiantes: [
//                         { nombre: "Ana", nota: 7, asistencia: 95 },
//                         { nombre: "Luis", nota: 6, asistencia: 88 }
//                     ]
//                 },
//                 {
//                     nombre: "Legacy PHP",
//                     activo: false,
//                     estudiantes: [
//                         { nombre: "Mario", nota: 4, asistencia: 60 }
//                     ]
//                 }
//             ]
//         },
//         {
//             nombre: "Academia Frontend",
//             activa: true,
//             cursos: [
//                 {
//                     nombre: "React",
//                     activo: true,
//                     estudiantes: [
//                         { nombre: "Camila", nota: 6, asistencia: 92 },
//                         { nombre: "Javiera", nota: 7, asistencia: 98 }
//                     ]
//                 }
//             ]
//         },
//         {
//             nombre: "Academia Antigua",
//             activa: false,
//             cursos: [
//                 {
//                     nombre: "Cobol",
//                     activo: true,
//                     estudiantes: [
//                         { nombre: "Raul", nota: 7, asistencia: 100 }
//                     ]
//                 }
//             ]
//         }
//     ];
// }

// async function main() {
//     try {
//         const plataformas = await obtenerPlataformas();
//         const academiaBackend = plataformas.find(({nombre}) => nombre === "Academia Backend");
//         if(academiaBackend){
//             const cursosActivos = academiaBackend.cursos.filter(
//                 ({activo}) => activo   
//             )
//             const resultado = cursosActivos.map(({nombre, estudiantes}) =>{
//             const promedioNotas = estudiantes.reduce((acc, {nota}) => acc + nota,0);
//             const promedio = Math.round((promedioNotas / estudiantes.length) * 10) / 10;
//             const tieneBajaAsistencia = estudiantes.some(({asistencia})=> asistencia < 80);
//             const todosAprobados = estudiantes.every(({nota}) => nota >= 4);
//             const nivel = promedio >= 6
//                         ? "ALTO"
//                         : "NORMAL"
//                 return {nombre, promedio, tieneBajaAsistencia, todosAprobados, nivel};
//         });
//         console.log(resultado);
//         }else{
//             console.log("Plataforma no encontrada");
//         }
        
        

//     } catch (error) {
//          console.log(`❌ ${error}`); 
//     }
// }
// main()

// 59 ejercicio find filter, map, reduce, sort
// async function obtenerEmpresas() {
//     return [
//         {
//             nombre: "TechCorp",
//             activa: true,
//             empleados: [
//                 {
//                     nombre: "Dorian",
//                     activo: true,
//                     proyectos: [
//                         { nombre: "API Pagos", horas: 20 },
//                         { nombre: "Dashboard", horas: 15 }
//                     ]
//                 },
//                 {
//                     nombre: "Carolina",
//                     activo: true,
//                     proyectos: [
//                         { nombre: "Auth Service", horas: 25 },
//                         { nombre: "Reportes", horas: 10 }
//                     ]
//                 },
//                 {
//                     nombre: "Pedro",
//                     activo: false,
//                     proyectos: [
//                         { nombre: "Legacy", horas: 50 }
//                     ]
//                 }
//             ]
//         },
//         {
//             nombre: "CodeLab",
//             activa: true,
//             empleados: [
//                 {
//                     nombre: "Ana",
//                     activo: true,
//                     proyectos: [
//                         { nombre: "E-commerce", horas: 30 }
//                     ]
//                 }
//             ]
//         }
//     ];
// }

//******* */
// async function main() {
//     try {
//         const empresas = await obtenerEmpresas();
//         const encontrarEmpresa = empresas.find(
//             ({nombre}) => nombre === "TechCorp")
//             ;
//         if(encontrarEmpresa){
//             const empresaActiva = encontrarEmpresa.empleados.filter(
//                 ({activo}) => activo
//             );
//             const resultado = empresaActiva.map(({nombre,proyectos}) =>{
//                 const totalHoras = proyectos.reduce(
//                     (acc,{horas}) => acc + horas, 0
//                 );
//                 const categoria = totalHoras >= 35
//                                 ? "SENIOR"
//                                 : "JUNIOR"
//                 return {nombre, totalHoras, categoria}
                
//             })
//             resultado.sort((a,b) => b.totalHoras - a.totalHoras );
//             console.log(resultado);
//         } else{
//             console.log("Empresa no encontrada")
//         }
//     } catch (error) {
//         console.log(`❌ ${error}`); 
//     }
// }
// main();

// 60
// async function obtenerEmpresas() {
//     return [
//         {
//             nombre: "TechCorp",
//             activa: true,
//             departamentos: [
//                 {
//                     nombre: "Backend",
//                     activo: true,
//                     empleados: [
//                         {
//                             nombre: "Dorian",
//                             activo: true,
//                             tareas: [
//                                 { nombre: "API Pagos", horas: 12, completada: true },
//                                 { nombre: "Auth Service", horas: 8, completada: true }
//                             ]
//                         },
//                         {
//                             nombre: "Carolina",
//                             activo: true,
//                             tareas: [
//                                 { nombre: "Reportes", horas: 10, completada: true },
//                                 { nombre: "Logs", horas: 5, completada: false }
//                             ]
//                         },
//                         {
//                             nombre: "Pedro",
//                             activo: false,
//                             tareas: [
//                                 { nombre: "Legacy Fix", horas: 30, completada: true }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     nombre: "Frontend",
//                     activo: true,
//                     empleados: [
//                         {
//                             nombre: "Ana",
//                             activo: true,
//                             tareas: [
//                                 { nombre: "Landing", horas: 6, completada: true },
//                                 { nombre: "Dashboard UI", horas: 9, completada: true }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     nombre: "QA",
//                     activo: false,
//                     empleados: [
//                         {
//                             nombre: "Luis",
//                             activo: true,
//                             tareas: [
//                                 { nombre: "Tests", horas: 20, completada: true }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             nombre: "CodeLab",
//             activa: true,
//             departamentos: [
//                 {
//                     nombre: "Mobile",
//                     activo: true,
//                     empleados: [
//                         {
//                             nombre: "Camila",
//                             activo: true,
//                             tareas: [
//                                 { nombre: "App Login", horas: 15, completada: true }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ];
// }

// async function main() {
//     try {
//         const empresas = await obtenerEmpresas();

//         const encontrarEmpresa = empresas.find(
//             ({nombre}) => nombre === "TechCorp"
//         );

//         const departamentosActivos = encontrarEmpresa.departamentos.filter(
//             ({activo}) => activo
//         );

//         const resultadoDepartamentos = departamentosActivos.map(
//             ({nombre, empleados}) => {
//                 const empleadosActivosObj = empleados.filter(
//                     ({activo}) => activo
//                 );

//                 const empleadosActivos = empleadosActivosObj.map(
//                     ({nombre}) => nombre
//                 );

//                 const totalHorasDepartamento = empleadosActivosObj.reduce(
//                     (acc, { tareas }) => {
//                         const totalHorasEmpleado = tareas.reduce(
//                             (accTareas, { horas }) => accTareas + horas,
//                             0
//                         );

//                         return acc + totalHorasEmpleado;
//                     },
//                     0
//                 );
//                 const tienesTareasPendientes = empleadosActivosObj.some(({ tareas}) =>
//                     tareas.some(({completada}) => !completada)
//             );
//             const todosEmpleadosActivos = empleados.every(({ activo}) => activo);
//             const nivel = totalHorasDepartamento >= 30
//                             ? "ALTO"
//                             : "NORMAL"

//                 return {
//                     nombre,
//                     empleadosActivos,
//                     totalHorasDepartamento,
//                     tienesTareasPendientes,
//                     todosEmpleadosActivos,
//                     nivel
//                 };
//             }
//         );

//         console.log(resultadoDepartamentos);

//     } catch (error) {
//         console.log(`❌ ${error}`); 
//     }
// }

// main();

// 61
async function obtenerEmpresas() {
    return [
        {
            nombre: "TechCorp",
            activa: true,
            areas: [
                {
                    nombre: "Soporte",
                    activa: true,
                    agentes: [
                        {
                            nombre: "Dorian",
                            activo: true,
                            tickets: [
                                { id: 1, horas: 3, resuelto: true, urgente: false },
                                { id: 2, horas: 5, resuelto: false, urgente: true }
                            ]
                        },
                        {
                            nombre: "Carolina",
                            activo: true,
                            tickets: [
                                { id: 3, horas: 2, resuelto: true, urgente: false },
                                { id: 4, horas: 4, resuelto: true, urgente: true }
                            ]
                        },
                        {
                            nombre: "Pedro",
                            activo: false,
                            tickets: [
                                { id: 5, horas: 10, resuelto: false, urgente: true }
                            ]
                        }
                    ]
                },
                {
                    nombre: "Infraestructura",
                    activa: true,
                    agentes: [
                        {
                            nombre: "Ana",
                            activo: true,
                            tickets: [
                                { id: 6, horas: 6, resuelto: true, urgente: false },
                                { id: 7, horas: 7, resuelto: true, urgente: false }
                            ]
                        }
                    ]
                },
                {
                    nombre: "Legacy",
                    activa: false,
                    agentes: [
                        {
                            nombre: "Luis",
                            activo: true,
                            tickets: [
                                { id: 8, horas: 20, resuelto: false, urgente: true }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            nombre: "CodeLab",
            activa: true,
            areas: [
                {
                    nombre: "Mobile",
                    activa: true,
                    agentes: [
                        {
                            nombre: "Camila",
                            activo: true,
                            tickets: [
                                { id: 9, horas: 8, resuelto: true, urgente: false }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
}
async function main() {
    try {
        const empresas = await obtenerEmpresas();
        const encontrarEmpresa = empresas.find(({nombre}) => nombre === "TechCorp");
        if(encontrarEmpresa){
            const areasActivas = encontrarEmpresa.areas.filter(({ activa }) => activa);
            const resultadoEmpresa = areasActivas.map(({ nombre, agentes}) =>{
                const agentesActivosObj = agentes.filter(({activo}) => activo);
                const agentesActivos = agentesActivosObj.map(({nombre}) => nombre);
                const totalHoras = agentesActivosObj.reduce((acc, {tickets}) =>{
                    const totalHorasAgentes = tickets.reduce((accTickets, {horas}) => accTickets + horas, 0);
                    return acc + totalHorasAgentes;
                },0)
                const ticketUrgente = agentesActivosObj.some(({tickets}) => 
                    tickets.some(({urgente})=> urgente)

            );
            const ticketsResueltos = agentesActivosObj.every(({tickets}) =>
                tickets.every(({resuelto}) => resuelto)
            );
            const nivelCarga = totalHoras >= 12
                            ? "ALTA"
                            : "NORMAL";

                return {nombre, agentesActivos, totalHoras, ticketUrgente, ticketsResueltos, nivelCarga};
            })
           console.log(resultadoEmpresa);
        }else{
            console.log("Empresa no encontrada")
        }
    } catch (error) {
        console.log(`❌ ${error}`); 
    }
}
main();
  

