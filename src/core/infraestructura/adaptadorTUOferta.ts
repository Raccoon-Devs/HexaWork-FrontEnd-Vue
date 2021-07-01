import { APIPuerto } from "../aplicacion/api/APIPuerto";
import { OfertaParaDominio } from "../dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";


export class AdaptadorTUOferta extends APIPuerto{
    
    public listarOfertas():any{
       return {
        //...this.ofertaDeTrabajo,
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
    }

    public crearOferta(ofertaDeTrabajo: OfertaParaDominio){

        return {statusCode: 201, mensaje: "Oferta Creada Con éxito"}
    }
}