// estructura del reduce()
// array.reduce((acumulador, elemento) =>{
//     return acumulador + elemento;
// }, valorInicial);

// // ejemplo 1 sumar
// const numeros = [10, 20, 30];
// const total = numeros.reduce((acc, num) => acc + num, 0);
// console.log(total);

// 1
// const numeros = [5, 10, 15, 20];
// const total = numeros.reduce((acc, num)=>acc + num, 0);
// console.log(total);

//2 sumar propuedades de objetos
// const productos = [
//     { nombre: "Teclado", precio: 25000 },
//     { nombre: "Mouse", precio: 12000 },
//     { nombre: "Monitor", precio: 180000 }
// ];
// const totalPrecios = productos.reduce((acc, {precio}) => acc + precio, 0);
// console.log(totalPrecios);

//3 contar elementos
// const usuarios = [
//     { nombre: "Dorian", activo: true },
//     { nombre: "Ana", activo: false },
//     { nombre: "Pedro", activo: true },
//     { nombre: "Carolina", activo: true }
// ];
// const cantidadActivos = usuarios.reduce((acc, {activo})=> acc + (activo ? 1 : 0),0);
// console.log(cantidadActivos);

// 4 sumar solo los que cumplen
// const ventas = [
//     { producto: "Teclado", monto: 25000, pagada: true },
//     { producto: "Mouse", monto: 12000, pagada: false },
//     { producto: "Monitor", monto: 180000, pagada: true },
//     { producto: "Silla", monto: 60000, pagada: false }
// ];
// const totalPagado = ventas.reduce((acc,{ monto, pagada}) => acc + (pagada ? monto : 0), 0);
// console.log(totalPagado);

// 5 encontrar el máximo
// const numeros = [30, 80, 45, 120, 60];
// const maximo = numeros.reduce((acc,num)=> num > acc ? num : acc, numeros[0]);
// console.log(maximo);

// 6 encontrar minimo
// const precios = [45000, 12000, 89000, 30000, 8000];
// const minimo = precios.reduce((acc, num) => num < acc ? num : acc, precios[0]);
// console.log(minimo);

// 7 promedio
// const notas = [6, 7, 5, 4, 8];
// const promedio = notas.reduce((acc, num) => acc + num, 0) / notas.length;
// console.log(promedio);

// 8 
// const carrito = [
//     { producto: "Teclado", cantidad: 2 },
//     { producto: "Mouse", cantidad: 5 },
//     { producto: "Monitor", cantidad: 1 }
// ];
// const totalUnidades = carrito.reduce((acc, {cantidad})=> acc + cantidad, 0);
// console.log(totalUnidades);

//9 
// const productos = [
//     { nombre: "Teclado", precio: 20000, cantidad: 3 },
//     { nombre: "Mouse", precio: 15000, cantidad: 2 },
//     { nombre: "Monitor", precio: 100000, cantidad: 1 }
// ];
// const totalCarrito = productos.reduce((acc, {precio, cantidad})=> acc + (precio * cantidad) ,0);
// console.log(totalCarrito);

// 10 contar cuantos usuarios con menores de edad
// const usuarios = [
//     { nombre: "Dorian", edad: 25 },
//     { nombre: "Ana", edad: 17 },
//     { nombre: "Pedro", edad: 40 },
//     { nombre: "Carolina", edad: 15 }
// ];
// const cantidadMenores = usuarios.reduce((acc,{ edad }) => acc + (edad < 18 ? 1 : 0), 0);
// console.log(cantidadMenores);

//11 sume solo los montos de los pedidos con estado pagado
// const pedidos = [
//     { cliente: "Dorian", monto: 30000, estado: "pagado" },
//     { cliente: "Ana", monto: 50000, estado: "pendiente" },
//     { cliente: "Pedro", monto: 80000, estado: "pagado" },
//     { cliente: "Carolina", monto: 20000, estado: "cancelado" }
// ];
// const totalPagado = pedidos.reduce((acc, {monto, estado}) => acc + (estado === "pagado" ? monto: 0), 0);
// console.log(totalPagado);

// 12 suma solo los sueldos de los empleados activos
// const empleados = [
//     { nombre: "Dorian", sueldo: 800000, activo: true },
//     { nombre: "Ana", sueldo: 600000, activo: false },
//     { nombre: "Pedro", sueldo: 900000, activo: true },
//     { nombre: "Carolina", sueldo: 1200000, activo: true }
// ];
// const totalSueldosActivos = empleados.reduce((acc, { activo, sueldo}) => acc + (activo ? sueldo : 0), 0);
// console.log(totalSueldosActivos);

// 13 cuente cuántos productos NO tienen stock 
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 5 },
//     { nombre: "Mouse", precio: 12000, stock: 0 },
//     { nombre: "Monitor", precio: 180000, stock: 3 },
//     { nombre: "Silla", precio: 60000, stock: 0 }
// ];
// const cantidadSinStock = productos.reduce((acc, {stock})=> acc + (stock === 0),0);
// console.log(cantidadSinStock);

//14 sumar solo los montoa de las ventas de enero
// const ventas = [
//     { producto: "Teclado", monto: 25000, mes: "enero" },
//     { producto: "Mouse", monto: 12000, mes: "febrero" },
//     { producto: "Monitor", monto: 180000, mes: "enero" },
//     { producto: "Silla", monto: 60000, mes: "enero" },
//     { producto: "Notebook", monto: 900000, mes: "febrero" }
// ];
// const totalEnero = ventas.reduce((acc, { mes, monto }) => acc + (mes === "enero" ? monto : 0),0);
// console.log(totalEnero);

// 15 sumar solo los puntos de usuario premium
// const usuarios = [
//     { nombre: "Dorian", puntos: 150, premium: true },
//     { nombre: "Ana", puntos: 200, premium: false },
//     { nombre: "Pedro", puntos: 300, premium: true },
//     { nombre: "Carolina", puntos: 100, premium: true }
// ];
// const puntosPremium = usuarios.reduce((acc, {puntos, premium}) => acc + (premium === true ? puntos : 0), 0);
// console.log(puntosPremium);

// 16 sumar valor total (precio * cantidad) de solo los productos disponibles
// const productos = [
//     { nombre: "Teclado", precio: 20000, cantidad: 2, disponible: true },
//     { nombre: "Mouse", precio: 15000, cantidad: 3, disponible: false },
//     { nombre: "Monitor", precio: 100000, cantidad: 1, disponible: true },
//     { nombre: "Silla", precio: 50000, cantidad: 4, disponible: true }
// ];
// const totalDisponibles = productos.reduce((acc, { precio, cantidad, disponible }) => acc + ( disponible ? cantidad * precio : 0), 0);
// console.log(totalDisponibles);

// 17 sumar inscritos de solo los cursos activos
// const cursos = [
//     { titulo: "JavaScript", inscritos: 120, activo: true },
//     { titulo: "Python", inscritos: 80, activo: false },
//     { titulo: "Java", inscritos: 200, activo: true },
//     { titulo: "Go", inscritos: 50, activo: true }
// ];
// const totalInscritosActivos = cursos.reduce((acc, {activo, inscritos}) => acc + (activo === true ? inscritos : 0), 0);
// console.log(totalInscritosActivos);

// 18 sumar los sueldo de solo los empleados con cargo developer
// const empleados = [
//     { nombre: "Dorian", sueldo: 700000, cargo: "developer" },
//     { nombre: "Ana", sueldo: 900000, cargo: "manager" },
//     { nombre: "Pedro", sueldo: 800000, cargo: "developer" },
//     { nombre: "Carolina", sueldo: 1200000, cargo: "developer" }
// ];
// const totalDevelopers = empleados.reduce((acc, {cargo, sueldo}) => acc + (cargo === "developer" ? sueldo : 0), 0);
// console.log(totalDevelopers);

// 19 sumar los precio con IVA (19%) de solo los productos de categoria gaming
// const productos = [
//     { nombre: "Teclado", precio: 25000, categoria: "gaming" },
//     { nombre: "Mouse", precio: 15000, categoria: "oficina" },
//     { nombre: "Monitor", precio: 180000, categoria: "gaming" },
//     { nombre: "Silla", precio: 60000, categoria: "gaming" }
// ];
// const totalGamingConIVA = productos.reduce((acc, {categoria, precio}) => acc + (categoria === "gaming" ? (Math.round(precio * 1.19 )) : 0), 0);
// console.log(totalGamingConIVA)

// 20 sumar el valor total precio por cantidad de las ventas pagadas
// const ventas = [
//     { producto: "Teclado", precio: 20000, cantidad: 3, pagada: true },
//     { producto: "Mouse", precio: 15000, cantidad: 2, pagada: false },
//     { producto: "Monitor", precio: 100000, cantidad: 1, pagada: true },
//     { producto: "Silla", precio: 50000, cantidad: 4, pagada: true }
// ];
// const totalPagado = ventas.reduce((acc, { pagada, precio, cantidad}) => acc +(pagada ? (precio * cantidad):0),0);
// console.log(totalPagado);

// REDUCE COMBINADA CON FILTER Y MAP
// 1 filter + reduce ejemplo
// const empleados = [
//     { nombre: "Dorian", sueldo: 800000, activo: true },
//     { nombre: "Ana", sueldo: 600000, activo: false },
//     { nombre: "Pedro", sueldo: 900000, activo: true }
// ];
// const total = empleados
//     .filter(({activo}) => activo)
//     .reduce((acc, { sueldo}) => acc + sueldo, 0);
// console.log(total);

// map + reduce : Aplica IVA a los precios y suma el total
// const productos = [
//     { nombre: "Teclado", precio: 20000 },
//     { nombre: "Mouse", precio: 15000 }
// ];
// const total = productos
//     .map(({precio}) => precio * 1.19)
//     .reduce((acc, precio) => acc + precio, 0);
// console.log(Math.round(total));

// filter + map + reduce : de los productos con stock aplica descuento y suma el total

// const productos = [
//  { nombre: "Teclado", precio: 20000, stock: 0 },
//  { nombre: "Mouse", precio: 15000, stock: 5 },
//  { nombre: "Silla", precio: 150000, stock: 5 }
// ];
// const total = productos
//     .filter(({stock}) => stock > 0)
//     .map(({ precio })=> precio * 0.9)
//     .reduce(( acc, precio) => acc + precio, 0);
// console.log(total);

// ejercicio 1 filter con reduce: sumar los montos SOLO de ventas pagadas
// const ventas = [
//     { producto: "Teclado", monto: 25000, pagada: true },
//     { producto: "Mouse", monto: 12000, pagada: false },
//     { producto: "Monitor", monto: 180000, pagada: true },
//     { producto: "Silla", monto: 60000, pagada: true }
// ];
// const totalPagado = ventas
//     .filter(({pagada}) =>pagada)
//     .reduce((acc, {monto}) => acc + monto, 0);
// console.log(totalPagado);

// 2 crea total con Iva que: tranforme cada precio aplicandole el IVA, 
// sume todos los productos con iva, redondee al final el resultado con Math..

// const productos = [
//     { nombre: "Teclado", precio: 20000 },
//     { nombre: "Mouse", precio: 15000 },
//     { nombre: "Monitor", precio: 100000 }
// ];
// const totalConIVA = productos
//     .map(({precio}) => precio * 1.19)
//     .reduce((acc, precio) => acc + precio, 0);
// console.log(Math.round(totalConIVA));

// ejercicio 3 crea totalGaming que:
//  filtre los productos gaming con stock 0
// tranforme cada uno aplicando el 0.9 de descuento a su precio
// sume todos los valore
// redondee al final con Math
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 5, categoria: "gaming" },
//     { nombre: "Mouse", precio: 12000, stock: 0, categoria: "gaming" },
//     { nombre: "Monitor", precio: 180000, stock: 3, categoria: "oficina" },
//     { nombre: "Silla", precio: 60000, stock: 2, categoria: "gaming" },
//     { nombre: "Notebook", precio: 900000, stock: 4, categoria: "gaming" }
// ];
// const totalGaming = productos
//     .filter(({stock, categoria}) => stock > 0 && categoria === "gaming")
//     .map(({precio}) => precio * 0.9)
//     .reduce((acc, precio) => acc + precio, 0);
// console.log(Math.round(totalGaming));

// // como verifico que los valores sean los correctos?? imprimir los pasos intermedios
// const paso1 = productos.filter(({ stock, categoria }) => stock > 0 && categoria === "gaming");
// console.log("Después del filter:", paso1);

// const paso2 = paso1.map(({ precio }) => precio * 0.9);
// console.log("Después del map:", paso2);

// const paso3 = paso2.reduce((acc, precio) => acc + precio, 0);
// console.log("Después del reduce:", paso3);

// 4 crea totalNomina que:
// filtre developer activos
// transforme cada uno aplicando el 20% de aumento sueldo*1.2
//sume todos los sueldo con aumento
// redondee el resultado final

// const empleados = [
//     { nombre: "Dorian", sueldo: 800000, cargo: "developer", activo: true },
//     { nombre: "Ana", sueldo: 600000, cargo: "designer", activo: true },
//     { nombre: "Pedro", sueldo: 1000000, cargo: "developer", activo: false },
//     { nombre: "Carolina", sueldo: 900000, cargo: "developer", activo: true },
//     { nombre: "Javier", sueldo: 700000, cargo: "developer", activo: true }
// ];
// const totalNomina = empleados
//     .filter(({activo, cargo})=> activo && cargo === "developer")
//     .map(({sueldo}) => sueldo * 1.2)
//     .reduce((acc, sueldo) => acc + sueldo, 0);
// console.log(Math.round(totalNomina));

//5 crear valorInventario que sume los precios SOLO de los productos con stock>0 
// const productos = [
//     { nombre: "Teclado", precio: 25000, stock: 10 },
//     { nombre: "Mouse", precio: 15000, stock: 0 },
//     { nombre: "Monitor", precio: 180000, stock: 5 },
//     { nombre: "Silla", precio: 60000, stock: 0 },
//     { nombre: "Notebook", precio: 900000, stock: 2 }
// ];
// const valorInventario = productos
//     .filter(({stock}) => stock > 0)
//     .reduce((acc, {precio}) => acc + precio, 0);
// console.log(valorInventario);

// const paso1 = productos.filter(({stock}) => stock > 0)
// console.log(paso1);

// const paso2 = productos.reduce((acc, {precio}) => acc + precio, 0);
// console.log(paso2);

// 6 map + reduce: crear totalConComision que:
// transforme cada monto sumandole una comision de 1.05
// sume todos los montos con comision
// redondea al final
// const ventas = [
//     { producto: "Teclado", monto: 20000 },
//     { producto: "Mouse", monto: 15000 },
//     { producto: "Monitor", monto: 100000 }
// ];

// const totalConComision = ventas
//     .map(({monto}) => monto * 1.05)
//     .reduce((acc, monto) => acc + monto, 0);
// console.log(Math.round(totalConComision));

// 7 filter + map + reduce
// filter usuarios activos
// transforme cada comprar con IVA 1.19
// SUME todas las compras con IVA
// redondee al final
// const usuarios = [
//     { nombre: "Dorian", compras: 50000, activo: true },
//     { nombre: "Ana", compras: 30000, activo: false },
//     { nombre: "Pedro", compras: 80000, activo: true },
//     { nombre: "Carolina", compras: 20000, activo: true }
// ];
// const totalConIVA = usuarios
//     .filter(({activo}) => activo)
//     .map(({compras}) => compras * 1.19)
//     .reduce((acc, compras) => acc + compras, 0);
// console.log(Math.round(totalConIVA));

// 8 filter + reduce
// crea totalRecaudado 
// sume los totales Solo de los pedidos pagados 
// const pedidos = [
//     { cliente: "Dorian", total: 30000, estado: "pagado" },
//     { cliente: "Ana", total: 50000, estado: "pendiente" },
//     { cliente: "Pedro", total: 80000, estado: "pagado" },
//     { cliente: "Carolina", total: 120000, estado: "cancelado" },
//     { cliente: "Javier", total: 40000, estado: "pagado" }
// ];
// const totalRecaudado = pedidos
//     .filter(({estado}) => estado === "pagado")
//     .reduce((acc, {total})=> acc + total, 0);
// console.log(totalRecaudado);

// 9 los 3
// crea totalGaming que
// filtre los productos con categoria gaming
// transforme cada 1 en su valor total precio * cantidad
// sume todos los valores

// const productos = [
//     { nombre: "Teclado", precio: 20000, cantidad: 3, categoria: "gaming" },
//     { nombre: "Mouse", precio: 15000, cantidad: 2, categoria: "oficina" },
//     { nombre: "Monitor", precio: 100000, cantidad: 1, categoria: "gaming" },
//     { nombre: "Silla", precio: 50000, cantidad: 4, categoria: "gaming" }
// ];
// const totalGaming = productos
//     .filter(({categoria}) => categoria === "gaming")
//     .map(({precio, cantidad}) => (precio * cantidad))
//     .reduce((acc, precio) => acc + precio, 0);
// console.log(totalGaming);

// crea totalBonos
// filtre los empleados activos con antiguedad mayor o igual a 5
// transforme cada uno en su bono sueldo * 0.1
// sume todos los bonos 
// redondee el resultado
// const empleados = [
//     { nombre: "Dorian", sueldo: 700000, antiguedad: 6, activo: true },
//     { nombre: "Ana", sueldo: 500000, antiguedad: 2, activo: true },
//     { nombre: "Pedro", sueldo: 900000, antiguedad: 8, activo: false },
//     { nombre: "Carolina", sueldo: 800000, antiguedad: 5, activo: true }
// ];
// const totalBonos = empleados
//     .filter(({activo, antiguedad}) => activo && antiguedad >= 5)
//     .map(({sueldo}) => sueldo * 0.1)
//     .reduce((acc, sueldo) => acc + sueldo, 0)
// console.log(Math.round(totalBonos));

// Crea cantidadAdultosActivos que cuente cuántos usuarios 
// son mayores de edad (18+) Y están activos, usando filter + reduce.
// const usuarios = [
//     { nombre: "Dorian", edad: 25, activo: true },
//     { nombre: "Ana", edad: 17, activo: true },
//     { nombre: "Pedro", edad: 40, activo: true },
//     { nombre: "Carolina", edad: 15, activo: false }
// ];
// const cantidadAdultosActivos = usuarios
//     .filter(({edad, activo}) => edad >= 18 && activo)
//     .reduce((acc) => acc + 1, 0);
// console.log(cantidadAdultosActivos);

//Crea totalConDescuento que:
//Transforme cada precio aplicando un 15% de descuento (× 0.85).
//Sume todos los precios con descuento.
//Redondea el resultado final.

// const productos = [
//     { nombre: "Teclado", precio: 19990 },
//     { nombre: "Mouse", precio: 9990 },
//     { nombre: "Monitor", precio: 149990 }
// ];
// const totalConDescuento = productos
//     .map(({precio}) => precio * 0.85)
//     .reduce((acc, precio) => acc + precio ,0);
// console.log(Math.round(totalConDescuento));

//Crea ingresosTotales que:
//Filtre los cursos activos.
//Transforme cada uno en sus ingresos (precio × inscritos).
//Sume todos los ingresos.
// const cursos = [
//     { titulo: "JavaScript", precio: 50000, inscritos: 120, activo: true },
//     { titulo: "Python", precio: 60000, inscritos: 80, activo: false },
//     { titulo: "Java", precio: 45000, inscritos: 200, activo: true },
//     { titulo: "Go", precio: 70000, inscritos: 50, activo: true }
// ];
// const ingresosTotales = cursos
//     .filter(({activo}) => activo)
//     .map(({precio, inscritos})=> precio * inscritos)
//     .reduce((acc, precio) => acc + precio, 0);
// console.log(ingresosTotales);


// Crea totalPlanilla que:
// Filtre los empleados activos.
// Transforme cada uno en su sueldo con un aumento del 30% (× 1.3).
// Sume todos los sueldos con aumento.
// Redondea el resultado.

// const empleados = [
//     { nombre: "Dorian", sueldo: 800000, cargo: "senior", activo: true },
//     { nombre: "Ana", sueldo: 500000, cargo: "junior", activo: true },
//     { nombre: "Pedro", sueldo: 1000000, cargo: "senior", activo: false },
//     { nombre: "Carolina", sueldo: 600000, cargo: "junior", activo: true }
// ];
// const totalPlanilla = empleados
//     .filter(({activo}) => activo)
//     .map(({sueldo}) => sueldo * 1.3)
//     .reduce((acc, sueldo)=> acc + sueldo, 0);
// console.log(Math.round(totalPlanilla));

// Crea totalFacturado que:
// Filtre los clientes premium y activos.
// Transforme cada uno en el total de sus compras con IVA (suma de sus compras, y ese total × 1.19).
// Sume todos esos totales.
// Redondea el resultado.

const clientes = [
    { nombre: "Dorian", compras: [20000, 30000], plan: "premium", activo: true },
    { nombre: "Ana", compras: [50000], plan: "basico", activo: true },
    { nombre: "Pedro", compras: [80000, 120000], plan: "premium", activo: false },
    { nombre: "Carolina", compras: [40000, 60000, 30000], plan: "premium", activo: true },
    { nombre: "Javier", compras: [100000], plan: "premium", activo: true }
];
const totalFacturado = clientes
    .filter(({activo, plan}) => activo && plan === "premium")
    .map(({compras}) => {
        let suma = 0;
        for(let i = 0; i < compras.length; i++){
            suma = suma + compras[i]
        }
        return suma * 1.19  
    })
    .reduce((acc, total) => acc + total, 0);

console.log(Math.round(totalFacturado));




























