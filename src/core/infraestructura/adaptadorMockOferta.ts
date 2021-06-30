import { APIPuerto } from "../aplicacion/api/APIPuerto";
import { OfertaParaDominio } from "../dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { obtenerOfertas, crearOferta } from "./persistencia/ofertas";
//import a from "./persistencia/ofertas.json";
//import * as data from "../persistencia/ofertas"


export class AdaptadorMockOferta extends APIPuerto{
    
    public listarOfertas():any{
       return obtenerOfertas()
    }

    public crearOferta(ofertaDeTrabajo: OfertaParaDominio){

        crearOferta(ofertaDeTrabajo)
        // oferta.push(
        //     {
        //         id: "7",
        //         titulo: "Economista",
        //         direccion: {
        //             calle1: "calle1",
        //             calle2: "calle2",
        //             ciudad: "ciudad",
        //             estado: "estado",
        //             zip: "zip"
        //         },
        //         fechaLimite: "2020/05/05",
        //         duracion: 5,
        //         remuneracion: {
        //             monto: 400,
        //             divisa: "dolar",
        //             frecuencia: "hora"
        //         },
        //         estadoOfertaDeTrabajo:  0,
        //         vacante: 5,
        //         cargo: "Cargo",
        //         descripcion: "Descripcion de la oferta",
        //         fechaPublicacion: "2020/05/05",
        //         empleador: {
        //             IDEmpleador: {IDEmpleador:"5"},
        //             nombreEmpresa: {
        //                 nombre: "nombreEmpresa",
        //                 rif: "rif"
        //             },
        //             direccion: {
        //                 calle1: "calle1",
        //                 calle2: "calle2",
        //                 ciudad: "ciudad",
        //                 estado: "estado",
        //                 zip: "zip"
        //             },
        //             infoEmpleador: {
        //                 nombreCompleto: "string",
        //                 cargoDeTrabajo: "string",
        //                 numeroDeTelefono: "string",
        //                 correo: "string"
        //             },
        //             rol: {
        //                 nombre: "a"
        //             }
        //         }
        //     }
        // )
    }
}