// const promesa = new Promise((resolve, reject) => {
//     resolve("Hola Mundo");
// });
// promesa.then((resultado) =>{
//         console.log(resultado);
//     });

// // 1 promise
// const obtenerMensaje = new Promise((resolve, reject) =>{
//     resolve("Hola Dorian");
// });
// obtenerMensaje.then((resultado) =>{
//         console.log(resultado);
//     })

// 2
// const obtenerUsuario = new Promise((resolve, reject) =>{
//     resolve({
//         nombre: "Dorian",
//         rol: "admin"
//     })
// });
// obtenerUsuario.then((resultado) =>{
//     console.log(resultado.nombre);
// });

//3
// const obtenerProducto = new Promise((resolve, reject) =>{
//     reject("Producto no encontrado")
// });
//     obtenerProducto
//     .then((resultado) =>{
//         console.log(resultado);
//     })
//     .catch((error) => {
// console.log(error);
// });

// 4

// const exiteProducto = true;
// const obtenerProducto = new Promise((resolve, reject) =>{
//     if(exiteProducto){
//         resolve("Producto encontrado");
//     }else{
//         reject("Producto no encontrado");
//     }
// })
//     obtenerProducto
//     .then((resultado)=>{
//         console.log(resultado)
//     })
//    .catch((error) => {
// console.log(error);
// });

// 5
// const obtenerUsuario =  new Promise((resolve, reject) =>{
//      resolve({
//         nombre: "Dorian",
//         rol: "admin",
//         activo: true
//     });
// });
//     obtenerUsuario
//         .then((resultado) =>{
//             console.log(resultado.nombre);
//             console.log(resultado.rol);
//             if(resultado.activo){
//                 console.log("Usuario activo")
//             }else{
//                 console.log("Usuario inactivo")
//             }
//         })
//         .catch((error)=>{
//             console.log(error);
// });{}

// const obtenerUsuario = new Promise((resolve, reject) => {
//     reject("Usuario no encontrado");
// });

// async function main() {
//     try {
//         const resultado = await obtenerUsuario;
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }
// }

// main();

// const obtenerMensaje = new Promise((resolve, reject) =>{
//     resolve("Buen martes Dorian")
// });
// async function main() {
//     try {
//         const resultado = await obtenerMensaje;
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//3
// const existeProducto = true;
// const obtenerProducto = new Promise((resolve,reject) => {
//     if(existeProducto){
//         resolve("Producto encontrado");
//     }else{
//         reject("Producto no encontrado");
//     }
// });
// async function main() {
//     try {
//         const resultado = await obtenerProducto;
//         console.log(resultado)
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//4
// const obtenerUsuario = new Promise((resolve, reject) => {
//     resolve({
//         nombre: "Dorian",
//         rol: "admin",
//         activo: true
//     });
// });
// async function main() {
//     try {
//         const usuarios = await obtenerUsuario;
//         console.log(usuarios.nombre);
//         console.log(usuarios.rol);
//         if (usuarios.activo) {
//         console.log("Usuario activo");
//         } else {
//         console.log("Usuario inactivo");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// main()

//5
// const obtenerUsuario = new Promise((resolve, reject) => {
//     resolve({
//         nombre: "Dorian",
//         rol: "admin",
//         activo: false
//     });
// });
// async function main() {
//     try {
//         const usuarios = await obtenerUsuario;
//         console.log(usuarios.nombre);
//         if(usuarios.activo){
//             console.log("Usuario activo");
//         }else{
//             console.log("Usuario inactivo");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//6
// const obtenerRol = new Promise((resolve, reject) => {
//     resolve("admin");
// });
// async function main() {
//     try {
//         const rol = await obtenerRol;
//         console.log(`Rol : ${rol}`)
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

// 7 
// const obtenerCurso = new Promise((resolve, reject) => {
//     resolve({
//         nombre: "Node.js",
//         activo: true
//     });
// });
// async function main() {
//     try {
//         const curso = await obtenerCurso;
//         console.log(curso.nombre);
//         if(curso.activo){
//             console.log("Curso activo");
//         }else{
//             console.log("Curso inactivo");
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//8
// const obtenerEmpleado = new Promise((resolve, reject) => {
//     resolve({
//         nombre: "Dorian",
//         cargo: "Developer",
//         activo: true
//     });
// });
// async function main() {
//     try {
//        const empleado = await obtenerEmpleado;
//        console.log(empleado.nombre);
//        console.log(empleado.cargo);
//        if(empleado.activo){
//         console.log("Empleado activo");
//        } else{
//         console.log("Empleado inactivo");
//        }
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

// 9
// const existeUsuario = false;
// const obtenerUsuario = new Promise((resolve, reject) => {
//     if (existeUsuario) {
//         resolve({
//             nombre: "Dorian"
//         });
//     } else {
//         reject("Usuario no encontrado");
//     }
// });
// async function main() {
//     try {
//        const usuario = await obtenerUsuario;
//         console.log(usuario.nombre)
       
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//10
// const obtenerMensaje = new Promise((resolve, reject) => {
//     resolve("Sigue así Dorian 🚀");
// });
// async function main() {
//     try {
//        const mensaje = await obtenerMensaje;
//        console.log(mensaje) 
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//11
// const obtenerLibro = new Promise((resolve, reject) => {
//     resolve({
//         titulo: "JavaScript para Backend",
//         autor: "Dorian",
//         disponible: true
//     });
// });
// async function main(){
//     try {
//         const libro = await obtenerLibro;
//         console.log(libro.titulo);
//         console.log(libro.autor);
//         if(libro.disponible){
//             console.log("Libro disponible");
//         }else{
//             console.log("Libro no disponible");
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//12
// const obtenerPelicula = new Promise((resolve, reject) => {
//     resolve({
//         titulo: "Matrix",
//         director: "Wachowski",
//         disponible: false
//     });
// });
// async function main(){
//     try {
//         const pelicula = await obtenerPelicula;
//         console.log(pelicula.titulo);
//         console.log(pelicula.director);
//          if(pelicula.disponible){
//             console.log("Pelicula disponible");
//          }else{
//             console.log("Pelicula no disponible");
//          }
//     } catch (error) {
//        console.log(error) 
//     }
// }
// main();

//13
// const obtenerSerie = new Promise((resolve, reject) => {
//     resolve({
//         nombre: "Breaking Bad",
//         temporadas: 5,
//         finalizada: true
//     });
// });
// async function main() {
//     try {
//         const serie = await obtenerSerie;
//         console.log(serie.nombre);
//         console.log(serie.temporadas);
//         if(serie.finalizada){
//             console.log("Serie finalizada");
//         }else{
//             console.log("Serie en emisión");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//14
// const obtenerVideojuego = new Promise((resolve, reject) => {
//     resolve({
//         nombre: "Minecraft",
//         genero: "Sandbox",
//         online: true
//     });
// });
// async function main() {
//     try {
//        const videoJuego = await obtenerVideojuego;
//        console.log(videoJuego.nombre);
//        console.log(videoJuego.genero);
//        if(videoJuego.online){
//         console.log("Juego online");
//        }else{
//         console.log("Juego offline");
//        } 
    
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//15
// const obtenerNombre = new Promise((resolve) => {
//     resolve("Dorian");
// });

// const obtenerCiudad = new Promise((resolve) => {
//     resolve("Valparaíso");
// });
// async function main() {
//     try {
//         const nombre = await obtenerNombre;
//         const ciudad = await obtenerCiudad;
//         console.log(nombre);
//         console.log(ciudad);
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//16 Promise.all : "Ejecuta todas las Promises al mismo tiempo y cuando terminen, me entregas todos los resultados."
//ejemplo
// const obtenerNombre = new Promise((resolve) => {
//     resolve("Dorian");
// });

// const obtenerCiudad = new Promise((resolve) => {
//     resolve("Valparaíso");
// });
// async function main() {
//     try {
//         const [nombre, ciudad] = await Promise.all([
//             obtenerNombre,
//             obtenerCiudad
//         ]);

//         console.log(nombre);
//         console.log(ciudad);

//     } catch (error) {
//         console.log(error);
//     }
// }

// main();

//17
// const obtenerNombre = new Promise((resolve) => {
//     resolve("Dorian");
// });

// const obtenerEdad = new Promise((resolve) => {
//     resolve(30);
// });
// async function main() {
//     try {
//         const [nombre, edad] = await Promise.all([
//             obtenerNombre,
//             obtenerEdad
//         ]);
//         console.log(nombre);
//         console.log(edad);
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//18
// const obtenerUsuario = new Promise((resolve) => {
//     resolve({
//         nombre: "Dorian",
//         rol: "admin"
//     });
// });

// const obtenerCurso = new Promise((resolve) => {
//     resolve({
//         nombre: "Node.js",
//         activo: true
//     });
// });
// async function main() {
//     try {
//         const [usuario, curso] = await Promise.all([
//             obtenerUsuario,
//             obtenerCurso
//         ])
        
//         console.log(usuario.nombre);
//         console.log(usuario.rol);
//         console.log(curso.nombre);
//         if(curso.activo){
//             console.log("Curso activo")
//         }else{
//             console.log("Curso inactivo");
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//19
// const obtenerUsuario = new Promise((resolve) => {
//     resolve({
//         nombre: "Dorian",
//         activo: true
//     });
// });

// const obtenerProyecto = new Promise((resolve) => {
//     resolve({
//         nombre: "API Backend",
//         finalizado: false
//     });
// });
// async function main() {
//     try {
//         const [usuario,proyecto] = await Promise.all([
//             obtenerUsuario,
//             obtenerProyecto
//         ]);
//         console.log(usuario.nombre);
//         if(usuario.activo){
//             console.log("Usuario activo");
//         }else{
//             console.log("Usuario inactivo");
//         }
//         console.log(proyecto.nombre);
//         if(proyecto.finalizado){
//             console.log("Proyecto finalizado");
//         }else{
//             console.log("Proyecto en progreso");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

// 3 promise
// const obtenerUsuario = new Promise((resolve) => {
//     resolve({
//         nombre: "Dorian"
//     });
// });

// const obtenerCurso = new Promise((resolve) => {
//     resolve({
//         nombre: "Node.js"
//     });
// });

// const obtenerCiudad = new Promise((resolve) => {
//     resolve({
//         nombre: "Valparaíso"
//     });
// });
// async function main() {
//     try {
//         const [usuario, curso, ciudad] = await Promise.all([
//             obtenerUsuario,
//             obtenerCurso,
//             obtenerCiudad
//         ]);

//         console.log(usuario.nombre);
//         console.log(curso.nombre);
//         console.log(ciudad.nombre);

//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//20
// const obtenerUsuario = new Promise((resolve) => {
//     resolve({
//         nombre: "Dorian",
//         activo: true
//     });
// });
// const obtenerCurso = new Promise((resolve) => {
//     resolve({
//         nombre: "Node.js",
//         activo: true
//     });
// });
// const obtenerRol = new Promise((resolve) => {
//     resolve({
//         nombre: "Admin"
//     });
// });

// async function main() {
//     try {
//         const [usuario, curso, rol] = await Promise.all([
//             obtenerUsuario,
//             obtenerCurso,
//             obtenerRol
//         ])
//         console.log(usuario.nombre);
//         if(usuario.activo){
//             console.log("Usuario activo")
//         }else{
//             console.log("Usuario inactivo")
//         }

//         console.log(curso.nombre);
//         if(curso.activo){
//             console.log("Curso activo")
//         }else{
//             console.log("Curso inactivo")
//         }

//         console.log(rol.nombre);
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//21
// const obtenerUsuario = new Promise((resolve) => {
//     resolve({
//         nombre: "Dorian",
//         edad: 30
//     });
// });

// const obtenerCurso = new Promise((resolve) => {
//     resolve({
//         nombre: "Node.js",
//         duracion: 40
//     });
// });
// async function main() {
//     try {
//         const [usuario, curso] = await Promise.all([
//             obtenerUsuario,
//             obtenerCurso
//         ]);
//         console.log(usuario.nombre);
//         console.log(curso.nombre);
//         const total = usuario.edad + curso.duracion;
//         console.log(total);
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//21
// const obtenerUsuario = new Promise((resolve) => {
//     resolve({
//         nombre: "Dorian",
//         edad: 30
//     });
// });

// const obtenerCurso = new Promise((resolve) => {
//     resolve({
//         nombre: "Node.js",
//         duracion: 40
//     });
// });

// const obtenerRol = new Promise((resolve) => {
//     resolve({
//         nombre: "Admin",
//         nivel: 5
//     });
// });

// async function main() {
//     try {
//         const [usuario, curso, rol] = await Promise.all([
//             obtenerUsuario,
//             obtenerCurso,
//             obtenerRol
//         ]);
//         console.log(usuario.nombre);
//         console.log(curso.nombre);
//         console.log(rol.nombre);
//         const total = usuario.edad + curso.duracion + rol.nivel;
//         console.log(total);
//     } catch (error) {
//         console.log(error);    
//     }
// // }
// main();

//22
// const obtenerUsuario = new Promise((resolve) => {
//     resolve({
//         nombre: "Dorian",
//         edad: 30
//     });
// });

// const obtenerCurso = new Promise((resolve) => {
//     resolve({
//         nombre: "Node.js",
//         duracion: 40
//     });
// });

// const obtenerRol = new Promise((resolve) => {
//     resolve({
//         nombre: "Admin",
//         nivel: 5
//     });
// });
// async function main() {
//     try {
//         const [usuario, curso, rol] = await Promise.all([
//             obtenerUsuario,
//             obtenerCurso,
//             obtenerRol
//         ])
//         console.log(usuario.nombre);
//         console.log(curso.nombre);
//         console.log(rol.nombre);
//         const total = usuario.edad + curso.duracion + rol.nivel;
//         console.log(total);
//         if(total >= 70){
//             console.log("Nivel Alto");
//         }else{
//             console.log("Nivel normal");
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();   

//23 
// const obtenerUsuario = new Promise((resolve) => {
//     resolve({
//         id: 1,
//         nombre: "Dorian",
//         activo: true
//     });
// });

// const obtenerCursos = new Promise((resolve) => {
//     resolve([
//         {
//             nombre: "Node.js",
//             activo: true,
//             horas: 20
//         },
//         {
//             nombre: "JavaScript",
//             activo: true,
//             horas: 15
//         },
//         {
//             nombre: "Python",
//             activo: false,
//             horas: 30
//         }
//     ]);
// });

// const obtenerRol = new Promise((resolve) => {
//     resolve({
//         nombre: "Admin",
//         nivel: 5
//     });
// });
// async function main() {
//     try {
//        const [usuario, cursos, rol] = await Promise.all([
//             obtenerUsuario,
//             obtenerCursos,
//             obtenerRol
//        ])
//        console.log(usuario.nombre);
//        console.log(rol.nombre);

//        const cursosActivos = cursos.filter(({activo}) => activo);

//        const resultadoCursos = cursosActivos.map(({nombre}) => nombre);

//        const totalHoras = cursosActivos.reduce((acc, {horas}) => acc + horas, 0);

//        const puedeEstudiar = usuario.activo && totalHoras >= 30;

//        if(puedeEstudiar){
//         console.log("Usuario habilitado para estudiar")
//        }else{
//         console.log("Usuario no habilitado")
//        }

//        const nombreUsuario = usuario.nombre;
//       const resumen = {nombreUsuario, rol: rol.nombre, cursosActivos: resultadoCursos, totalHoras, puedeEstudiar};
//       console.log(resumen);
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//24
// const obtenerUsuario = new Promise((resolve) => {
//     resolve({
//         nombre: "Dorian",
//         activo: true
//     });
// });

// const obtenerCursos = new Promise((resolve) => {
//     resolve([
//         {
//             nombre: "Node.js",
//             completado: true,
//             horas: 20
//         },
//         {
//             nombre: "JavaScript",
//             completado: false,
//             horas: 15
//         },
//         {
//             nombre: "SQL",
//             completado: true,
//             horas: 10
//         }
//     ]);
// });

// const obtenerRol = new Promise((resolve) => {
//     resolve({
//         nombre: "Admin"
//     });
// });

// async function main() {
//     try {
//         const [usuario, cursos, rol] = await Promise.all([
//             obtenerUsuario, obtenerCursos, obtenerRol
//         ]);
//         console.log(usuario.nombre);
//         console.log(rol.nombre);
//         const cursosCompletados = cursos.filter(({completado}) => completado);
//         //console.log(cursosCompletados);
//         const resultadoCursosCompletados = cursosCompletados.map(({nombre}) => nombre);
//         //console.log(resultadoCursosCompletados);
//         const totalHorasCursosCompletados = cursosCompletados.reduce((acc, {horas}) => acc + horas, 0);
//         //console.log(totalHorasCursosCompletados);
//         const progresoCompleto = totalHorasCursosCompletados >= 30;
//         if(progresoCompleto){
//             console.log("Progreso completo");
//         }else{
//             console.log("Progreso incompleto");
//         }
//         const resumen = {usuario: usuario.nombre, rol: rol.nombre, cursosCompletados: resultadoCursosCompletados, totalHoras :totalHorasCursosCompletados, progresoCompleto};
//         console.log(resumen);
//     } catch (error) {
//        console.log(error) 
//     }
// }
// main();

//25
// const obtenerUsuario = new Promise((resolve) => {
//     resolve({
//         nombre: "Dorian",
//         activo: true
//     });
// });

// const obtenerProyectos = new Promise((resolve) => {
//     resolve([
//         {
//             nombre: "API Backend",
//             activo: true,
//             horas: 20
//         },
//         {
//             nombre: "Dashboard",
//             activo: false,
//             horas: 10
//         },
//         {
//             nombre: "Autenticación",
//             activo: true,
//             horas: 15
//         }
//     ]);
// });

// const obtenerRol = new Promise((resolve) => {
//     resolve({
//         nombre: "Admin"
//     });
// });
// async function main() {
//     try {
//        const [usuario, proyectos, rol] = await Promise.all([
//         obtenerUsuario,
//         obtenerProyectos,
//         obtenerRol
//        ]) 
//        console.log(usuario.nombre);
//        console.log(rol.nombre);
//        const proyectosActivos = proyectos.filter(({activo}) => activo);
       
//        const resultadoProyectosActivos = proyectosActivos.map(({nombre}) => nombre);
       
//        const horasTotales = proyectosActivos.reduce((acc, {horas}) => acc + horas, 0);
       
//        const proyectoPrincipal = proyectosActivos.find(({nombre}) => nombre === "Autenticación");
       
//        const accesoAvanzado = usuario.activo && horasTotales >= 30;
      
//        if(accesoAvanzado){
//         console.log("Acceso avanzado habilitado");
//        }else{
//          console.log("Acceso avanzado deshabilitado");
//        }
//        const resumen = {
//                         usuario: usuario.nombre, 
//                         rol: rol.nombre, 
//                         proyectosActivos: resultadoProyectosActivos, 
//                         totalHoras: horasTotales, 
//                         proyectoPrincipal: proyectoPrincipal ? proyectoPrincipal.nombre: "No encontrado", 
//                         accesoAvanzado
//                     };
//        console.log(resumen);
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//26
// const obtenerDashboard = new Promise((resolve, reject) => {
//     resolve({
//         usuario: {
//             nombre: "Dorian",
//             activo: true
//         },
//         rol: {
//             nombre: "Admin",
//             nivel: 5
//         },
//         proyectos: [
//             {
//                 nombre: "API Backend",
//                 activo: true,
//                 horas: 20,
//                 prioridad: "alta"
//             },
//             {
//                 nombre: "Dashboard",
//                 activo: false,
//                 horas: 10,
//                 prioridad: "media"
//             },
//             {
//                 nombre: "Autenticación",
//                 activo: true,
//                 horas: 15,
//                 prioridad: "alta"
//             },
//             {
//                 nombre: "Reportes",
//                 activo: true,
//                 horas: 8,
//                 prioridad: "baja"
//             }
//         ]
//     });
// });
// async function main() {
//     try {
//        const dashboard = await obtenerDashboard;
//        console.log(dashboard.usuario.nombre);
//        console.log(dashboard.rol.nombre);
//        const proyectosActivos = dashboard.proyectos.filter(({activo}) => activo);
//        //console.log(proyectosActivos);
//        const nombresProyectos = proyectosActivos.map(({nombre}) => nombre);
//        //console.log(nombresProyectos);
//        const totalHoras = proyectosActivos.reduce((acc,{horas}) => acc + horas, 0);
//        //console.log(totalHoras);
//        const proyectoPrioridadAlta = dashboard.proyectos.find(({nombre, prioridad}) => nombre === "Autenticación" && prioridad === "alta");
//        //console.log(proyectoPrioridadAlta);
//        const accesoAvanzado = dashboard.usuario.activo && dashboard.rol.nivel >= 5 && totalHoras >=40;
//        if(accesoAvanzado){
//         console.log("Acceso avanzado habilitado");
//        }else{
//         console.log("Acceso avanzado inhabilitado");
//        }
//        //console.log(accesoAvanzado);
//        const resumen = {
//                         usuario: dashboard.usuario.nombre,
//                         rol: dashboard.rol.nombre,
//                         proyectosActivos: nombresProyectos,
//                         totalHoras,
//                         proyectoPrincipal: proyectoPrioridadAlta ? proyectoPrioridadAlta.nombre: "No encontrado",
//                         accesoAvanzado
//                     }
//         console.log(resumen);
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//27
// const obtenerDashboard = new Promise((resolve, reject) => {
//     resolve({
//         usuario: {
//             nombre: "Dorian",
//             activo: true
//         },
//         rol: {
//             nombre: "Admin",
//             nivel: 5
//         },
//         proyectos: [
//             {
//                 nombre: "API Backend",
//                 activo: true,
//                 horas: 20,
//                 prioridad: "alta",
//                 completado: true,
//                 cliente: "Banco Azul"
//             },
//             {
//                 nombre: "Dashboard Interno",
//                 activo: true,
//                 horas: 12,
//                 prioridad: "media",
//                 completado: false,
//                 cliente: "Accenture"
//             },
//             {
//                 nombre: "Sistema Legacy",
//                 activo: false,
//                 horas: 30,
//                 prioridad: "alta",
//                 completado: false,
//                 cliente: "Cliente Antiguo"
//             },
//             {
//                 nombre: "Autenticación",
//                 activo: true,
//                 horas: 18,
//                 prioridad: "alta",
//                 completado: true,
//                 cliente: "Banco Azul"
//             }
//         ]
//     });
// });
// async function main() {
//     try {
//         const dashboard = await obtenerDashboard;
//         console.log(dashboard.usuario.nombre);
//         console.log(dashboard.rol.nombre);
//         const proyectosActivos = dashboard.proyectos.filter(({activo}) => activo);
//         //console.log(proyactosActivos);
//         const nombreProyectosActivos = proyectosActivos.map(({nombre}) =>nombre);
//         //console.log(nombreProyectosActivos);
//         const totalHorasProyectos = proyectosActivos.reduce((acc, {horas}) => acc + horas, 0);
//         //console.log(totalHorasProyectos);
//         const buscarProyecto = proyectosActivos.find(({nombre}) => nombre === "Autenticación");
//         //console.log(buscarProyecto);
//         const tieneProyectoAltaPrioridad = proyectosActivos.some(({prioridad}) => prioridad === "alta");
//         //console.log(tieneProyectoAltaPrioridad);
//         const todosCompletados = proyectosActivos.every(({completado}) => completado === true);
//         //console.log(todosCompletados);
//         const accesoAvanzado = dashboard.usuario.activo && dashboard.rol.nivel >= 5 && totalHorasProyectos >= 40 && tieneProyectoAltaPrioridad;

//         if(accesoAvanzado){
//             console.log("Acceso avanzado habilitado");
//         }else{
//             console.log("Acceso avanzado deshabilitado");
//         }
//         //console.log(accesoAvanzado);
//         const resumen = {
//                             usuario: dashboard.usuario.nombre,
//                             rol: dashboard.rol.nombre,
//                             proyactosActivos: nombreProyectosActivos,
//                             totalHoras: totalHorasProyectos,
//                             proyectoPrincipal: buscarProyecto ? buscarProyecto.nombre : "No encontrado",
//                             tieneProyectoAltaPrioridad,
//                             todosCompletados,
//                             accesoAvanzado
//                         }
//         console.log(resumen);
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//28
// const obtenerDashboard = new Promise((resolve) => {
//     resolve({
//         empresa: "TechCorp",
//         empleados: [
//             {
//                 nombre: "Dorian",
//                 activo: true,
//                 tareas: 8,
//                 horas: 20,
//                 remoto: true
//             },
//             {
//                 nombre: "Carolina",
//                 activo: true,
//                 tareas: 5,
//                 horas: 15,
//                 remoto: false
//             },
//             {
//                 nombre: "Ana",
//                 activo: false,
//                 tareas: 10,
//                 horas: 30,
//                 remoto: true
//             }
//         ]
//     });
// });

// async function main() {
//     try {
//         const dashboard = await obtenerDashboard;
//         console.log(dashboard.empresa);
//         const empleadosActivos = dashboard.empleados.filter(({activo}) => activo);
//         //console.log(empleadosActivos);
//         const nombreEmpleados = empleadosActivos.map(({nombre}) => nombre);
//         //console.log(nombreEmpleados);
//         const horasTotales = empleadosActivos.reduce((acc, {horas}) => acc + horas, 0);
//         //console.log(horasTotales);
//         const buscarNombre = empleadosActivos.find(({nombre}) => nombre === "Dorian");
//         //console.log(buscarNombre);
//         const hayRemotos = empleadosActivos.some(({remoto}) => remoto);
//         //console.log(hayRemotos);
//         const todosConTareas = empleadosActivos.every(({tareas}) =>tareas >= 4);
//         //console.log(todosConTareas);
//         const equipoProductivo = horasTotales >= 30 && todosConTareas;
//         const resumen = {
//                          empresa : dashboard.empresa,
//                          empleadosActivos: nombreEmpleados,
//                          totalHoras :horasTotales,
//                          empleadoPrincipal: buscarNombre ? buscarNombre : "No encontrado",
//                          hayRemotos,
//                          todosConTareas,
//                          equipoProductivo                
//                         }
//         console.log(resumen);
//     } catch (error) {
//         console.log(error)
//     }
// }
// main();

//29 reduce como objeto

// const obtenerDashboard = new Promise((resolve) => {
//     resolve({
//         proyectos: [
//             {
//                 nombre: "API Backend",
//                 cliente: "Banco Azul",
//                 horas: 20
//             },
//             {
//                 nombre: "Autenticación",
//                 cliente: "Banco Azul",
//                 horas: 15
//             },
//             {
//                 nombre: "Dashboard",
//                 cliente: "Accenture",
//                 horas: 12
//             },
//             {
//                 nombre: "Reportes",
//                 cliente: "Accenture",
//                 horas: 8
//             },
//             {
//                 nombre: "Portal Clientes",
//                 cliente: "Retail Plus",
//                 horas: 25
//             }
//         ]
//     });
// });

// async function main() {
//     try {
//       const dashboard = await obtenerDashboard;
//       const proyectos = dashboard.proyectos;
//       const proyectosAgrupados = proyectos.reduce((acc, {cliente, nombre}) =>{
//         // acc como acumulador
//         // proyecto = elemento actual del array

//         //si el cliente aun no existe
//         if(!acc[cliente]){
//             // crea un proyecto vacio
//             acc[cliente] = [];
//         }
//         //agrega el nombre del proyecto al array del cliente correspondiente
//         acc[cliente].push(nombre);
//         // y devuelve el acumulador actualizado
//         return acc;
//         // {} valor inicial del acumulador
//       }, {});

//       console.log(proyectosAgrupados);
//     } catch (error) {
//         console.log(error)
//     }
// }
// main()

//30
// const empleados = [
//     {
//         nombre: "Dorian",
//         ciudad: "Valparaíso"
//     },
//     {
//         nombre: "Carolina",
//         ciudad: "Santiago"
//     },
//     {
//         nombre: "Jhon",
//         ciudad: "Valparaíso"
//     },
//     {
//         nombre: "Camila",
//         ciudad: "Santiago"
//     },
//     {
//         nombre: "Keyla",
//         ciudad: "Concepción"
//     }
// ];
// async function main() {
//     try {
//        const dashboard = await empleados; 
//        const agruparPorCuidad = dashboard.reduce((acc, {ciudad, nombre}) =>{
//             if(!acc[ciudad]){
//                 acc[ciudad] = [];
//             }
//             acc[ciudad].push(nombre);
//             return acc
//        }, {})
//        console.log(agruparPorCuidad);
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//31
// const proyectos = [
//     {
//         nombre: "API Backend",
//         prioridad: "alta"
//     },
//     {
//         nombre: "Autenticación",
//         prioridad: "alta"
//     },
//     {
//         nombre: "Dashboard",
//         prioridad: "media"
//     },
//     {
//         nombre: "Reportes",
//         prioridad: "baja"
//     },
//     {
//         nombre: "Portal Clientes",
//         prioridad: "media"
//     }
// ];
// async function main() {
//     try {
//         const dashboard = await proyectos;
//         const agruparPorPrioridad = dashboard.reduce((acc, {nombre, prioridad}) =>{
//             if(!acc[prioridad]){
//                 acc[prioridad] = [];
//             }
//             acc[prioridad].push(nombre);
//             return acc
//         }, {});
//         console.log(agruparPorPrioridad);
//     } catch (error) {
//       console.log(error);  
//     }
// }
// main();

// ejemplo de como contar y agrupara con reduce
// const proyectos = [
//     { nombre: "API Backend", prioridad: "alta" },
//     { nombre: "Autenticación", prioridad: "alta" },
//     { nombre: "Dashboard", prioridad: "media" },
//     { nombre: "Reportes", prioridad: "baja" },
//     { nombre: "Portal Clientes", prioridad: "media" }
// ];
// const conteoPorPrioridad = proyectos.reduce(
//     (acc, {prioridad}) =>{
//         //SI LA PRIORIODAD NO EXISTE
//         if(!acc[prioridad]){
//             acc[prioridad] = 0;
//         }
//         //SUMAR 1 AL CONTADOR
//         acc[prioridad]++;
//         return acc;
//     }, 
//     {}
// );
// console.log(conteoPorPrioridad);

//32 contar nombres por cuidad con reduce
// const empleados = [
//     { nombre: "Dorian", ciudad: "Valparaíso" },
//     { nombre: "Carolina", ciudad: "Santiago" },
//     { nombre: "Jhon", ciudad: "Valparaíso" },
//     { nombre: "Camila", ciudad: "Santiago" },
//     { nombre: "Keyla", ciudad: "Concepción" }
// ];
// const obtenerConteoEmpleados = empleados.reduce(
//     (acc, {ciudad,}) =>{
//         if(!acc[ciudad]){
//             acc[ciudad] = 0;
//         }
//         acc[ciudad]++;
//         return acc;
//     },
//     {}
// );
// console.log(obtenerConteoEmpleados);

// 33: horas invertidos por cliente
// const proyectos = [
//     {
//         nombre: "API Backend",
//         cliente: "Banco Azul",
//         horas: 20
//     },
//     {
//         nombre: "Autenticación",
//         cliente: "Banco Azul",
//         horas: 15
//     },
//     {
//         nombre: "Dashboard",
//         cliente: "Accenture",
//         horas: 12
//     },
//     {
//         nombre: "Reportes",
//         cliente: "Accenture",
//         horas: 8
//     },
//     {
//         nombre: "Portal Clientes",
//         cliente: "Retail Plus",
//         horas: 25
//     }
// ];
// const horasInvertidasPorCliente = proyectos.reduce((acc, {cliente, horas}) => {
//     if(!acc[cliente]){
//         acc[cliente] = 0;
//         acc[cliente] += horas
//     }
//     //acc[cliente]++;
//     return acc;
// }, 
// {}
// );
// console.log(horasInvertidasPorCliente);

//34: saber cuantos proyectos tenemos por prioridad
// const proyectos = [
//     {
//         nombre: "API Backend",
//         prioridad: "alta"
//     },
//     {
//         nombre: "Autenticación",
//         prioridad: "alta"
//     },
//     {
//         nombre: "Dashboard",
//         prioridad: "media"
//     },
//     {
//         nombre: "Reportes",
//         prioridad: "baja"
//     },
//     {
//         nombre: "Portal Clientes",
//         prioridad: "media"
//     },
//     {
//         nombre: "Facturación",
//         prioridad: "alta"
//     }
// ];
// const proyectosPorPrioridad = proyectos.reduce((acc, {prioridad}) =>{
//     if(!acc[prioridad]){
//         acc[prioridad] = 0;
//     }
//     acc[prioridad]++;
//     return acc;
// }, 
// {}
// );
// console.log(proyectosPorPrioridad);

//35: saber por cliente cuentos proyectos tiene y cuantas horas totales ha invertido
// const proyectos = [
//     {
//         nombre: "API Backend",
//         cliente: "Banco Azul",
//         horas: 20
//     },
//     {
//         nombre: "Autenticación",
//         cliente: "Banco Azul",
//         horas: 15
//     },
//     {
//         nombre: "Dashboard",
//         cliente: "Accenture",
//         horas: 12
//     },
//     {
//         nombre: "Reportes",
//         cliente: "Accenture",
//         horas: 8
//     },
//     {
//         nombre: "Portal Clientes",
//         cliente: "Retail Plus",
//         horas: 25
//     }
// ];
// const cantidadDeHorasPorProyecto = proyectos.reduce(
//     (acc, {cliente, horas}) =>{
//         //crear cliente si no existe
//         if(!acc[cliente]){
//             acc[cliente] = {
//                 cantidadProyectos: 0,
//                 totalHoras: 0
//             };
//         }
//         // contar proyecto
//         acc[cliente].cantidadProyectos ++;
//         // sumar horas
//         acc[cliente].totalHoras += horas;
//         return acc;
//     },
//     {}
// )
// console.log(cantidadDeHorasPorProyecto);

//36 saber por cuidad cuantos empleados hay y cuantas tareas tiene en total
// const empleados = [
//     {
//         nombre: "Dorian",
//         ciudad: "Valparaíso",
//         tareas: 8
//     },
//     {
//         nombre: "Jhon",
//         ciudad: "Valparaíso",
//         tareas: 5
//     },
//     {
//         nombre: "Carolina",
//         ciudad: "Santiago",
//         tareas: 6
//     },
//     {
//         nombre: "Camila",
//         ciudad: "Santiago",
//         tareas: 4
//     },
//     {
//         nombre: "Keyla",
//         ciudad: "Concepción",
//         tareas: 7
//     }
// ];
// const empleadosPorCuidadConHoras = empleados.reduce((acc, {ciudad,tareas}) =>{
//     if(!acc[ciudad]){
//         acc[ciudad] = {
//             cantidadEmpleados: 0,
//             totalTareas: 0
//         };      
//     }
//     acc[ciudad].cantidadEmpleados++;
//     acc[ciudad].totalTareas += tareas;
//     return acc;
// },
// {} 
// );
// console.log(empleadosPorCuidadConHoras);

//37 reporte por prioridad de cuandos proyectos hay por prioridad y cuantas horas se han invertido
// const proyectos = [
//     {
//         nombre: "API Backend",
//         prioridad: "alta",
//         horas: 20
//     },
//     {
//         nombre: "Autenticación",
//         prioridad: "alta",
//         horas: 15
//     },
//     {
//         nombre: "Dashboard",
//         prioridad: "media",
//         horas: 12
//     },
//     {
//         nombre: "Reportes",
//         prioridad: "baja",
//         horas: 8
//     },
//     {
//         nombre: "Portal Clientes",
//         prioridad: "media",
//         horas: 25
//     }
// ];
// const proyectosPorPrioridad = proyectos.reduce((acc,{prioridad, horas}) => {
//     if(!acc[prioridad]){
//         acc[prioridad] = {
//             cantidadProyectos: 0,
//             totalHoras: 0
//         };
//     }
//     acc[prioridad].cantidadProyectos++;
//     acc[prioridad].totalHoras += horas;
//     return acc;
// },
// {}
// );
// console.log(proyectosPorPrioridad);

// 38 saber por categoria cuantos cursos hay y cuantos estudiantes tienen en total
// const cursos = [
//     {
//         nombre: "JavaScript",
//         categoria: "Programación",
//         estudiantes: 120
//     },
//     {
//         nombre: "Node.js",
//         categoria: "Programación",
//         estudiantes: 80
//     },
//     {
//         nombre: "Excel",
//         categoria: "Ofimática",
//         estudiantes: 150
//     },
//     {
//         nombre: "PowerPoint",
//         categoria: "Ofimática",
//         estudiantes: 70
//     },
//     {
//         nombre: "Photoshop",
//         categoria: "Diseño",
//         estudiantes: 90
//     }
// ];
// const cursosPorCategoria = cursos.reduce((acc, {categoria, estudiantes}) =>{
//     if(!acc[categoria]){
//         acc[categoria] = {
//             cantidadCursos: 0,
//             totalEstudiantes: 0
//         };
//     }
//     acc[categoria].cantidadCursos++;
//     acc[categoria].totalEstudiantes += estudiantes
//     return acc;
//     },
// {}
// )
// console.log(cursosPorCategoria)

//39 reporte por categorias de producto para saber cuantos productos se vendieron por categoria
// y cuando dinero se recaudo por categoria
// const ventas = [
//     {
//         producto: "Notebook",
//         categoria: "Tecnología",
//         monto: 1200
//     },
//     {
//         producto: "Mouse",
//         categoria: "Tecnología",
//         monto: 50
//     },
//     {
//         producto: "Silla",
//         categoria: "Hogar",
//         monto: 300
//     },
//     {
//         producto: "Mesa",
//         categoria: "Hogar",
//         monto: 500
//     },
//     {
//         producto: "Polera",
//         categoria: "Ropa",
//         monto: 40
//     }
// ];
// const ventasPorCategoria = ventas.reduce((acc, {categoria,monto }) =>{
//     if(!acc[categoria]){
//         acc[categoria] = {
//             cantidadVentas: 0,
//             totalRecaudado: 0
//         };
//     }
//      acc[categoria].cantidadVentas++;
//         acc[categoria].totalRecaudado += monto;
//         return acc;
// },
// {}
// )
// console.log(ventasPorCategoria);

//40 reduce + arrays anidados
// const empleados = [
//     {
//         nombre: "Dorian",
//         tareas: [
//             {
//                 nombre: "API Backend",
//                 horas: 3
//             },
//             {
//                 nombre: "Autenticación",
//                 horas: 5
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         tareas: [
//             {
//                 nombre: "Dashboard",
//                 horas: 2
//             },
//             {
//                 nombre: "Reportes",
//                 horas: 4
//             }
//         ]
//     }
// ];
// const horasPorEmpleado = empleados.reduce(
//     (acc, { nombre, tareas }) => {

//         // Este reduce suma las horas de UN empleado
//         const totalHoras = tareas.reduce(
//             (acumuladorHoras, { horas }) => acumuladorHoras + horas,
//             0
//         );

//         // Guardamos el resultado usando el nombre
//         acc[nombre] = totalHoras;

//         return acc;

//     },
//     {}
// );
// console.log(horasPorEmpleado);

// 41 reduce anidados
// const estudiantes = [
//     {
//         nombre: "Dorian",
//         cursos: [
//             {
//                 nombre: "JavaScript",
//                 horas: 20
//             },
//             {
//                 nombre: "Node.js",
//                 horas: 15
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         cursos: [
//             {
//                 nombre: "Excel",
//                 horas: 10
//             },
//             {
//                 nombre: "PowerPoint",
//                 horas: 5
//             },
//             {
//                 nombre: "Word",
//                 horas: 8
//             }
//         ]
//     }
// ];

// const obtenerEstudiantes = estudiantes.reduce((acc, {nombre, cursos}) =>{
//     const totalHoras = cursos.reduce((accHoras, {horas}) => accHoras + horas, 0);
    
//     acc[nombre] = {
//         cantidadCursos: cursos.length,
//         totalHoras: totalHoras
//     };
//     return acc;
// },
// {}
// )
// console.log(obtenerEstudiantes);

//42 reduce anidados: cuantas peliculas hay por genero y cuantos 
// minutos de reproduccion hay por genero

// const peliculas = [
//     {
//         titulo: "Matrix",
//         genero: "Acción",
//         duracion: 130
//     },
//     {
//         titulo: "John Wick",
//         genero: "Acción",
//         duracion: 120
//     },
//     {
//         titulo: "Toy Story",
//         genero: "Animación",
//         duracion: 90
//     },
//     {
//         titulo: "Shrek",
//         genero: "Animación",
//         duracion: 95
//     },
//     {
//         titulo: "Titanic",
//         genero: "Drama",
//         duracion: 180
//     }
// ];
// const obtenerPeliculas = peliculas.reduce((acc, {nombre, genero, duracion}) =>{
//     if(!acc[genero]){
//         acc[genero] = {
//             cantidadPeliculas: 0,
//             totalMinutos: 0
//         }
//     }
//     acc[genero].cantidadPeliculas++;
//     acc[genero].totalMinutos += duracion;
//     return acc;
// },
// {}
// );
// console.log(obtenerPeliculas);

//43 
// const cursos = [
//     {
//         nombre: "JavaScript",
//         modulos: [
//             {
//                 nombre: "Variables",
//                 horas: 3
//             },
//             {
//                 nombre: "Funciones",
//                 horas: 5
//             },
//             {
//                 nombre: "Arrays",
//                 horas: 4
//             }
//         ]
//     },
//     {
//         nombre: "Node.js",
//         modulos: [
//             {
//                 nombre: "Express",
//                 horas: 6
//             },
//             {
//                 nombre: "Middleware",
//                 horas: 2
//             }
//         ]
//     }
// ];
// // cuántos módulos tiene cada curso, y cuantas horas suman esos módulos
// const obtenerCursos = cursos.reduce((acc, {nombre, modulos}) =>{
//     const totalHoras = modulos.reduce((accHoras, {horas}) => accHoras + horas, 0);

//     acc[nombre] = {
//         cantidadModulos: modulos.length,
//         totalHoras: totalHoras
//     }
//     return acc;
// },
// {}
// );
// console.log(obtenerCursos);

// 44
// const peliculas = [
//     {
//         nombre: "Matrix",
//         escenas: [
//             {
//                 nombre: "Inicio",
//                 minutos: 10
//             },
//             {
//                 nombre: "Entrenamiento",
//                 minutos: 15
//             },
//             {
//                 nombre: "Batalla Final",
//                 minutos: 20
//             }
//         ]
//     },
//     {
//         nombre: "Titanic",
//         escenas: [
//             {
//                 nombre: "Viaje",
//                 minutos: 25
//             },
//             {
//                 nombre: "Hundimiento",
//                 minutos: 30
//             }
//         ]
//     }
// ];
// // cuantas escenas tiene cada pelicula y cuantos minutos suman esas escenas
// const obtenerPeliculas = peliculas.reduce((acc, {nombre, escenas}) =>{
//     const totalEscenas = escenas.reduce((accEscenas,{nombre, minutos}) => 
//         accEscenas + minutos, 0);
//     acc[nombre] = {
//         cantidadEscenas: escenas.length,
//         totalMinutos: totalEscenas
//     }
//     return acc;
// },
// {}
// )
// console.log(obtenerPeliculas);

//45
// const rutinas = [
//     {
//         nombre: "Piernas",
//         ejercicios: [
//             {
//                 nombre: "Sentadillas",
//                 minutos: 15
//             },
//             {
//                 nombre: "Prensa",
//                 minutos: 20
//             },
//             {
//                 nombre: "Zancadas",
//                 minutos: 10
//             }
//         ]
//     },
//     {
//         nombre: "Espalda",
//         ejercicios: [
//             {
//                 nombre: "Dominadas",
//                 minutos: 12
//             },
//             {
//                 nombre: "Remo",
//                 minutos: 18
//             }
//         ]
//     }
// ];
// // plataforma entrenamiento quiere saber por RUTINAS:
// // cantidad de ejercicios, total de minutos, promedio de minutos por ejercicios
// const obtenerRutinas = rutinas.reduce((acc, {nombre,ejercicios}) =>{
//     const obtenerEjercicios = ejercicios.reduce((accEjercicios,{nombre, minutos}) => 
//         accEjercicios + minutos, 0);
//     acc[nombre] = {
//         cantidadEjercicios : ejercicios.length,
//         totalMinutos: obtenerEjercicios,
//         promedioMinutos: obtenerEjercicios / ejercicios.length
//     }
//     return acc
// },
// {})
// console.log(obtenerRutinas);

// 46 jefe quiere saber por playlist
// cuantas canciones tiene
//cuantos minutos dura en total
// cuanto dura una cancion promedio

// const playlists = [
//     {
//         nombre: "Rock",
//         canciones: [
//             {
//                 nombre: "Song A",
//                 minutos: 4
//             },
//             {
//                 nombre: "Song B",
//                 minutos: 6
//             },
//             {
//                 nombre: "Song C",
//                 minutos: 5
//             }
//         ]
//     },
//     {
//         nombre: "Pop",
//         canciones: [
//             {
//                 nombre: "Song D",
//                 minutos: 3
//             },
//             {
//                 nombre: "Song E",
//                 minutos: 4
//             }
//         ]
//     }
// ];

// const obtenerPlaylist = playlists.reduce((acc, {nombre, canciones}) =>{
//     const totalCanciones = canciones.reduce((accCanciones,{ nombre, minutos }) =>
//     accCanciones + minutos, 0)
//     acc[nombre] = {
//         cantidadCanciones : canciones.length,
//         totalMinutos: totalCanciones,
//         promedioMinutos: totalCanciones / canciones.length
//     }
//     return acc
// },
// {}
// )
// console.log(obtenerPlaylist);

//47 saber por receta cuantos ingredientes tiene, cuantas calorias suman lo ingredientes
//cuantas calorias tiene en promedio cada ingrediente
// const recetas = [
//     {
//         nombre: "Ensalada",
//         ingredientes: [
//             {
//                 nombre: "Lechuga",
//                 calorias: 20
//             },
//             {
//                 nombre: "Tomate",
//                 calorias: 30
//             },
//             {
//                 nombre: "Palta",
//                 calorias: 100
//             }
//         ]
//     },
//     {
//         nombre: "Sandwich",
//         ingredientes: [
//             {
//                 nombre: "Pan",
//                 calorias: 120
//             },
//             {
//                 nombre: "Jamón",
//                 calorias: 80
//             }
//         ]
//     }
// ];
// const obtenerRecetas = recetas.reduce((acc, {nombre, ingredientes}) =>{
//     const totalIngredientes = ingredientes.reduce((accIngredientes, {nombre, calorias}) => 
//         accIngredientes + calorias, 0);
//     acc[nombre] = {
//         cantidadIngredientes: ingredientes.length,
//         totalCalorias: totalIngredientes,
//         promedioCalorias: totalIngredientes / ingredientes.length
//     }
//     return acc;
// },
// {}
// )
// console.log(obtenerRecetas);

//48
// const jugadores = [
//     {
//         nombre: "Dorian",
//         partidas: [
//             {
//                 nombre: "Partida 1",
//                 puntos: 150
//             },
//             {
//                 nombre: "Partida 2",
//                 puntos: 200
//             },
//             {
//                 nombre: "Partida 3",
//                 puntos: 100
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         partidas: [
//             {
//                 nombre: "Partida 1",
//                 puntos: 250
//             },
//             {
//                 nombre: "Partida 2",
//                 puntos: 300
//             }
//         ]
//     }
// ];
// saber por jugador, cuantas partidas jugó, cuanto puntos hizo en total
//puntos promediado
//puntuacion mas alta

// const obtenerJugadores = jugadores.reduce((acc, {nombre, partidas}) => {
//     const totalPartidas = partidas.reduce((accPartidas, {nombre, puntos}) => accPartidas + puntos, 0);
//     const cantidadPartidas = partidas.length;
//     const promedioPuntos = totalPartidas / cantidadPartidas;
//     const mejorPuntaje = Math.max(
//         ...partidas.map(({puntos}) => puntos)
//     );
//     acc[nombre] = {
//         cantidadPartidas,
//         totalPartidas,
//         promedioPuntos,
//         mejorPuntaje
//     }
//     return acc;
// }, {}
// )
// console.log(obtenerJugadores);

//49
// const vendedores = [
//     {
//         nombre: "Dorian",
//         ventas: [
//             {
//                 producto: "Notebook",
//                 monto: 1200
//             },
//             {
//                 producto: "Mouse",
//                 monto: 50
//             },
//             {
//                 producto: "Monitor",
//                 monto: 300
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         ventas: [
//             {
//                 producto: "Impresora",
//                 monto: 400
//             },
//             {
//                 producto: "Tablet",
//                 monto: 600
//             }
//         ]
//     }
// ];
//cuantas ventas realizo
//cuant dinero vendio en total
//cuanto vende en promedio por venta
//cual fue la venta mas alta
// const obtenerVendedores = vendedores.reduce((acc,{nombre, ventas}) => {
//     const totalVentas = ventas.reduce((accVentas, {monto}) => accVentas + monto, 0);
//     const cantidadVentas = ventas.length
//     const promedioVentas = totalVentas / cantidadVentas;
//     const mejorVenta = Math.max(...ventas.map(({monto}) => monto));
//     acc[nombre] = {
//         cantidadVentas,
//         totalVentas,
//         promedioVentas,
//         mejorVenta
//     }
//     return acc
// }, {}
// )
// console.log(obtenerVendedores);

//50
// const estudiantes = [
//     {
//         nombre: "Dorian",
//         examenes: [
//             {
//                 nombre: "JavaScript",
//                 nota: 85
//             },
//             {
//                 nombre: "Node.js",
//                 nota: 95
//             },
//             {
//                 nombre: "SQL",
//                 nota: 75
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         examenes: [
//             {
//                 nombre: "Excel",
//                 nota: 90
//             },
//             {
//                 nombre: "Power BI",
//                 nota: 80
//             }
//         ]
//     }
// ];
// Cuántos exámenes rindió.

//✅ Cuántos puntos obtuvo en total.

//✅ Cuál es su promedio.

//✅ Cuál fue su mejor nota.

//✅ Cuál fue su peor nota.

// const obtenerEstudiantes = estudiantes.reduce((acc, {nombre, examenes}) =>{
//     const cantidadExamenes = examenes.length;
//     const totalNotas = examenes.reduce((accNotas,{nota}) => accNotas + nota, 0);
//     const promedioNotas = totalNotas / cantidadExamenes;
//     const mejorNota = Math.max(...examenes.map(({nota}) => nota));
//     const peorNota = Math.min(...examenes.map(({nota}) => nota));
//     acc[nombre] = {
//         cantidadExamenes,
//         totalNotas,
//         promedioNotas,
//         mejorNota,
//         peorNota
//     }
//     return acc
// },{}
// )
// console.log(obtenerEstudiantes);

//51 reduce filter
// const vendedores = [
//     {
//         nombre: "Dorian",
//         ventas: [
//             { monto: 1200 },
//             { monto: 50 },
//             { monto: 300 }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         ventas: [
//             { monto: 400 },
//             { monto: 600 }
//         ]
//     }
// ];

// const obtenerVendedores = vendedores.reduce((acc, {nombre, ventas, monto}) => {
//     const ventasGrandes = ventas.filter(({monto}) => monto >= 300);
//     acc[nombre] = {
//         ventasGrandes: ventasGrandes.length,
//     };
//     return acc
// },
// {}
// )
// console.log(obtenerVendedores);

//52 reduce + map interior
// const estudiantes = [
//     {
//         nombre: "Dorian",
//         cursos: [
//             {
//                 nombre: "JavaScript"
//             },
//             {
//                 nombre: "Node.js"
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         cursos: [
//             {
//                 nombre: "Excel"
//             },
//             {
//                 nombre: "Power BI"
//             }
//         ]
//     }
// ];
// const obtenerEstudiantes = estudiantes.reduce((acc, {nombre, cursos}) =>{
//     const nombreCursos = cursos.map(({nombre}) => nombre);
//     acc[nombre] = nombreCursos
    
//     return acc
// },
// {}
// )
// console.log(obtenerEstudiantes);

// 53 
// const estudiantes = [
//     {
//         nombre: "Dorian",
//         examenes: [
//             {
//                 materia: "JavaScript",
//                 nota: 85
//             },
//             {
//                 materia: "Node.js",
//                 nota: 45
//             },
//             {
//                 materia: "SQL",
//                 nota: 95
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         examenes: [
//             {
//                 materia: "Excel",
//                 nota: 90
//             },
//             {
//                 materia: "Power BI",
//                 nota: 80
//             }
//         ]
//     }
// ];
// const obtenerEstudiantes = estudiantes.reduce((acc, {nombre, examenes}) =>{
//     const materiasAprobadas = examenes
//             .filter(({nota}) => nota >= 60)
//             .map(({materia}) => materia);
//     acc[nombre] = materiasAprobadas;
//     return acc;
// },
// {}
// )
// console.log(obtenerEstudiantes);

// 54 
// const usuarios = [
//     {
//         nombre: "Dorian",
//         peliculas: [
//             {
//                 titulo: "Matrix",
//                 vista: true
//             },
//             {
//                 titulo: "Titanic",
//                 vista: false
//             },
//             {
//                 titulo: "Avatar",
//                 vista: true
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         peliculas: [
//             {
//                 titulo: "Shrek",
//                 vista: true
//             },
//             {
//                 titulo: "Toy Story",
//                 vista: true
//             }
//         ]
//     }
// ];
// // solo peliculas vistas
// // mostrar solo titulos
// const obtenerUsuarios = usuarios.reduce((acc, {nombre, peliculas}) => {
//     const obtenerPeliculas = peliculas  
//                 .filter(({vista}) => vista)
//                 .map(({titulo}) =>titulo);
//             acc[nombre] = obtenerPeliculas;
//             return acc;
// },
// {}
// )
// console.log(obtenerUsuarios);

// 55
// const equipos = [
//     {
//         nombre: "Backend",
//         desarrolladores: [
//             {
//                 nombre: "Dorian",
//                 activo: true
//             },
//             {
//                 nombre: "Keyla",
//                 activo: false
//             },
//             {
//                 nombre: "Jhon",
//                 activo: true
//             }
//         ]
//     },
//     {
//         nombre: "Frontend",
//         desarrolladores: [
//             {
//                 nombre: "Carolina",
//                 activo: true
//             },
//             {
//                 nombre: "Camila",
//                 activo: true
//             }
//         ]
//     }
// ];
// const obtenerEquipos = equipos.reduce((acc,{nombre, desarrolladores}) =>{
//     const desarrolladoresActivos = desarrolladores 
//                 .filter(({activo}) => activo)
//                 .map(({nombre}) => nombre);
//     const cantidadActivos = desarrolladores.reduce((accActivos,{activo}) => accActivos + activo, 0);
//         acc[nombre] = {
//             desarrolladoresActivos,
//             cantidadActivos
//         }
//         return acc
// },
// {}
// )
// console.log(obtenerEquipos);

// 56 
// const alumnos = [
//     {
//         nombre: "Dorian",
//         cursos: [
//             {
//                 nombre: "JavaScript",
//                 nota: 85
//             },
//             {
//                 nombre: "Node.js",
//                 nota: 45
//             },
//             {
//                 nombre: "SQL",
//                 nota: 70
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         cursos: [
//             {
//                 nombre: "Excel",
//                 nota: 95
//             },
//             {
//                 nombre: "Power BI",
//                 nota: 55
//             },
//             {
//                 nombre: "Word",
//                 nota: 88
//             }
//         ]
//     }
// ];
// //cuantos cursos aprobó cada alumno
// const obterAlumnos = alumnos.reduce((acc, {nombre, cursos}) => {
//     const cursosAprobados = cursos
//     .filter(({nota}) => nota >= 60)
//     .map(({ nombre }) => nombre);
//     acc[nombre] = cursosAprobados

    
//     return acc
// },{}
// )
// console.log(obterAlumnos);

//57 
// const usuarios = [
//     {
//         nombre: "Dorian",
//         libros: [
//             {
//                 titulo: "Clean Code",
//                 paginas: 450
//             },
//             {
//                 titulo: "Hábitos Atómicos",
//                 paginas: 280
//             },
//             {
//                 titulo: "JavaScript Pro",
//                 paginas: 350
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         libros: [
//             {
//                 titulo: "El Principito",
//                 paginas: 120
//             },
//             {
//                 titulo: "Arquitectura Limpia",
//                 paginas: 400
//             },
//             {
//                 titulo: "Patrones de Diseño",
//                 paginas: 320
//             }
//         ]
//     }
// ];
// // empresa quiere saber que libros largos ha leido cada usuario
// const obtenerUsuarios = usuarios.reduce((acc, {nombre, libros}) => {
//     const paginas = libros
//             .filter(({paginas}) => paginas >= 300)
//             .map(({titulo}) => titulo);
//         acc[nombre] = paginas;
//         return acc;

// },
// {}
// );
// console.log(obtenerUsuarios);

//58
// const jugadores = [
//     {
//         nombre: "Dorian",
//         logros: [
//             {
//                 nombre: "Primer Nivel",
//                 desbloqueado: true
//             },
//             {
//                 nombre: "Maestro del Juego",
//                 desbloqueado: false
//             },
//             {
//                 nombre: "Explorador",
//                 desbloqueado: true
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         logros: [
//             {
//                 nombre: "Coleccionista",
//                 desbloqueado: true
//             },
//             {
//                 nombre: "Velocista",
//                 desbloqueado: true
//             },
//             {
//                 nombre: "Invencible",
//                 desbloqueado: false
//             }
//         ]
//     }
// ];
// //empresa quiere saber que logros desbloqueo cada jugador
// const obtenerJugadores = jugadores.reduce((acc, {nombre, logros}) =>{
//     const obtenerLogros = logros
//             .filter(({desbloqueado}) => desbloqueado)
//             .map(({nombre}) => nombre)
//         acc[nombre] = obtenerLogros;
//         return acc;
// },
// {}
// )
// console.log(obtenerJugadores);

//59
// const equipos = [
//     {
//         nombre: "Backend",
//         tickets: [
//             {
//                 titulo: "Error API",
//                 resuelto: true
//             },
//             {
//                 titulo: "Bug Login",
//                 resuelto: false
//             },
//             {
//                 titulo: "Cache Redis",
//                 resuelto: true
//             }
//         ]
//     },
//     {
//         nombre: "Frontend",
//         tickets: [
//             {
//                 titulo: "CSS Responsive",
//                 resuelto: true
//             },
//             {
//                 titulo: "Dark Mode",
//                 resuelto: true
//             }
//         ]
//     }
// ];
// // reporte que muestre que cursos avanzados esta tomando cada estudiante
// const obtenerEquipos = equipos.reduce((acc, {nombre, tickets}) => {
//     const ticketActivos = tickets
//             .filter(({resuelto}) => resuelto)
//             .map(({titulo}) => titulo);
//         acc[nombre] = ticketActivos;
//         return acc;
// },
// {}
// )
// console.log(obtenerEquipos);

//60 reporte de equipos y tickets
// const equipos = [
//     {
//         nombre: "Backend",
//         tickets: [
//             {
//                 titulo: "Error API",
//                 resuelto: true,
//                 horas: 5
//             },
//             {
//                 titulo: "Bug Login",
//                 resuelto: false,
//                 horas: 3
//             },
//             {
//                 titulo: "Cache Redis",
//                 resuelto: true,
//                 horas: 8
//             },
//             {
//                 titulo: "Optimización SQL",
//                 resuelto: true,
//                 horas: 10
//             }
//         ]
//     },
//     {
//         nombre: "Frontend",
//         tickets: [
//             {
//                 titulo: "CSS Responsive",
//                 resuelto: true,
//                 horas: 4
//             },
//             {
//                 titulo: "Dark Mode",
//                 resuelto: true,
//                 horas: 6
//             },
//             {
//                 titulo: "Bug Modal",
//                 resuelto: false,
//                 horas: 2
//             }
//         ]
//     },
//     {
//         nombre: "QA",
//         tickets: [
//             {
//                 titulo: "Pruebas Login",
//                 resuelto: true,
//                 horas: 7
//             },
//             {
//                 titulo: "Reporte Bugs",
//                 resuelto: false,
//                 horas: 5
//             }
//         ]
//     }
// ];
// // que tickets resueltos tiene cada equipo Ok
// // cuantos tickets resueltos tiene OK
// //cuantas horas se invirtieron en esos tickets resueltos ok
// //promedio de horas por ticket resuelto
// //el ticket resuelto que tomo mas horas 
// const obtenerEquipos = equipos.reduce((acc, {nombre, tickets}) =>{
//     const ticketsResueltos = tickets.filter(({resuelto}) => resuelto);
//     const cantidadResueltos = ticketsResueltos.length;
//     const totalHoras = ticketsResueltos.reduce((accTotal, {horas}) => accTotal + horas, 0);
//     const promedioHoras = totalHoras / cantidadResueltos;
//     const nombresTickets = ticketsResueltos.map(({titulo}) => titulo);
//     const mayorCantidadHoras = Math.max(...ticketsResueltos.map(({horas}) => horas));
//     const ticketMasLargo = ticketsResueltos.find(({horas}) => horas === mayorCantidadHoras).titulo;

//     acc[nombre] = {
//         ticketsResueltos: nombresTickets,
//         cantidadResueltos,
//         totalHoras,
//         promedioHoras,
//         ticketMasLargo
//     }
//     return acc
// },
// {}
// )
// console.log(obtenerEquipos);

// 61
// const estudiantes = [
//     {
//         nombre: "Dorian",
//         tareas: [
//             {
//                 titulo: "Arrays",
//                 entregada: true,
//                 puntos: 80
//             },
//             {
//                 titulo: "Promises",
//                 entregada: false,
//                 puntos: 50
//             },
//             {
//                 titulo: "Reduce",
//                 entregada: true,
//                 puntos: 95
//             },
//             {
//                 titulo: "Async/Await",
//                 entregada: true,
//                 puntos: 90
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         tareas: [
//             {
//                 titulo: "Excel",
//                 entregada: true,
//                 puntos: 70
//             },
//             {
//                 titulo: "Power BI",
//                 entregada: true,
//                 puntos: 85
//             },
//             {
//                 titulo: "SQL",
//                 entregada: false,
//                 puntos: 40
//             }
//         ]
//     },
//     {
//         nombre: "Pedro",
//         tareas: [
//             {
//                 titulo: "HTML",
//                 entregada: true,
//                 puntos: 60
//             },
//             {
//                 titulo: "CSS",
//                 entregada: false,
//                 puntos: 30
//             }
//         ]
//     }
// ];
// reporte : tareas entregadas de cada estudiante OK
//cuantas tareas entregadas tiene Ok
//cuantos puntos suman esas tareas entregadas ok
//promedio de puntos por tarea entregada
//cual fue la tarea entregada con mayor puntaje

// const obtenerEstudiantes = estudiantes.reduce((acc, {nombre, tareas}) => {
//     const tareasEntregadas = tareas.filter(({entregada}) => entregada);

//     const cantidadEntregadas = tareasEntregadas.length;

//     const totalPuntos = tareasEntregadas.reduce((accPuntos, {puntos}) => accPuntos + puntos, 0);

//     const promedioPuntos = totalPuntos / cantidadEntregadas;

//     const mejorPuntaje = Math.max(...tareasEntregadas.map(({puntos}) => puntos));

//     const tareaMejorPuntaje = tareasEntregadas.find(({puntos}) => puntos === mejorPuntaje).titulo;
//     acc[nombre] = {
//         tareasEntregadas : tareasEntregadas.map(({titulo}) => titulo),
//         cantidadEntregadas,
//         totalPuntos,
//         promedioPuntos,
//         tareaMejorPuntaje
//     }
//     return acc;
// },
// {}
// )
// console.log(obtenerEstudiantes);

// 62
// const cursos = [
//     {
//         nombre: "JavaScript",
//         evaluaciones: [
//             {
//                 titulo: "Variables",
//                 aprobada: true,
//                 puntos: 70
//             },
//             {
//                 titulo: "Funciones",
//                 aprobada: true,
//                 puntos: 85
//             },
//             {
//                 titulo: "Arrays",
//                 aprobada: false,
//                 puntos: 40
//             },
//             {
//                 titulo: "Objetos",
//                 aprobada: true,
//                 puntos: 95
//             }
//         ]
//     },
//     {
//         nombre: "Node.js",
//         evaluaciones: [
//             {
//                 titulo: "Express",
//                 aprobada: true,
//                 puntos: 80
//             },
//             {
//                 titulo: "Middlewares",
//                 aprobada: false,
//                 puntos: 50
//             },
//             {
//                 titulo: "Rutas",
//                 aprobada: true,
//                 puntos: 90
//             }
//         ]
//     },
//     {
//         nombre: "SQL",
//         evaluaciones: [
//             {
//                 titulo: "SELECT",
//                 aprobada: true,
//                 puntos: 75
//             },
//             {
//                 titulo: "JOIN",
//                 aprobada: true,
//                 puntos: 88
//             },
//             {
//                 titulo: "GROUP BY",
//                 aprobada: true,
//                 puntos: 92
//             }
//         ]
//     }
// ];
// // evaluaciones fueron aprobadas: filter OK
// //cuantas evaluaciones aprobadas tiene cada curso: .length OK
// //cuantos puntos suman esas evaluaciones aprobadas : reduce OK
// // promedio de puntos de las evaluaciones aprobadas
// // cual fue la evaluacion aprobada con mayor puntaje: max, map, find
// const obtenerCursos = cursos.reduce((acc, {nombre, evaluaciones}) => {
//     const evaluacionesAprobadas = evaluaciones.filter(({aprobada}) => aprobada);
//     const cantidadAprobadas = evaluacionesAprobadas.length;
//     const totalPuntos = evaluacionesAprobadas.reduce((accPuntos,{puntos}) => accPuntos + puntos, 0);
//     const promedioPuntos = totalPuntos / cantidadAprobadas;
//     const mejorPuntaje = Math.max(...evaluacionesAprobadas.map(({puntos}) => puntos));
//     const evaluacionMejorPuntaje  = evaluacionesAprobadas.find(({puntos}) => puntos === mejorPuntaje).titulo;
//     acc[nombre] = {
//         evaluacionesAprobadas: evaluacionesAprobadas.map(({titulo}) => titulo),
//         cantidadAprobadas,
//         totalPuntos,
//         promedioPuntos,
//         evaluacionMejorPuntaje
//     }
//     return acc;
// },
// {}
// );
// console.log(obtenerCursos);

//63 reporte de vendedores
// const vendedores = [
//     {
//         nombre: "Dorian",
//         ventas: [
//             {
//                 producto: "Notebook",
//                 vendido: true,
//                 monto: 1200
//             },
//             {
//                 producto: "Mouse",
//                 vendido: false,
//                 monto: 50
//             },
//             {
//                 producto: "Monitor",
//                 vendido: true,
//                 monto: 300
//             },
//             {
//                 producto: "Teclado",
//                 vendido: true,
//                 monto: 150
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         ventas: [
//             {
//                 producto: "Tablet",
//                 vendido: true,
//                 monto: 600
//             },
//             {
//                 producto: "Impresora",
//                 vendido: true,
//                 monto: 400
//             },
//             {
//                 producto: "Cable HDMI",
//                 vendido: false,
//                 monto: 25
//             }
//         ]
//     }
// ];
// // te piden que saques por vendedor:
// // cuantos productos vendio con exito
// // cuantos productos exitosos vendio
// // cuando dinero generaron esos productos
// //promedio de dinero generado por producto
// // cual fue el producto con mayor venta
// const reporteVendedores = vendedores.reduce((acc, { nombre, ventas }) => {

//     const productosVendidos = ventas.filter(
//         ({ vendido }) => vendido
//     );

//     const cantidadVendidos = productosVendidos.length;

//     const totalVentas = productosVendidos.reduce(
//         (accVendidos, { monto }) => accVendidos + monto,
//         0
//     );

//     const promedioVentas = totalVentas / cantidadVendidos;

//     const mayorVenta = Math.max(
//         ...productosVendidos.map(
//             ({ monto }) => monto
//         )
//     );

//     const mejorProducto = productosVendidos.find(
//         ({ monto }) => monto === mayorVenta
//     ).producto;

//     acc[nombre] = {
//         productosVendidos: productosVendidos.map(
//             ({ producto }) => producto
//         ),
//         cantidadVendidos,
//         totalVentas,
//         promedioVentas,
//         mejorProducto
//     };

//     return acc;

// }, {});

// console.log(reporteVendedores);

//64 proyecto mas costoso
// const clientes = [
//     {
//         nombre: "Banco Azul",
//         proyectos: [
//             {
//                 nombre: "API Backend",
//                 terminado: true,
//                 ingreso: 5000
//             },
//             {
//                 nombre: "Autenticación",
//                 terminado: false,
//                 ingreso: 2000
//             },
//             {
//                 nombre: "Dashboard",
//                 terminado: true,
//                 ingreso: 8000
//             }
//         ]
//     },
//     {
//         nombre: "Retail Plus",
//         proyectos: [
//             {
//                 nombre: "Portal Clientes",
//                 terminado: true,
//                 ingreso: 6000
//             },
//             {
//                 nombre: "Reportes",
//                 terminado: true,
//                 ingreso: 4000
//             },
//             {
//                 nombre: "Notificaciones",
//                 terminado: false,
//                 ingreso: 1500
//             }
//         ]
//     }
// ];
// // proyectos terminados OK
// //cuantos proyectos terminados tiene Ok
// const reporteClientes = clientes.reduce((acc, {nombre, proyectos}) =>{
//     const proyectosTerminados = proyectos.filter(({terminado}) => terminado);
//     const cantidadTerminados = proyectosTerminados.length;
//     const totalIngresos = proyectosTerminados.reduce((accTotal,{ingreso}) => accTotal + ingreso, 0);
//     const promedioIngreso = totalIngresos / cantidadTerminados;
//     const mayorRentable = Math.max(...proyectosTerminados.map(({ingreso}) => ingreso));
//     const proyectoMasRentable = proyectosTerminados.find(({ingreso}) => ingreso === mayorRentable).nombre;


//     acc[nombre] = {
//         proyectosTerminados: proyectosTerminados.map(({nombre}) => nombre),
//         cantidadTerminados,
//         totalIngresos,
//         promedioIngreso,
//         proyectoMasRentable
//     }
// return acc
// },
// {}
// )
// console.log(reporteClientes);

//65
// const usuarios = [
//     {
//         nombre: "Dorian",
//         peliculas: [
//             {
//                 titulo: "Matrix",
//                 vista: true,
//                 reproducciones: 120
//             },
//             {
//                 titulo: "Titanic",
//                 vista: false,
//                 reproducciones: 40
//             },
//             {
//                 titulo: "Avatar",
//                 vista: true,
//                 reproducciones: 300
//             },
//             {
//                 titulo: "Interestelar",
//                 vista: true,
//                 reproducciones: 180
//             }
//         ]
//     },
//     {
//         nombre: "Carolina",
//         peliculas: [
//             {
//                 titulo: "Shrek",
//                 vista: true,
//                 reproducciones: 220
//             },
//             {
//                 titulo: "Toy Story",
//                 vista: true,
//                 reproducciones: 150
//             },
//             {
//                 titulo: "Frozen",
//                 vista: false,
//                 reproducciones: 50
//             }
//         ]
//     }
// ];

// El gerente quiere saber por usuario:

// Qué películas fueron vistas. ok
// Cuántas películas vistas tiene. ok
// Cuántas reproducciones suman esas películas.ok
// El promedio de reproducciones por película vista.ok
// Cuál fue la película vista con más reproducciones.
// const reporteUsuarios = usuarios.reduce((acc, {nombre, peliculas}) => {
//     const peliculasVistas = peliculas.filter(({vista}) => vista );
//     const cantidadVistas = peliculasVistas.length;
//     const totalReproducciones = peliculasVistas.reduce((accTotal, {reproducciones}) => accTotal + reproducciones, 0);
//     const promedioReproducciones = totalReproducciones / cantidadVistas;
//     const peliculasMayor = Math.max(...peliculasVistas.map(({reproducciones}) => reproducciones));
//     const peliculasMasVistas = peliculasVistas.find(({reproducciones}) => reproducciones === peliculasMayor).titulo;

//     acc[nombre] = {
//         peliculasVistas : peliculasVistas.map(({titulo}) => titulo),
//         cantidadVistas,
//         totalReproducciones,
//         promedioReproducciones,
//         peliculasMasVistas
//     }
//     return acc;
// },
// {}
// )
// console.log(reporteUsuarios);

//66 ¿Cuál fue el módulo con más duración?
// const modulos = [
//     {
//         nombre: "Variables",
//         duracion: 3
//     },
//     {
//         nombre: "Funciones",
//         duracion: 8
//     },
//     {
//         nombre: "Arrays",
//         duracion: 5
//     },
//     {
//         nombre: "Objetos",
//         duracion: 6
//     }
// ];
// const maxDuracion = Math.max(...modulos.map(({duracion}) => duracion));
// const masDuracionModulo = modulos.find(({duracion}) => duracion === maxDuracion).nombre;

// console.log(masDuracionModulo);

//67 
// const terapeutas = [
//     {
//         nombre: "Paula",
//         sesiones: [
//             {
//                 actividad: "Emociones",
//                 completada: true,
//                 minutos: 30
//             },
//             {
//                 actividad: "Rutinas",
//                 completada: false,
//                 minutos: 15
//             },
//             {
//                 actividad: "Conversaciones",
//                 completada: true,
//                 minutos: 45
//             }
//         ]
//     },
//     {
//         nombre: "Javier",
//         sesiones: [
//             {
//                 actividad: "Pictogramas",
//                 completada: true,
//                 minutos: 20
//             },
//             {
//                 actividad: "Juego Social",
//                 completada: true,
//                 minutos: 50
//             },
//             {
//                 actividad: "Comunicación",
//                 completada: true,
//                 minutos: 40
//             }
//         ]
//     }
// ];
// Necesitas generar un reporte por terapeuta para saber:

// Qué sesiones fueron completadas.ok
// Cuántas sesiones completadas tiene.OK
// Cuántos minutos suman esas sesiones.ok
// El promedio de minutos por sesión.ok
// Cuál fue la sesión más larga.
// const reporteTerapeutas = terapeutas.reduce((acc, {nombre, sesiones}) =>{
//     const sesionesCompletadas = sesiones.filter(({completada}) => completada);
//     const cantidadCompletadas = sesionesCompletadas.length;
//     const totalMinutos = sesionesCompletadas.reduce((accTotal, {minutos}) => accTotal + minutos, 0);
//     const promedioMinutos = totalMinutos / cantidadCompletadas;
//     const calcularSesionMasLarga = Math.max(...sesionesCompletadas.map(({minutos}) => minutos));
//     const sesionMasLarga = sesionesCompletadas.find(({minutos}) => minutos === calcularSesionMasLarga).actividad;

//     acc[nombre] = {
//         sesionesCompletadas: sesionesCompletadas.map(({actividad}) => actividad),
//         cantidadCompletadas,
//         totalMinutos,
//         promedioMinutos: Math.round(promedioMinutos),
//         sesionMasLarga
//     }
// return acc;
// },
// {}
// )
// console.log(reporteTerapeutas);

// 68 
// const terapeutas = [
//     {
//         nombre: "Paula",
//         actividades: [
//             {
//                 emocion: "Felicidad",
//                 completada: true,
//                 minutos: 20
//             },
//             {
//                 emocion: "Tristeza",
//                 completada: true,
//                 minutos: 35
//             },
//             {
//                 emocion: "Enojo",
//                 completada: false,
//                 minutos: 10
//             }
//         ]
//     },
//     {
//         nombre: "Javier",
//         actividades: [
//             {
//                 emocion: "Miedo",
//                 completada: true,
//                 minutos: 40
//             },
//             {
//                 emocion: "Sorpresa",
//                 completada: true,
//                 minutos: 25
//             },
//             {
//                 emocion: "Calma",
//                 completada: true,
//                 minutos: 30
//             }
//         ]
//     }
// ];
// Tu equipo quiere saber por terapeuta:

// Qué actividades fueron completadas.OK
// Cuántas actividades completadas tiene.OK
// Cuántos minutos se trabajaron en total. OK
// Cuál es el promedio de minutos.OK
// Cuál fue la actividad completada más larga.OK
// const reporteTerapeutas = terapeutas.reduce((acc,{ nombre, actividades}) => {
//     const emocionesTrabajadas = actividades.filter(({completada}) => completada);
//     const cantidadCompletadas = emocionesTrabajadas.length;
//     const totalMinutos = emocionesTrabajadas.reduce((accTotal, {minutos}) => accTotal + minutos, 0);
//     const promedioMinutos = totalMinutos /cantidadCompletadas;
//     const calcularActividadMasLarga = Math.max(...emocionesTrabajadas.map(({minutos}) => minutos))
//     const actividadMasLarga = emocionesTrabajadas.find(({minutos}) => minutos === calcularActividadMasLarga).emocion;
//     acc[nombre] = {
//         emocionesTrabajadas: emocionesTrabajadas.map(({emocion}) => emocion),
//         cantidadCompletadas,
//         totalMinutos,
//         promedioMinutos,
//         actividadMasLarga
//     }
//     return acc
// },
// {}
// )
// console.log(reporteTerapeutas);

