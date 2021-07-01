import { CrearOfertaDeTrabajo } from "../../../aplicacion/servicios/CrearOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../../../aplicacion/ui/UIPuertoCrearOferta";
import { AdaptadorTIOferta } from "../../adaptadorTIOferta";
import { UIPuerto } from "../../../aplicacion/ui/UIPuerto";
import { MostrarOfertasDeTrabajo } from "../../../aplicacion/servicios/MostrarOfertasDeTrabajo";


test('Crea una oferta de trabajo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
    const oferta = {
        descripcion: {
            propiedades: {
                descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
            }
        },
        direccion: {
            calle1: "Principal",
            calle2: "Oeste",
            ciudad: "Caracas",
            estado:"Distrito Capital",
            zip:"1011"
        },
        duracion: "8",
        fechaLimite: "2020-05-05",
        titulo: "Se necesita desarrollador web",
        vacante: "1",
        remuneracion: {
            monto: "700",
            divisa:"dolar",
            frecuencia:"mes"
        },
        cargo: {
            propiedades: {
                cargo : "Desarrollador Web Junior"
            }
        },
        estadoOfertaDeTrabajo: 0,
        empleador: {
            id: "5",
            nombreEmpresa: {
                nombre: "Raccoon Developers",
                rif: "J500805050"
            },
            direccion: {
                propiedades: {
                    calle1: "Raccoon",
                    calle2: "Oeste",
                    ciudad: "Caracas",
                    estado: "Distrito Capital",
                    zip: "1011"
                }
            } ,
            infoEmpleador: {
                propiedades: {
                    nombreCompleto: "Alejandro Daniel Pérez Verde",
                    cargoDeTrabajo: "Desarrollador Senior",
                    numeroDeTelefono: "+584141234567",
                    correo: "alejandroperez@raccoondevelopers.com"
                }
            },
            rol:{ 
                propiedades:{
                    nombre: "Gerente"
                }
            }
        },
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 201, mensaje: "Oferta Creada Con éxito"});
    expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
});

test('Muestra error al intentar crear una oferta de trabajo sin título', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
    const oferta = {
        descripcion: {
            propiedades: {
                descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
            }
        },
        direccion: {
            calle1: "Principal",
            calle2: "Oeste", 
            ciudad: "Caracas",
            estado:"Distrito Capital",
            zip:"1011"
        },
        duracion: "8",
        fechaLimite: "2020-05-05",
        titulo: "",
        vacante: "1",
        remuneracion: {
            monto: "700",
            divisa:"dolar",
            frecuencia:"mes"
        },
        cargo: {
            propiedades: {
                cargo : "Desarrollador Web Junior"
            }
        },
        estadoOfertaDeTrabajo: 0,
        empleador: {
            id: "5",
            nombreEmpresa: {
                nombre: "Raccoon Developers",
                rif: "J500805050"
            },
            direccion: {
                propiedades: {
                    calle1: "Raccoon",
                    calle2: "Oeste",
                    ciudad: "Caracas",
                    estado: "Distrito Capital",
                    zip: "1011"
                }
            } ,
            infoEmpleador: {
                propiedades: {
                    nombreCompleto: "Alejandro Daniel Pérez Verde",
                    cargoDeTrabajo: "Desarrollador Senior",
                    numeroDeTelefono: "+584141234567",
                    correo: "alejandroperez@raccoondevelopers.com"
                }
            },
            rol:{ 
                propiedades:{
                    nombre: "Gerente"
                }
            }
        },
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El titulo: \"\" es inválido, el título no puede estar vacío"});
    expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
});

test('Muestra error al intentar crear una oferta de trabajo con un monto de remuneración negativo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
    const oferta = {
        descripcion: {
            propiedades: {
                descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
            }
        },
        direccion: {
            calle1: "Principal",
            calle2: "Oeste", 
            ciudad: "Caracas",
            estado:"Distrito Capital",
            zip:"1011"
        },
        duracion: "8",
        fechaLimite: "2020-05-05",
        titulo: "Desarrollador web",
        vacante: "1",
        remuneracion: {
            monto: "-700",
            divisa:"dolar",
            frecuencia:"mes"
        },
        cargo: {
            propiedades: {
                cargo : "Desarrollador Web Junior"
            }
        },
        estadoOfertaDeTrabajo: 0,
        empleador: {
            id: "5",
            nombreEmpresa: {
                nombre: "Raccoon Developers",
                rif: "J500805050"
            },
            direccion: {
                propiedades: {
                    calle1: "Raccoon",
                    calle2: "Oeste",
                    ciudad: "Caracas",
                    estado: "Distrito Capital",
                    zip: "1011"
                }
            } ,
            infoEmpleador: {
                propiedades: {
                    nombreCompleto: "Alejandro Daniel Pérez Verde",
                    cargoDeTrabajo: "Desarrollador Senior",
                    numeroDeTelefono: "+584141234567",
                    correo: "alejandroperez@raccoondevelopers.com"
                }
            },
            rol:{ 
                propiedades:{
                    nombre: "Gerente"
                }
            }
        },
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El monto: -700 es inválido, no puede ser negativo"});
    expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
});

test('Muestra error al intentar crear una oferta de trabajo con un cargo vacío', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const puertoConsultarOferta: UIPuerto = new MostrarOfertasDeTrabajo()
    const oferta = {
        descripcion: {
            propiedades: {
                descripcion: "Se requiere de un desarrollador para realizar aplicaciones móviles"
            }
        },
        direccion: {
            calle1: "Principal",
            calle2: "Oeste", 
            ciudad: "Caracas",
            estado:"Distrito Capital",
            zip:"1011"
        },
        duracion: "8",
        fechaLimite: "2020-05-05",
        titulo: "Desarrollador web",
        vacante: "1",
        remuneracion: {
            monto: "700",
            divisa:"dolar",
            frecuencia:"mes"
        },
        cargo: {
            propiedades: {
                cargo : ""
            }
        },
        estadoOfertaDeTrabajo: 0,
        empleador: {
            id: "5",
            nombreEmpresa: {
                nombre: "Raccoon Developers",
                rif: "J500805050"
            },
            direccion: {
                propiedades: {
                    calle1: "Raccoon",
                    calle2: "Oeste",
                    ciudad: "Caracas",
                    estado: "Distrito Capital",
                    zip: "1011"
                }
            } ,
            infoEmpleador: {
                propiedades: {
                    nombreCompleto: "Alejandro Daniel Pérez Verde",
                    cargoDeTrabajo: "Desarrollador Senior",
                    numeroDeTelefono: "+584141234567",
                    correo: "alejandroperez@raccoondevelopers.com"
                }
            },
            rol:{ 
                propiedades:{
                    nombre: "Gerente"
                }
            }
        },
    }
    expect(puertoOferta.crearOfertaUI(oferta, new AdaptadorTIOferta())).toEqual({statusCode: 422, mensaje: "El cargo: \"\" es inválido, el cargo no puede estar vacío"});
    expect(puertoConsultarOferta.listarOfertasUI(new AdaptadorTIOferta()).length).toBe(2)
});