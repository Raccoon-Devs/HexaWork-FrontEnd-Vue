let ofertas: any[] = [
    {
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
        id: {
            valor: "1"
        }
    }
]

export function actualizarOferta(oferta: any): any {
    ofertas.map(o => {
        if (oferta._id.valor == o.id.valor) {
            o.estadoOfertaDeTrabajo = 1
        }
    })
    return {statusCode: 201, mensaje: "Oferta Actualizada Con éxito"}
}

export function crearOferta(oferta: any): any{

    oferta.id.valor = (ofertas.length+1).toString()
    ofertas.push(oferta)
    return {statusCode: 201, mensaje: "Oferta Creada Con éxito"}
}

export function obtenerOfertas():any{
    return ofertas
}
