//ejemplo 1 buscar por edad
// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 25 },
//     { nombre: "Pedro", edad: 40 }
// ];
// const resultado = usuarios.find(({edad}) => edad === 25);
// console.log(resultado);

//ejemplo 2 buscar por nombre
// const usuarios = [
//     { nombre: "Dorian", edad: 25 }, 
//     { nombre: "Ana", edad: 30 }];
// const usuario = usuarios.find(({ nombre })=> nombre === "Ana");
// console.log(usuario);

//ejemplo 3 buscar por ID
// const productos = [
//     { id: 1, nombre: "Teclado" },
//     { id: 2, nombre: "Mouse" }, 
//     { id: 3, nombre: "Monitor" }
// ];
// const producto = productos.find(({ id })=> id === 2);
// console.log(producto);

//ejemplo 4 que pasa si No encuentra nada??
// const usuarios = [
//        { nombre: "Dorian", edad: 25 }, 
//        { nombre: "Ana", edad: 30 }
// ];
// const usuario = usuarios.find(({ nombre }) => nombre === "Zoe");
// console.log(usuario);
// sale undefined

//ejercicio 1 con find()
// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 30 },
//     { nombre: "Pedro", edad: 40 }
// ];
// const usuario = usuarios.find(({nombre})=> nombre === "Pedro");
// console.log(usuario);

// 2
// const productos = [
//     { id: 101, nombre: "Teclado", precio: 25000 },
//     { id: 102, nombre: "Mouse", precio: 12000 },
//     { id: 103, nombre: "Monitor", precio: 180000 },
//     { id: 104, nombre: "Silla", precio: 60000 }
// ];
// const producto = productos.find(({ id })=> id === 103);
// console.log(producto);

//3
// const usuarios = [
//     { id: 1, nombre: "Dorian" },
//     { id: 2, nombre: "Ana" },
//     { id: 3, nombre: "Pedro" }
// ];
// const usuario = usuarios.find(({ id })=> id === 99);
// console.log(usuario);

// 4 condición númerica
// const empleados = [
//     { nombre: "Dorian", sueldo: 800000 },
//     { nombre: "Ana", sueldo: 1200000 },
//     { nombre: "Pedro", sueldo: 950000 },
//     { nombre: "Carolina", sueldo: 1500000 }
// ];
// const primerAltoSueldo = empleados.find(({ sueldo })=> sueldo > 1000000);
// console.log(primerAltoSueldo);

// 5 buscar objero y usar su propiedad
// const productos = [
//     { id: 1, nombre: "Teclado", precio: 25000 },
//     { id: 2, nombre: "Mouse", precio: 12000 },
//     { id: 3, nombre: "Monitor", precio: 180000 }
// ];
// const producto = productos.find(({ id })=> id === 3);
// let mensaje = `El producto ${producto.nombre} cuesta $${producto.precio}`;
// console.log(mensaje);

// 6 con condiciones combinadas
// const usuarios = [
//     { nombre: "Dorian", edad: 25, activo: false },
//     { nombre: "Ana", edad: 17, activo: true },
//     { nombre: "Pedro", edad: 30, activo: true },
//     { nombre: "Carolina", edad: 40, activo: true }
// ];
// const usuario = usuarios.find(({ edad, activo}) => edad >= 18 && activo);
// console.log(usuario);

// EJERCICIOS COMBINADOS CON FIND + FILTER + MAP
// ejemplo 1 filter con find

// const usuarios = [
//     { nombre: "Dorian", edad: 25, activo: true },
//     { nombre: "Ana", edad: 40, activo: false },
//     { nombre: "Pedro", edad: 35, activo: true },
//     { nombre: "Carolina", edad: 50, activo: true }
// ];

// const resultado = usuarios
//     .filter(({ activo }) => activo)      // 1️⃣ primero: solo activos
//     .find(({ edad }) => edad > 30);       // 2️⃣ después: el primero > 30

// console.log(resultado);

//ejemplo 2  map con filter 
// transformar producto con IVA y encuentra el primero que cueste mas de 100000
// const productos = [
//     { nombre: "Teclado", precio: 25000 },
//     { nombre: "Monitor", precio: 100000 },
//     { nombre: "Notebook", precio: 800000 }];
// const resultado = productos
//     .map(({nombre, precio}) => ({
//         nombre,
//         precioConIVA: Math.round(precio * 1.19)
//     }))
//     .find(({ precioConIVA}) => precioConIVA > 100000);
//     console.log(resultado);

// ejemplo 3 filter() + map() + find() (las tres)
// de los activos, transforma a objeto con descuento, y encuentra el primero con precio bajo 50000
// const productos = [
//     { nombre: "Teclado", precio: 25000 , stock: 40},
//     { nombre: "Monitor", precio: 100000 , stock: 100},
//     { nombre: "Notebook", precio: 800000 , stock: 0}
// ];
// const resultado = productos
//     .filter(({stock}) => stock > 0)
//     .map(({nombre, precio})=>({
//         nombre,
//         precioFinal: Math.round(precio * 0.9) 
//     }))
//     .find(({ precioFinal })=> precioFinal < 50000);
// console.log(resultado);

// ejercicio 1 filter + find
// const empleados = [
//     { nombre: "Dorian", cargo: "developer", sueldo: 800000, activo: true },
//     { nombre: "Ana", cargo: "designer", sueldo: 900000, activo: true },
//     { nombre: "Pedro", cargo: "developer", sueldo: 1200000, activo: false },
//     { nombre: "Carolina", cargo: "developer", sueldo: 1500000, activo: true }
// ];
// const resultado = empleados
//     .filter(({ cargo, activo })=> cargo === "developer" && activo)
//     .find(({ sueldo })=> sueldo > 1000000);
// console.log(resultado);

// ejercicio 2 map + find
// const productos = [
//     { nombre: "Teclado", precio: 25000 },
//     { nombre: "Mouse", precio: 12000 },
//     { nombre: "Monitor", precio: 100000 },
//     { nombre: "Notebook", precio: 800000 }
// ];
// const resultado = productos
//     .map(({nombre, precio})=>({
//         nombre,
//         precioConIVA: Math.round(precio * 1.19)
//     }))
//     .find(({precioConIVA}) => precioConIVA > 100000);
// console.log(resultado);

// ejercicio 3: filter + map + find (las TRES)
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 5, categoria: "gaming" },
//     { nombre: "Mouse", precio: 12000, stock: 0, categoria: "gaming" },
//     { nombre: "Monitor", precio: 180000, stock: 3, categoria: "gaming" },
//     { nombre: "Silla", precio: 60000, stock: 2, categoria: "oficina" },
//     { nombre: "Notebook", precio: 900000, stock: 4, categoria: "gaming" }
// ];
// const resultado = productos
//     .filter(({categoria, stock}) => categoria === "gaming" && stock > 0)
//     .map(({nombre, precio}) =>({
//         nombre,
//         precioFinal: Math.round(precio * 0.9)
//     }))
//     .find(({precioFinal}) => precioFinal > 100000);
// console.log(resultado);

// ejercicio 4 
// const estudiantes = [
//     { nombre: "Dorian", nota: 6.5, aprobado: true },
//     { nombre: "Ana", nota: 3.0, aprobado: false },
//     { nombre: "Pedro", nota: 5.5, aprobado: true },
//     { nombre: "Carolina", nota: 7.0, aprobado: true }
// ];
// const resultado = estudiantes
//     .filter(({aprobado}) => aprobado)
//     .find(({nota}) =>nota >= 6)
// console.log(resultado);

// ejercicio 5
// const empleados = [
//     { nombre: "Dorian", sueldo: 800000 },
//     { nombre: "Ana", sueldo: 950000 },
//     { nombre: "Pedro", sueldo: 1200000 }
// ];
// const resultado = empleados
//     .map(({nombre, sueldo})=>({
//         nombre,
//         sueldoConBono: Math.round(sueldo * 1.1)
//     }))
//     .find(({sueldoConBono})=> sueldoConBono > 1000000);
// console.log(resultado);

// ejercicio 6
// ejemplo 3 filter() + map() + find() (las tres)
// const clientes = [
//     { nombre: "Dorian", compras: 30000, plan: "premium", activo: true },
//     { nombre: "Ana", compras: 50000, plan: "basico", activo: true },
//     { nombre: "Pedro", compras: 80000, plan: "premium", activo: false },
//     { nombre: "Carolina", compras: 60000, plan: "premium", activo: true },
//     { nombre: "Javier", compras: 120000, plan: "premium", activo: true }
// ];
// const resultado = clientes
//     .filter(({plan, activo}) => plan === "premium" && activo)
//     .map(({nombre, compras}) =>({
//         nombre,
//         comprasConIVA: Math.round(compras * 1.19)
//     }))
//     .find(({comprasConIVA})=> comprasConIVA > 100000);
// console.log(resultado);

// ejercicio 7
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 0 },
//     { nombre: "Mouse", precio: 12000, stock: 5 },
//     { nombre: "Monitor", precio: 180000, stock: 3 },
//     { nombre: "Silla", precio: 60000, stock: 8 }
// ];
// const resultado = productos
//     .filter(({stock})=> stock > 0)
//     .find(({precio}) => precio > 50000);
    
// console.log(resultado);

//ejercicio 8 
// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 30 },
//     { nombre: "Pedro", edad: 40 }
// ];
// const resultado = usuarios
//     .map(({nombre, edad})=>({
//         nombre,
//         edadEnMeses: edad * 12
//     }))
//     .find(({edadEnMeses}) => edadEnMeses > 350)
// console.log(resultado);

// 9
// const empleados = [
//     { nombre: "Dorian", sueldo: 700000, cargo: "developer", activo: true },
//     { nombre: "Ana", sueldo: 900000, cargo: "designer", activo: true },
//     { nombre: "Pedro", sueldo: 1000000, cargo: "developer", activo: false },
//     { nombre: "Carolina", sueldo: 1100000, cargo: "developer", activo: true },
//     { nombre: "Javier", sueldo: 1500000, cargo: "developer", activo: true }
// ];
// const resultado = empleados
//     .filter(({cargo, activo}) =>cargo === "developer" && activo)
//     .map(({nombre, sueldo}) =>({
//         nombre,
//         sueldoConAumento: Math.round(sueldo * 1.2)
//     }))
//     .find(({sueldoConAumento}) => sueldoConAumento > 1300000)
// console.log(resultado);

//10
// const cuentas = [
//     { titular: "Dorian", saldo: 50000, tipo: "ahorro" },
//     { titular: "Ana", saldo: 200000, tipo: "corriente" },
//     { titular: "Pedro", saldo: 800000, tipo: "ahorro" },
//     { titular: "Carolina", saldo: 1500000, tipo: "ahorro" }
// ];
// const resultado = cuentas
//     .filter(({ tipo })=> tipo === "ahorro")
//     .find(({ saldo })=> saldo > 100000);
// console.log(resultado);

// 11
// const productos = [
//     { nombre: "Teclado", precio: 20000 },
//     { nombre: "Mouse", precio: 15000 },
//     { nombre: "Monitor", precio: 90000 }
// ];
// const resultado = productos
//     .map(({nombre, precio}) => ({
//         nombre,
//         precioConDescuento: Math.round(precio * 0.8)
//     }))
//     .find(({precioConDescuento}) => precioConDescuento < 20000);
// console.log(resultado);

//12
// const estudiantes = [
//     { nombre: "Dorian", nota: 6.5, asistencia: 60 },
//     { nombre: "Ana", nota: 7.0, asistencia: 90 },
//     { nombre: "Pedro", nota: 5.0, asistencia: 95 },
//     { nombre: "Carolina", nota: 6.8, asistencia: 85 }
// ];
// const resultado = estudiantes
//     .filter(({asistencia}) => asistencia >= 80)
//     .map(({nombre, nota}) => ({
//         nombre,
//         notaFinal: Math.round(nota * 1.05 * 10) / 10     
//     }))
//     .find(({notaFinal}) => notaFinal >= 7);
// console.log(resultado);

// 13
// const vehiculos = [
//     { modelo: "Corolla", precio: 15000000, disponible: true },
//     { modelo: "Civic", precio: 18000000, disponible: false },
//     { modelo: "Mazda3", precio: 20000000, disponible: true },
//     { modelo: "Yaris", precio: 12000000, disponible: true }
// ];
// const resultado = vehiculos
//     .filter(({ disponible }) => disponible)
//     .find(({precio}) => precio > 16000000);
// console.log(resultado);


//14
// const productos = [
//     { nombre: "Teclado", precio: 30000 },
//     { nombre: "Mouse", precio: 18000 },
//     { nombre: "Monitor", precio: 120000 }
// ];
// const resultado = productos
//     .map(({nombre, precio})=>({
//         nombre,
//         precioConIVA: Math.round(precio * 1.19)
//     }))
//     .find(({precioConIVA}) => precioConIVA > 30000)
// console.log(resultado);

// 15
// const clientes = [
//     { nombre: "Dorian", edad: 25, compras: 40000, esVip: true },
//     { nombre: "Ana", edad: 17, compras: 100000, esVip: true },
//     { nombre: "Pedro", edad: 40, compras: 30000, esVip: false },
//     { nombre: "Carolina", edad: 30, compras: 80000, esVip: true },
//     { nombre: "Javier", edad: 22, compras: 120000, esVip: true }
// ];
// const resultado = clientes
//     .filter(({edad, esVip}) => edad >= 18 && esVip)
//     .map(({nombre, compras }) => ({
//         nombre,
//         comprasConDescuento: Math.round(compras * 0.85) 
//     }))
//     .find(({comprasConDescuento}) => comprasConDescuento > 60000)
// console.log(resultado);

// 16
// const empleados = [
//     { nombre: "Dorian", sueldoBase: 800000, horasExtra: 10, activo: true },
//     { nombre: "Ana", sueldoBase: 600000, horasExtra: 20, activo: false },
//     { nombre: "Pedro", sueldoBase: 900000, horasExtra: 5, activo: true },
//     { nombre: "Carolina", sueldoBase: 1000000, horasExtra: 15, activo: true }
// ];
// const resultado = empleados
//     .filter(({activo}) => activo)
//     .map(({nombre, sueldoBase, horasExtra}) =>({
//         nombre, 
//         sueldoTotal:(sueldoBase + (horasExtra * 8000))
//     }))
//     .find(({sueldoTotal}) => sueldoTotal >= 1000000);
// console.log(resultado);

//17
// const productos = [
//     { nombre: "Teclado", precio: 20000, cantidad: 3, categoria: "gaming" },
//     { nombre: "Mouse", precio: 15000, cantidad: 2, categoria: "oficina" },
//     { nombre: "Monitor", precio: 100000, cantidad: 2, categoria: "gaming" },
//     { nombre: "Notebook", precio: 500000, cantidad: 1, categoria: "gaming" }
// ];
// const resultado = productos
//     .filter(({categoria}) => categoria === "gaming")
//     .map(({nombre, precio, cantidad}) => ({
//         nombre,
//         totalCompra: precio * cantidad
//     }))
//     .find(({totalCompra}) => totalCompra > 100000);
// console.log(resultado);

// 18
// const cuentas = [
//     { titular: "Dorian", saldo: 500000, tipo: "premium", activa: true },
//     { titular: "Ana", saldo: 200000, tipo: "basica", activa: true },
//     { titular: "Pedro", saldo: 1000000, tipo: "premium", activa: false },
//     { titular: "Carolina", saldo: 800000, tipo: "premium", activa: true },
//     { titular: "Javier", saldo: 1500000, tipo: "premium", activa: true }
// ];
// const resultado = cuentas
//     .filter(({tipo, activa}) => tipo === "premium" && activa)
//     .map(({titular, saldo}) => ({
//         titular,
//         saldoConInteres: Math.round(saldo * 1.05)  
//     }))
//     .find(({saldoConInteres}) => saldoConInteres > 800000);
// console.log(resultado);

// 19
// const pedidos = [
//     { cliente: "Dorian", precioUnitario: 5000, unidades: 4, pagado: true },
//     { cliente: "Ana", precioUnitario: 20000, unidades: 3, pagado: false },
//     { cliente: "Pedro", precioUnitario: 15000, unidades: 5, pagado: true },
//     { cliente: "Carolina", precioUnitario: 30000, unidades: 2, pagado: true }
// ];
// const resultado = pedidos
//     .filter(({ pagado }) => pagado)
//     .map(({cliente, precioUnitario, unidades}) =>({
//         cliente,
//         total: precioUnitario * unidades
//     }))
//     .find(({total}) => total >= 60000);
// console.log(resultado);

//20
// const estudiantes = [
//     { nombre: "Dorian", nota1: 6, nota2: 7, aprobado: true },
//     { nombre: "Ana", nota1: 4, nota2: 3, aprobado: false },
//     { nombre: "Pedro", nota1: 5, nota2: 6, aprobado: true },
//     { nombre: "Carolina", nota1: 7, nota2: 7, aprobado: true }
// ];
// const resultado = estudiantes
//     .filter(({ aprobado }) => aprobado)
//     .map(({nombre, nota1, nota2}) => ({
//         nombre,
//         promedio: (nota1 + nota2)/ 2
//     }))
//     .find(({promedio}) => promedio >= 6.5)
// console.log(resultado);

// EXAMEN 
// ejercicio 1
// const usuarios = [
//     { nombre: "Dorian", edad: 25, puntos: 500, activo: true },
//     { nombre: "Ana", edad: 17, puntos: 800, activo: true },
//     { nombre: "Pedro", edad: 40, puntos: 1200, activo: false },
//     { nombre: "Carolina", edad: 30, puntos: 2000, activo: true }
// ];
//  const resultado = usuarios
//     .filter(({ edad, activo }) => edad >= 18 && activo)
//     .map(({nombre, puntos}) =>({
//         nombre,
//         puntosDobles: puntos * 2
//     }))
//     .find(({puntosDobles}) => puntosDobles >= 1000);
// console.log(resultado);

// ejercicio 2
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 0 },
//     { nombre: "Mouse", precio: 12000, stock: 8 },
//     { nombre: "Monitor", precio: 150000, stock: 4 },
//     { nombre: "Silla", precio: 90000, stock: 2 }
// ];
// const resultado = productos
//     .filter(({ stock }) => stock > 0)
//     .map(({nombre, precio})=> ({
//         nombre, 
//         precioConIVA: Math.round(precio * 1.19)
//     }))
//     .find(({precioConIVA}) => precioConIVA > 100000);
// console.log(resultado);

// ejercicio 3
// const empleados = [
//     { nombre: "Dorian", sueldo: 700000, cargo: "developer", activo: true },
//     { nombre: "Ana", sueldo: 900000, cargo: "manager", activo: true },
//     { nombre: "Pedro", sueldo: 1100000, cargo: "developer", activo: true },
//     { nombre: "Carolina", sueldo: 1300000, cargo: "developer", activo: false }
// ];
// const resultado = empleados
//     .filter(({cargo, activo}) => cargo === "developer" && activo)
//     .map(({nombre, sueldo}) =>({
//         nombre, 
//         sueldoAnual: sueldo * 12
//     }))
//     .find(({sueldoAnual}) => sueldoAnual > 10000000);
// console.log(resultado);

//4
// const clientes = [
//     { nombre: "Dorian", compras: 40000, esVip: false },
//     { nombre: "Ana", compras: 80000, esVip: true },
//     { nombre: "Pedro", compras: 120000, esVip: false },
//     { nombre: "Carolina", compras: 200000, esVip: true }
// ];
// const resultado = clientes
//     .filter(({ esVip }) => esVip)
//     .map(({nombre, compras}) =>({
//         nombre, 
//         comprasConDescuento: Math.round(compras * 0.75)
//     }))
//     .find(({comprasConDescuento}) => comprasConDescuento > 100000)
// console.log(resultado);

//5
// const cursos = [
//     { titulo: "JavaScript", inscritos: 100, precio: 40000, activo: true },
//     { titulo: "Python", inscritos: 60, precio: 50000, activo: false },
//     { titulo: "Java", inscritos: 150, precio: 45000, activo: true },
//     { titulo: "Go", inscritos: 30, precio: 80000, activo: true }
// ];
// const resultado = cursos
//     .filter(({activo}) => activo)
//     .map(({titulo, inscritos, precio}) => ({
//         titulo,
//         ingresos: inscritos * precio
//     }))
//     .find(({ingresos}) => ingresos > 5000000);
// console.log(resultado);
// 6
// const vehiculos = [
//     { modelo: "Corolla", precio: 15000000, año: 2019, disponible: true },
//     { modelo: "Civic", precio: 18000000, año: 2021, disponible: true },
//     { modelo: "Mazda3", precio: 20000000, año: 2020, disponible: false },
//     { modelo: "Yaris", precio: 12000000, año: 2022, disponible: true }
// ];
// const resultado = vehiculos
//     .filter(({año, disponible}) => año >= 2020 && disponible )
//     .map(({modelo, precio}) => ({
//         modelo,
//         precioConDescuento: Math.round(precio * 0.9)
//     }))
//     .find(({precioConDescuento}) => precioConDescuento > 15000000);
// console.log(resultado);

//7
// const productos = [
//     { nombre: "Teclado", precio: 20000, cantidad: 5, stock: true },
//     { nombre: "Mouse", precio: 10000, cantidad: 3, stock: false },
//     { nombre: "Monitor", precio: 100000, cantidad: 2, stock: true },
//     { nombre: "Silla", precio: 50000, cantidad: 4, stock: true }
// ];
// const resultado = productos
//     .filter(({ stock }) => stock)
//     .map(({nombre, precio, cantidad})=>({
//         nombre,
//         totalInventario: precio * cantidad
//     }))
//     .find(({totalInventario}) => totalInventario >= 200000);
// console.log(resultado);

// 8
// const usuarios = [
//     { nombre: "Dorian", edad: 25, saldo: 30000, activo: true },
//     { nombre: "Ana", edad: 30, saldo: 50000, activo: false },
//     { nombre: "Pedro", edad: 40, saldo: 80000, activo: true },
//     { nombre: "Carolina", edad: 22, saldo: 120000, activo: true }
// ];
// const resultado = usuarios
//     .filter(({edad, activo}) => edad >= 18 && activo)
//     .map(({nombre, saldo}) => ({
//         nombre,
//         saldoConBono: Math.round(saldo * 1.3) 
//     }))
//     .find(({saldoConBono}) => saldoConBono > 100000);
// console.log(resultado);

// 9
// const empleados = [
//     { nombre: "Dorian", sueldo: 500000, cargo: "developer", activo: true },
//     { nombre: "Ana", sueldo: 700000, cargo: "designer", activo: true },
//     { nombre: "Pedro", sueldo: 800000, cargo: "developer", activo: true },
//     { nombre: "Carolina", sueldo: 1000000, cargo: "developer", activo: false }
// ];
// const resultado = empleados
//     .filter(({cargo, activo}) => cargo === "developer" && activo)
//     .map(({nombre, sueldo}) => ({
//         nombre, 
//         sueldoConAumento: Math.round(sueldo * 1.25)
//     }))
//     .find(({sueldoConAumento}) => sueldoConAumento >= 900000);
// console.log(resultado);

// 10
// const productos = [
//     { nombre: "Teclado", precio: 40000, categoria: "gaming" },
//     { nombre: "Mouse", precio: 25000, categoria: "gaming" },
//     { nombre: "Monitor", precio: 150000, categoria: "oficina" },
//     { nombre: "Auriculares", precio: 60000, categoria: "gaming" }
// ];
// const resultado = productos
//     .filter(({categoria}) => categoria === "gaming")
//     .map(({nombre, precio}) =>({
//         nombre,
//         precioConDescuento: Math.round(precio * 0.6)
//     }))
//     .find(({precioConDescuento}) => precioConDescuento >= 30000);
// console.log(resultado);

//11
// const cuentas = [
//     { titular: "Dorian", saldo: 200000, tipo: "ahorro", activa: true },
//     { titular: "Ana", saldo: 500000, tipo: "corriente", activa: true },
//     { titular: "Pedro", saldo: 800000, tipo: "ahorro", activa: false },
//     { titular: "Carolina", saldo: 1000000, tipo: "ahorro", activa: true }
// ];
// const resultado = cuentas
//     .filter(({tipo, activa}) => tipo === "ahorro" && activa)
//     .map(({titular, saldo})=>({
//         titular, 
//         saldoConInteres: Math.round(saldo * 1.08)
//     }))
//     .find(({saldoConInteres})=> saldoConInteres > 500000);
// console.log(resultado);

//12
// const usuarios = [
//     { nombre: "Dorian", edad: 25, gastos: 50000, premium: true },
//     { nombre: "Ana", edad: 17, gastos: 80000, premium: true },
//     { nombre: "Pedro", edad: 40, gastos: 30000, premium: false },
//     { nombre: "Carolina", edad: 30, gastos: 120000, premium: true }
// ];
// const resultado = usuarios
//     .filter(({edad, premium})=>edad >= 18 && premium)
//     .map(({nombre, gastos}) => ({
//         nombre,
//         gastosConIVA: Math.round(gastos * 1.19)
//     }))
//     .find(({gastosConIVA}) =>gastosConIVA > 100000);
// console.log(resultado);

//14
// const productos = [
//     { nombre: "Teclado", precio: 30000, unidades: 2, stock: true },
//     { nombre: "Mouse", precio: 15000, unidades: 5, stock: false },
//     { nombre: "Monitor", precio: 100000, unidades: 3, stock: true },
//     { nombre: "Silla", precio: 80000, unidades: 1, stock: true }
// ];
// const resultado = productos 
//     .filter(({stock})=> stock)
//     .map(({nombre, precio, unidades})=>({
//         nombre,
//         totalVenta: precio * unidades
//     }))
//     .find(({totalVenta}) => totalVenta >= 100000)
// console.log(resultado);

//14
// const empleados = [
//     { nombre: "Dorian", sueldo: 800000, antiguedad: 3, cargo: "developer", activo: true },
//     { nombre: "Ana", sueldo: 600000, antiguedad: 1, cargo: "developer", activo: true },
//     { nombre: "Pedro", sueldo: 1200000, antiguedad: 7, cargo: "manager", activo: true },
//     { nombre: "Carolina", sueldo: 900000, antiguedad: 5, cargo: "developer", activo: true }
// ];
// const resultado = empleados
//     .filter(({cargo, activo}) => cargo === "developer" && activo)
//     .map(({nombre, antiguedad, sueldo})=>{
//         const bono = antiguedad >= 5 ? Math.round(sueldo * 0.15) : Math.round(sueldo * 0.05);
//         const sueldoFinal = sueldo + bono
//         return {nombre, bono, sueldoFinal}
//     })
//     .find(({sueldoFinal}) => sueldoFinal > 900000);
// console.log(resultado);

//15
// const clientes = [
//     { nombre: "Dorian", compras: 30000, edad: 25, activo: true },
//     { nombre: "Ana", compras: 150000, edad: 30, activo: false },
//     { nombre: "Pedro", compras: 80000, edad: 40, activo: true },
//     { nombre: "Carolina", compras: 200000, edad: 35, activo: true }
// ];
// const resultado = clientes
//     .filter(({activo}) => activo)
//     .map(({nombre,compras})=>{
//         const categoria = compras >= 100000 ? "VIP" : "Regular";
//         const descuento = categoria === "VIP" ? 20 : 5;
//         const ahorro = Math.round(compras * descuento / 100)
//         return { nombre, categoria, descuento, ahorro}
//     })
//     .find(({ahorro})=> ahorro > 10000)
// console.log(resultado);

// 16
// const productos = [
//     { nombre: "Teclado", precio: 20000, stock: 15, categoria: "gaming" },
//     { nombre: "Mouse", precio: 15000, stock: 3, categoria: "gaming" },
//     { nombre: "Monitor", precio: 150000, stock: 8, categoria: "oficina" },
//     { nombre: "Notebook", precio: 900000, stock: 20, categoria: "gaming" }
// ];
// const resultado = productos
//     .filter(({categoria}) => categoria === "gaming")
//     .map(({nombre, precio, stock})=>{
//         const precioConIVA = Math.round(precio * 1.19)
//         const disponibilidad = stock >= 10 ? "Alto stock" : "Bajo stock";
//         return {nombre, precioConIVA, disponibilidad};
//     })
//     .find(({disponibilidad}) => disponibilidad === "Alto stock");
// console.log(resultado);

//17
// const usuarios = [
//     { nombre: "Dorian", puntos: 300, activo: true },
//     { nombre: "Ana", puntos: 1500, activo: false },
//     { nombre: "Pedro", puntos: 6000, activo: true },
//     { nombre: "Carolina", puntos: 2500, activo: true }
// ];
// const resultado = usuarios
//     .filter(({activo}) => activo)
//     .map(({nombre, puntos})=>{
//         const nivel = puntos >= 5000 ? "Oro" : puntos >= 1000 ? "Plata" : "Bronce"
//         return {nombre, nivel}
//     })
//     .find(({nivel})=> nivel !== "Bronce");

//  console.log(resultado);

// 18
// const empleados = [
//     { nombre: "Dorian", ventas: 5, sueldoBase: 500000, activo: true },
//     { nombre: "Ana", ventas: 12, sueldoBase: 600000, activo: false },
//     { nombre: "Pedro", ventas: 20, sueldoBase: 700000, activo: true },
//     { nombre: "Carolina", ventas: 8, sueldoBase: 550000, activo: true }
// ];
// const resultado = empleados
//     .filter(({activo}) => activo)
//     .map(({nombre, ventas,sueldoBase})=>{
//         const comision = ventas >= 15 ? "Alta" : ventas >= 8 ? "Media" : "Baja";
//         const bono = comision === "Alta" ? 200000 : comision === "Media" ? 100000 : 0;
//         const sueldoTotal = sueldoBase + bono;
//         return {nombre, comision, bono, sueldoTotal}
//     })
//     .find(({sueldoTotal})=> sueldoTotal >= 650000)
// console.log(resultado);

// 19
// const pedidos = [
//     { cliente: "Dorian", items: [10000, 20000, 5000], estado: "pagado" },
//     { cliente: "Ana", items: [50000], estado: "pendiente" },
//     { cliente: "Pedro", items: [30000, 40000, 20000], estado: "pagado" },
//     { cliente: "Carolina", items: [5000, 5000], estado: "pagado" }
// ];
// const resultado = pedidos
//     .filter(({estado}) => estado === "pagado")
//     .map(({cliente, items})=>{
//         let total = 0;
//         for(let i = 0; i < items.length; i++){
//             total = total + items[i]
//         }
//         const categoria = total >= 50000 ? "Grande" : "Pequeño"
//         return {cliente, total, categoria}
//     })
//     .find(({categoria}) => categoria === "Grande");
// console.log(resultado);

// 20
const clientes = [
    { nombre: "Dorian", compras: [20000, 30000], plan: "premium", edad: 25, activo: true },
    { nombre: "Ana", compras: [100000, 50000], plan: "premium", edad: 17, activo: true },
    { nombre: "Pedro", compras: [40000, 60000], plan: "basico", edad: 40, activo: true },
    { nombre: "Carolina", compras: [80000, 90000, 30000], plan: "premium", edad: 35, activo: true },
    { nombre: "Javier", compras: [200000], plan: "premium", edad: 30, activo: false }
];
const resultado = clientes
    .filter(({plan, edad, activo}) => plan === "premium" && edad >= 18 && activo)
    .map(({nombre, compras}) =>{
        let totalCompras = 0;
        for(let i = 0; i < compras.length; i++){
            totalCompras = totalCompras + compras[i];
        } 
        const categoria = totalCompras >= 150000 ? "VIP" : "Regular";
        const descuento = categoria === "VIP" ? 25 : 10; 
        const montoDescuento = Math.round(totalCompras * descuento / 100);
        return {nombre, totalCompras, categoria, descuento, montoDescuento}
    }) 
    .find(({categoria}) => categoria === "VIP");
console.log(resultado);
