const resultado = ventas.reduce((acc, {vendedor, monto, comision}) =>{
    if(!acc[vendedor]){
        acc[vendedor] = {
            cantidadVentas: 1,
            totalMonto: monto,
            totalComision: comision
        }
    }else{
        acc[vendedor].cantidadVentas++;
        acc[vendedor].totalMonto += monto;
        acc[vendedor].totalComision += comision;
    }
    return acc
},
{}
)
// Calcular promedioVenta
Object.keys(resultado).forEach((vendedor) =>{
    resultado[vendedor].promedioVenta =
        resultado[vendedor].totalMonto / resultado[vendedor].cantidadVentas
});

// Buscar comisión máxima
const maxComision = Math.max(...Object.values(resultado)
                                        .map(({totalComision}) => totalComision));
// Encontrar vendedor ganador
const mejorVendedor = Object.keys(resultado)
                            .find((vendedor) => resultado[vendedor].totalComision === maxComision);

console.log(resultado);
console.log(`Mejor vendedor ${mejorVendedor}`);