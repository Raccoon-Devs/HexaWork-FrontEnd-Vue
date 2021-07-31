import { APIPuerto } from "../aplicacion/api/APIPuerto";
import { OfertaParaDominio } from "../dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";


export class AdaptadorTUOferta extends APIPuerto{

    public listarOfertas():any{
       return [
            {
                idOfertaDeTrabajo: "",
                tituloTrabajo: "Título crear oferta",
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
       ]
    }

    public crearOferta(ofertaDeTrabajo: OfertaParaDominio){
        return {statusCode: 201, mensaje: "Oferta Creada Con éxito"}
    }

    public actualizarOferta(ofertaDeTrabajo: OfertaParaDominio) {
        return {statusCode: 201, mensaje: "Oferta Actualizada Con éxito"}
    }

}
