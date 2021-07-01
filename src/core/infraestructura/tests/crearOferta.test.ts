import { CrearOfertaDeTrabajo } from "../../aplicacion/servicios/CrearOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../..//aplicacion/ui/UIPuertoCrearOferta";


test('Crea una oferta de trabajo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        descripcion: {
            propiedades: {
                descripcion: "descripcion"
            }
        },
        direccion: {calle1: "a", calle2: "a", ciudad: "a", estado:"a", zip:"a"},
        duracion: "a",
        fechaLimite: "2020-05-05",
        titulo: "a",
        vacante: "5",
        remuneracion: {monto: "5", divisa:"dolar", frecuencia:"hora"},
        cargo: {
            propiedades: {
                cargo : "cargo"
            }
        },
        estadoOfertaDeTrabajo: 0,
        empleador: {
            id: "5",
            nombreEmpresa: {
                nombre: "nombreEmpresa",
                rif: "rif"
            },
            direccion: {
                propiedades: {
                    calle1: "calle1",
                    calle2: "calle2",
                    ciudad: "ciudad",
                    estado: "estado",
                    zip: "zip"
                }
            } ,
            infoEmpleador: {
                propiedades: {
                    nombreCompleto: "string",
                    cargoDeTrabajo: "string",
                    numeroDeTelefono: "string",
                    correo: "string"
                }
            },
            rol:{ propiedades:{
                nombre: "rolrolrolrol"
            }}
        },
    }
    expect(puertoOferta.crearOfertaUI(oferta)).toEqual({statusCode: 201, mensaje: "Oferta Creada Con éxito"});
});

test('Muestra error al intentar crear una oferta de trabajo sin título', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        descripcion: {
            propiedades: {
                descripcion: "descripcion"
            }
        },
        direccion: {calle1: "a", calle2: "a", ciudad: "a", estado:"a", zip:"a"},
        duracion: "a",
        fechaLimite: "2020-05-05",
        titulo: "",
        vacante: "5",
        remuneracion: {monto: "5", divisa:"dolar", frecuencia:"hora"},
        cargo: {
            propiedades: {
                cargo : "cargo"
            }
        },
        estadoOfertaDeTrabajo: 0,
        empleador: {
            id: "5",
            nombreEmpresa: {
                nombre: "nombreEmpresa",
                rif: "rif"
            },
            direccion: {
                propiedades: {
                    calle1: "calle1",
                    calle2: "calle2",
                    ciudad: "ciudad",
                    estado: "estado",
                    zip: "zip"
                }
            } ,
            infoEmpleador: {
                propiedades: {
                    nombreCompleto: "string",
                    cargoDeTrabajo: "string",
                    numeroDeTelefono: "string",
                    correo: "string"
                }
            },
            rol:{ propiedades:{
                nombre: "rolrolrolrol"
            }}
        },
    }
    expect(puertoOferta.crearOfertaUI(oferta)).toEqual({statusCode: 422, mensaje: "El titulo: \"\" es inválido, el título no puede estar vacío"});
});

test('Muestra error al intentar crear una oferta de trabajo con un monto de remuneración negativo', () => {

    const puertoOferta: UIPuertoCrearOferta = new CrearOfertaDeTrabajo()
    const oferta = {
        descripcion: {
            propiedades: {
                descripcion: "descripcion"
            }
        },
        direccion: {calle1: "Principal", calle2: "Oeste", ciudad: "Caracas", estado:"Distrito Capital", zip:"1011"},
        duracion: "a",
        fechaLimite: "2020-05-05",
        titulo: "Desarrollador de Software",
        vacante: "5",
        remuneracion: {monto: "-500", divisa:"dolar", frecuencia:"hora"},
        cargo: {
            propiedades: {
                cargo : "cargo"
            }
        },
        estadoOfertaDeTrabajo: 0,
        empleador: {
            id: "5",
            nombreEmpresa: {
                nombre: "nombreEmpresa",
                rif: "rif"
            },
            direccion: {
                propiedades: {
                    calle1: "calle1",
                    calle2: "calle2",
                    ciudad: "ciudad",
                    estado: "estado",
                    zip: "zip"
                }
            } ,
            infoEmpleador: {
                propiedades: {
                    nombreCompleto: "string",
                    cargoDeTrabajo: "string",
                    numeroDeTelefono: "string",
                    correo: "string"
                }
            },
            rol:{ propiedades:{
                nombre: "rolrolrolrol"
            }}
        },
    }
    expect(puertoOferta.crearOfertaUI(oferta)).toEqual({statusCode: 422, mensaje: "El monto: -500 es inválido, no puede ser negativo"});
});

