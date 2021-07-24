import { CrearOfertaDeTrabajo } from "../../../aplicacion/servicios/CrearOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../../../aplicacion/ui/UIPuertoCrearOferta";
import { AdaptadorTIOferta } from "../../adaptadorTIOferta";
import { UIPuerto } from "../../../aplicacion/ui/UIPuerto";
import { MostrarOfertasDeTrabajo } from "../../../aplicacion/servicios/MostrarOfertasDeTrabajo";

//Test Crear Oferta
test('Crea una oferta de trabajo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
    const oferta = {
        idOfertaDeTrabajo: "",
        tituloTrabajo: {
            titulo: "Titulo Oferta"
        },
        //empleador: Empleador,
        direccion: {
            calle1: "calle1",
            calle2: "calle2",
            ciudad: "ciudad",
            estado: "estado",
            codPostal: "codigoPos"
        },
        fechaLimitePostulacionOfertaDeTrabajo: "2020/07/18",
        calendario: [{horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"}],
        habilidades: ["a1", "a2", "a3"],
        requerimientosEspeciales: "RequerimientosEspeciales",
        certificaciones: ["a1", "a2", "a3"],
        duracion: 5,
        remuneracionPorHora: 3.44,
        estadoOfertaDeTrabajo: 1,
        vacantes: 5
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual("Oferta Creada Con éxito");
    //expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
});

//Test Título
// test('Muestra error al intentar crear una oferta de trabajo sin título', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El titulo: \"\" es inválido, el título no puede estar vacío"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// //Test Dirección
//     //Calle 1
// test('Muestra error al intentar crear una oferta de trabajo con calle 1 de dirección vacía', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Se necesita desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "La calle1:  es inválida, no puede estar vacía"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

//     //Calle 2
// test('Muestra error al intentar crear una oferta de trabajo con calle 2 de dirección vacía', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Se necesita desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "La calle2:  es inválida, no puede estar vacía"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

//     //Ciudad
// test('Muestra error al intentar crear una oferta de trabajo con ciudad de dirección vacía', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Se necesita desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "La ciudad:  es inválida, no puede estar vacía"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

//     //Estado
// test('Muestra error al intentar crear una oferta de trabajo con estado de dirección vacío', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado: "",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Se necesita desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El estado:  es inválido, no puede estar vacío"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

//     //Zip
// test('Muestra error al intentar crear una oferta de trabajo con zip de dirección vacía', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado: "Distrito Capital",
//             zip:""
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Se necesita desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El zip:  es inválido, no puede estar vacío"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// //Test Duración
// test('Muestra error al intentar crear una oferta de trabajo con una duración vacía', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: 0,
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "Las horas totales son inválidas, no pueden estar vacías"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// test('Muestra error al intentar crear una oferta de trabajo con una duración negativa', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: -8,
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "Las horas totales: -8 no pueden ser menores a 0"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// //Test Remuneración

//     //Monto
// test('Muestra error al intentar crear una oferta de trabajo con un monto de remuneración vacío', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: 0,
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El monto: 0 es inválido, no puede estar vacío"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// test('Muestra error al intentar crear una oferta de trabajo con un monto de remuneración negativo', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "-700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El monto: -700 es inválido, no puede ser negativo"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

//     //Divisa
// test('Muestra error al intentar crear una oferta de trabajo con un divisa de remuneración vacío', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "La divisa del pago:  es inválida, no puede estar vacía"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// test('Muestra error al intentar crear una oferta de trabajo con un divisa de remuneración inválida', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"peso",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "La divisa del pago: peso es inválida, debe ser euro, dolar o bolivares"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

//     //Frecuencia
// test('Muestra error al intentar crear una oferta de trabajo con una frecuencia de remuneración vacía', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:""
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "La frecuencia de pago:  es inválida, no puede estar vacía"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// test('Muestra error al intentar crear una oferta de trabajo con una frecuencia de remuneración invalida', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"año"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "La frecuencia de pago: año es inválida, debe ser por hora, mes o semana"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// //Test Estado Oferta de Trabajo
// test('Muestra error al intentar crear una oferta de trabajo con un estado de oferta de trabajo vacío', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: null,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El estado: null no puede estar vacio"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// test('Muestra error al intentar crear una oferta de trabajo con un estado de oferta de trabajo invalido', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 7,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El estado: 7 de la oferta debe ser: 0 (creado), 1 (publicado), 2 (postulaciones cerradas), 3 (empleado asignado), 4 (en progreso), 5 (finalizada), 6 (cancelada)"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// //Test Vacante
// test('Muestra error al intentar crear una oferta de trabajo con vacante vacía', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: 0,
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "La cantidad de vacantes: 0 es inválida, no puede estar vacía"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// test('Muestra error al intentar crear una oferta de trabajo con vacante negativa', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: -1,
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "La cantidad de vacantes: -1 es inválida, debe ser mayor a cero"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// //Test Cargo
// test('Muestra error al intentar crear una oferta de trabajo con un cargo vacío', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : ""
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El cargo: \"\" es inválido, el cargo no puede estar vacío"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });

// //Descripción

// test('Muestra error al intentar crear una oferta de trabajo con una descripción vacía', () => {

//     const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
//     const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
//     const oferta = {
//         descripcion: {
//             propiedades: {
//                 descripcion: ""
//             }
//         },
//         direccion: {
//             calle1: "Principal",
//             calle2: "Oeste", 
//             ciudad: "Caracas",
//             estado:"Distrito Capital",
//             zip:"1011"
//         },
//         duracion: "8",
//         fechaLimite: "2020-05-05",
//         titulo: "Desarrollador web",
//         vacante: "1",
//         remuneracion: {
//             monto: "700",
//             divisa:"dolar",
//             frecuencia:"mes"
//         },
//         cargo: {
//             propiedades: {
//                 cargo : "Desarrollador Web Junior"
//             }
//         },
//         estadoOfertaDeTrabajo: 0,
//         empleador: {
//             id: "5",
//             nombreEmpresa: {
//                 nombre: "Raccoon Developers",
//                 rif: "J500805050"
//             },
//             direccion: {
//                 propiedades: {
//                     calle1: "Raccoon",
//                     calle2: "Oeste",
//                     ciudad: "Caracas",
//                     estado: "Distrito Capital",
//                     zip: "1011"
//                 }
//             } ,
//             infoEmpleador: {
//                 propiedades: {
//                     nombreCompleto: "Alejandro Daniel Pérez Verde",
//                     cargoDeTrabajo: "Desarrollador Senior",
//                     numeroDeTelefono: "+584141234567",
//                     correo: "alejandroperez@raccoondevelopers.com"
//                 }
//             },
//             rol:{ 
//                 propiedades:{
//                     nombre: "Gerente"
//                 }
//             }
//         },
//     }
//     expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "La descripcion:  es inválida, la descripcion no puede estar vacía"});
//     expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
// });