// Una empresa quiere saber las metricas por vendedor
// const ventas = [
//     {
//         vendedor: "Dorian",
//         monto: 1200,
//         cliente: "Banco Azul"
//     },
//     {
//         vendedor: "Carolina",
//         monto: 800,
//         cliente: "Retail Plus"
//     },
//     {
//         vendedor: "Dorian",
//         monto: 600,
//         cliente: "Seguros Pro"
//     },
//     {
//         vendedor: "Carolina",
//         monto: 1000,
//         cliente: "Banco Azul"
//     },
//     {
//         vendedor: "Dorian",
//         monto: 400,
//         cliente: "Retail Plus"
//     }
// ];
// Agrupar por vendedor
// Guardar cantidadVentas
// Guardar totalMonto
// const agruparPorVendedor = ventas.reduce((acc, {vendedor, monto}) =>{
//     if(!acc[vendedor]){
//         acc[vendedor] = {
//             cantidadVentas: 1,
//             totalMonto: monto
//         }
//     }else{
//         acc[vendedor].cantidadVentas++;
//         acc[vendedor].totalMonto += monto
//     }
//     return acc;
// },
// {}
// )
// // Calcular promedioVenta
// Object.keys(agruparPorVendedor).forEach((vendedor) =>{
//     agruparPorVendedor[vendedor].promedioVenta = 
//         agruparPorVendedor[vendedor].totalMonto / agruparPorVendedor[vendedor].cantidadVentas;
// })
// console.log(agruparPorVendedor);

//EJEMPLO DE COMO CALCULAR AGRUPACIONES CON ENCONTRAR QUIEN VENDIO MÁS
// const ventas = [
//     {
//         vendedor: "Dorian",
//         monto: 1200
//     },
//     {
//         vendedor: "Carolina",
//         monto: 800
//     },
//     {
//         vendedor: "Dorian",
//         monto: 600
//     },
//     {
//         vendedor: "Carolina",
//         monto: 1000
//     },
//     {
//         vendedor: "Dorian",
//         monto: 400
//     }
// ];
// agrupar y calcular métricas
// const resultado = ventas.reduce((acc, { vendedor, monto }) => {

//     if (!acc[vendedor]) {

//         acc[vendedor] = {
//             cantidadVentas: 1,
//             totalMonto: monto
//         };

//     } else {
//         acc[vendedor].cantidadVentas++;
//         acc[vendedor].totalMonto += monto;
//     }
//     return acc;

// }, {});

// // calcular promedio
// Object.keys(resultado).forEach((vendedor) => {

//     resultado[vendedor].promedioVenta =
//         resultado[vendedor].totalMonto /
//         resultado[vendedor].cantidadVentas;

// });

// // buscar mayor monto total
// const maxMonto = Math.max(
//     ...Object.values(resultado)
//         .map(({ totalMonto }) => totalMonto)
// );
// //encontrar el vendedor
// const mejorVendedor = Object.keys(resultado)
//     .find(
//         (vendedor) =>
//             resultado[vendedor].totalMonto === maxMonto
//     );
// console.log(resultado);
// console.log("Mejor vendedor:", mejorVendedor);


// el gerente quiere saber: 
//metricas por vendedor
// qué vendedor generó mas dinero
// const ventas = [
//     {
//         vendedor: "Dorian",
//         monto: 1500
//     },
//     {
//         vendedor: "Carolina",
//         monto: 800
//     },
//     {
//         vendedor: "Dorian",
//         monto: 700
//     },
//     {
//         vendedor: "Jhon",
//         monto: 2500
//     },
//     {
//         vendedor: "Carolina",
//         monto: 1200
//     },
//     {
//         vendedor: "Jhon",
//         monto: 500
//     }
// ];
// Agrupar por vendedor
// Guardar cantidadVentas
// Guardar totalMonto
// const resultado = ventas.reduce((acc, {vendedor, monto}) =>{
//     if(!acc[vendedor]){
//         acc[vendedor] = {
//             cantidadVentas: 1,
//             totalMonto: monto
//         }
//     }else{
//         acc[vendedor].cantidadVentas++;
//         acc[vendedor].totalMonto += monto;
//     }
//     return acc;
// },
// {}
// );
// // Calcular promedioVenta
// Object.keys(resultado).forEach((vendedor) =>{
//     resultado[vendedor].promedioVenta =
//         resultado[vendedor].totalMonto / resultado[vendedor].cantidadVentas
// })
// // Obtener monto máximo
// const maxMonto = Math.max(...Object.values(resultado)
//                     .map(({totalMonto}) => totalMonto))
// // Encontrar vendedor ganador
// const mejorVendedor = Object.keys(resultado)
//             .find((vendedor) =>resultado[vendedor].totalMonto === maxMonto
//         );
// console.log(resultado);
// console.log(`Mejor vendedor ${mejorVendedor}`);

// Que cliente compró más
// const ventas = [
//     {
//         cliente: "Banco Azul",
//         monto: 1200
//     },
//     {
//         cliente: "Retail Plus",
//         monto: 800
//     },
//     {
//         cliente: "Banco Azul",
//         monto: 600
//     },
//     {
//         cliente: "Seguros Pro",
//         monto: 2500
//     },
//     {
//         cliente: "Retail Plus",
//         monto: 1200
//     },
//     {
//         cliente: "Seguros Pro",
//         monto: 500
//     }
// ];
// // Agrupar por cliente
// // Guardar cantidadCompras
// // Guardar totalMonto
// const resultado = ventas.reduce((acc, {cliente,monto}) =>{
//     if(!acc[cliente]){
//         acc[cliente] = {
//             cantidadCompras: 1,
//             montoTotal: monto
//         }
//     }else{
//         acc[cliente].cantidadCompras++;
//         acc[cliente].montoTotal += monto;
//     }
//     return acc;
// },
// {}
// )
// // Calcular promedioCompra
// Object.keys(resultado).forEach((cliente) =>{
//     resultado[cliente].promedioComprar =
//         resultado[cliente].montoTotal / resultado[cliente].cantidadCompras
// })

// // Obtener monto máximo
// const maxMonto = Math.max(...Object.values(resultado)
//                 .map(({montoTotal}) =>montoTotal));
// // Encontrar cliente ganador
// const mejorCliente = Object.keys(resultado)
//                     .find((cliente) => resultado[cliente].montoTotal === maxMonto);
// console.log(resultado);
// console.log(`Mejor cliente ${mejorCliente}`);

// que categoria de producto vende mas dinero
// const ventas = [
//     {
//         categoria: "Tecnología",
//         monto: 1200
//     },
//     {
//         categoria: "Hogar",
//         monto: 800
//     },
//     {
//         categoria: "Tecnología",
//         monto: 600
//     },
//     {
//         categoria: "Deportes",
//         monto: 2500
//     },
//     {
//         categoria: "Hogar",
//         monto: 1200
//     },
//     {
//         categoria: "Deportes",
//         monto: 500
//     }
// ];
// // Agrupar por categoria
// // Guardar cantidadVentas
// // Guardar totalMonto
// const resultado = ventas.reduce((acc, {categoria, monto}) =>{
//     if(!acc[categoria]){
//         acc[categoria] = {
//             cantidadVentas: 1,
//             totalMonto: monto
//         }
//     }else{
//         acc[categoria].cantidadVentas++;
//         acc[categoria].totalMonto += monto;
//     }
//     return acc;
// },
// {}
// )

// // Calcular promedioVenta
// Object.keys(resultado).forEach((categoria) =>{
//     resultado[categoria].promedioVentas =
//                             resultado[categoria].totalMonto / resultado[categoria].cantidadVentas;
// })
// console.log(resultado);
// // Obtener monto máximo
// const maxMonto = Math.max(...Object.values(resultado)
//                                 .map(({totalMonto}) => totalMonto))
// // Encontrar categoría ganadora
// const mejorCategoria = Object.keys(resultado)
//                             .find((categoria) => resultado[categoria].totalMonto === maxMonto);
// console.log(resultado);
// console.log(`Mejor categoria ${mejorCategoria}`);


// const ventas = [
//     {
//         vendedor: "Dorian",
//         monto: 1000,
//         comision: 100
//     },
//     {
//         vendedor: "Carolina",
//         monto: 1200,
//         comision: 120
//     },
//     {
//         vendedor: "Dorian",
//         monto: 500,
//         comision: 50
//     },
//     {
//         vendedor: "Jhon",
//         monto: 2000,
//         comision: 200
//     },
//     {
//         vendedor: "Carolina",
//         monto: 800,
//         comision: 80
//     },
//     {
//         vendedor: "Jhon",
//         monto: 1000,
//         comision: 100
//     }
// ];
// Agrupar por vendedor
// Guardar cantidadVentas
// Guardar totalMonto
// Guardar totalComision
// const resultado = ventas.reduce((acc, {vendedor, monto, comision}) =>{
//     if(!acc[vendedor]){
//         acc[vendedor] = {
//             cantidadVentas: 1,
//             totalMonto: monto,
//             totalComision: comision
//         }
//     }else{
//         acc[vendedor].cantidadVentas++;
//         acc[vendedor].totalMonto += monto;
//         acc[vendedor].totalComision += comision;
//     }
//     return acc
// },
// {}
// )
// // Calcular promedioVenta
// Object.keys(resultado).forEach((vendedor) =>{
//     resultado[vendedor].promedioVenta =
//         resultado[vendedor].totalMonto / resultado[vendedor].cantidadVentas
// });

// // Buscar comisión máxima
// const maxComision = Math.max(...Object.values(resultado)
//                                         .map(({totalComision}) => totalComision));
// // Encontrar vendedor ganador
// const mejorVendedor = Object.keys(resultado)
//                             .find((vendedor) => resultado[vendedor].totalComision === maxComision);

// console.log(resultado);
// console.log(`Mejor vendedor ${mejorVendedor}`);

// const ventas = [
//     {
//         vendedor: "Dorian",
//         monto: 1000,
//         comision: 100
//     },
//     {
//         vendedor: "Carolina",
//         monto: 1800,
//         comision: 180
//     },
//     {
//         vendedor: "Dorian",
//         monto: 500,
//         comision: 50
//     },
//     {
//         vendedor: "Jhon",
//         monto: 2000,
//         comision: 200
//     },
//     {
//         vendedor: "Carolina",
//         monto: 700,
//         comision: 70
//     },
//     {
//         vendedor: "Jhon",
//         monto: 1200,
//         comision: 120
//     }
// ];
// la gerencia quiere saber por vendedor:
// Agrupar por vendedor
// Guardar cantidadVentas
// Guardar totalMonto
// Guardar totalComision
// Guardar ventaMasAlta
// const resultado = ventas.reduce((acc, {vendedor, monto, comision}) =>{
//     if(!acc[vendedor]){
//         acc[vendedor] = {
//             cantidadVentas: 1,
//             totalMonto : monto,
//             totalComision: comision
//         }
//     }else{
//         acc[vendedor].cantidadVentas++;
//         acc[vendedor].totalMonto += monto;
//         acc[vendedor].totalComision  += comision;
//     }
//     return acc;
// },
// {}
// );

// Calcular promedioVenta
// Object.keys(resultado).forEach((vendedor)=> {
//     resultado[vendedor].promedioVenta = 
//         resultado[vendedor].totalMonto / resultado[vendedor].cantidadVentas
// });
// // Buscar monto máximo
// const maxMonto = Math.max(
//     ...Object.values(resultado)
//     .map(({ totalMonto })=> totalMonto)
// );
// // Encontrar vendedor ganador
// const mejorVendedor = Object.keys(resultado)
//     .find(
//         (vendedor) => resultado[vendedor].totalMonto === maxMonto
//     );
// console.log(resultado);
// console.log(`Mejor vendedor: ${mejorVendedor}`);

// const ventas = [
//     {
//         categoria: "Tecnología"
//     },
//     {
//         categoria: "Hogar"
//     },
//     {
//         categoria: "Tecnología"
//     },
//     {
//         categoria: "Deportes"
//     },
//     {
//         categoria: "Tecnología"
//     },
//     {
//         categoria: "Hogar"
//     }
// ];

// // Agrupar por categoriax
// // Guardar cantidadVentas
// const agruparPorCategoria = ventas.reduce((acc, {categoria}) =>{
//     if(!acc[categoria]){
//         acc[categoria] = {
//             cantidadVentas:1
//         }
//     }else{
//         acc[categoria].cantidadVentas++;
//     }
//     return acc;
// },
// {}
// );
// // Buscar cantidad máxima
// const maxVentas = Math.max(
//     ...Object.values(agruparPorCategoria)
//     .map(({ cantidadVentas}) => cantidadVentas)
// );

// // Encontrar categoría ganadora
// const categoriaGanadora = Object.keys(agruparPorCategoria)
//                     .find(
//                         (categoria) =>
//                             agruparPorCategoria[categoria].cantidadVentas === maxVentas
//                     );

// console.log(agruparPorCategoria);
// console.log(categoriaGanadora);

//EMPRESA TIENE VARIAS SUCURSALES QUIERE SABER
// CUANTAS VENTAS TIENE CADA SUCURSAL
// QUÉ SUCURSAL TIENE MÁS VENTAS
// const ventas = [
//     {
//         sucursal: "Valparaíso"
//     },
//     {
//         sucursal: "Santiago"
//     },
//     {
//         sucursal: "Valparaíso"
//     },
//     {
//         sucursal: "Viña del Mar"
//     },
//     {
//         sucursal: "Valparaíso"
//     },
//     {
//         sucursal: "Santiago"
//     },
//     {
//         sucursal: "Santiago"
//     }
// ];
// // Agrupar por sucursal
// // Guardar cantidadVentas
// const resultado = ventas.reduce((acc,{sucursal}) =>{
//     if(!acc[sucursal]){
//         acc[sucursal] = {
//             cantidadVentas: 1
//         }
//     }else{
//         acc[sucursal].cantidadVentas++;
//     }
//     return acc;
// },
// {}
// );

// // Buscar cantidad máxima
// const maxVentas = Math.max(
//         ...Object.values(resultado)
//         .map(({cantidadVentas}) => cantidadVentas)
// );
// // Encontrar sucursal ganadora
// const sucursalGanadora = Object.keys(resultado)
//             .find(
//                 (sucursal) =>
//                     resultado[sucursal].cantidadVentas === maxVentas
//             );
// console.log(resultado);
// console.log(sucursalGanadora);

// la empresa quiere saber cuantas veces se vendió un producto
// qué producto fue el más vendido
// const ventas = [
//     {
//         producto: "Laptop"
//     },
//     {
//         producto: "Mouse"
//     },
//     {
//         producto: "Laptop"
//     },
//     {
//         producto: "Teclado"
//     },
//     {
//         producto: "Laptop"
//     },
//     {
//         producto: "Mouse"
//     },
//     {
//         producto: "Mouse"
//     }
// ];
// // Agrupar por producto
// // Guardar cantidadVentas
// const agruparPorProducto = ventas.reduce((acc, {producto})=>{
//     if(!acc[producto]){
//         acc[producto] = {
//             cantidadVentas: 1
//         }
//     }else{
//         acc[producto].cantidadVentas++;
//     }
//     return acc;
// },
// {}
// )
// // Buscar cantidad máxima
// const maxVentas = Math.max(
//         ...Object.values(agruparPorProducto)
//         .map(({cantidadVentas}) => cantidadVentas)
// );
// // Encontrar producto ganador
// const productoGanador = Object.keys(agruparPorProducto)
//                 .find(
//                     (producto) =>
//                         agruparPorProducto[producto].cantidadVentas === maxVentas
//                 );

// console.log(agruparPorProducto);
// console.log(productoGanador);

// cantidad de personas
// const colaboradores = [
//     {
//         equipo: "Backend"
//     },
//     {
//         equipo: "Frontend"
//     },
//     {
//         equipo: "Backend"
//     },
//     {
//         equipo: "QA"
//     },
//     {
//         equipo: "Backend"
//     },
//     {
//         equipo: "Frontend"
//     },
//     {
//         equipo: "Frontend"
//     },
//     {
//         equipo: "Frontend"
//     }
// ];
// // Agrupar por equipo
// // Guardar cantidadPersonas
// const agruparPorPersonas = colaboradores.reduce((acc, {equipo})=>{
//     if(!acc[equipo]){
//         acc[equipo] = {
//             cantidadPersonas: 1
//         }
//     }else{
//         acc[equipo].cantidadPersonas++
//     }
//     return acc;
// },
// {}
// );
// console.log(agruparPorPersonas);
// // Buscar máximo
// const maxPersonas = Math.max(
//         ...Object.values(agruparPorPersonas)
//         .map(({cantidadPersonas}) => cantidadPersonas)
// );

// // Encontrar ganador
// const equipoGanador = Object.keys(agruparPorPersonas)
//                 .find(
//                     (equipo) =>
//                         agruparPorPersonas[equipo].cantidadPersonas === maxPersonas
//                 );
// console.log(agruparPorPersonas);
// console.log(`El equipo ganador es: ${equipoGanador}`);

// una empresa quiere saber cuantos clientes hay por ciudad y que ciudad tiene mas clientes
// const clientes = [
//     {
//         ciudad: "Valparaíso"
//     },
//     {
//         ciudad: "Santiago"
//     },
//     {
//         ciudad: "Valparaíso"
//     },
//     {
//         ciudad: "Concepción"
//     },
//     {
//         ciudad: "Valparaíso"
//     },
//     {
//         ciudad: "Santiago"
//     }
// ];
// Agrupar por ciudad
// Guardar cantidadClientes
// const agruparPorCiudad = clientes.reduce((acc, {ciudad}) =>{
//     if(!acc[ciudad]){
//         acc[ciudad] = {
//             cantidadClientes: 1
//         }
//     }else{
//         acc[ciudad].cantidadClientes++;
//     }
//     return acc;
// },
// {}
// )
// // Buscar máximo
// const maxClientes = Math.max(...Object.values(agruparPorCiudad)
//                     .map(({cantidadClientes}) => cantidadClientes)
//                 );

// console.log(agruparPorCiudad);

// // Encontrar ciudad ganadora
// const ciudadGanadora = Object.keys(agruparPorCiudad)
//                         .find((ciudad) => agruparPorCiudad[ciudad].cantidadClientes === maxClientes
//                     );
// console.log(agruparPorCiudad);
// console.log(`La cuidad con más clientes es: ${ciudadGanadora}`);


// PARA RECORDAR: Los tres (keys, values y entries) devuelven arrays.
// const ciudades = {
//     Valparaiso: {
//         cantidadClientes: 3
//     },
//     Santiago: {
//         cantidadClientes: 2
//     }
// };
//Object.keys(ciudades) trae las llaves Object.keys(ciudades) como resultado arrays de strings,
// object keys array de llaves
//no devuelve un objeto, devuelve un array cuyos elemenos son objetos

// Object.values(ciudades) trae los valores:
// [
//     {
//         cantidadClientes: 3
//     },
//     {
//         cantidadClientes: 2
//     }
// ]

//Object.entries() trae la llave y el valor juntos : Object.entries(ciudades)
// [
//     [
//         "Valparaiso",
//         {
//             cantidadClientes: 3
//         }
//     ],
//     [
//         "Santiago",
//         {
//             cantidadClientes: 2
//         }
//     ]
// ]

//¿Por qué usamos values para Math.max? porque necesitamos números
// ¿Por qué usamos entries para Top 3? porque necesitamos nombre de la cuidad y cantidad de clientes al mismo tiempo

// keys = llaves

// values = valores

// entries = llave + valor