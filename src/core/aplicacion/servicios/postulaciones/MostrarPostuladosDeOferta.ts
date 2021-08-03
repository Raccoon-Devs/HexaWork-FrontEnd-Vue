import { Mapper } from "../../mappers/Mapper";
import { UIPuertoPostulaciones } from "../../ui/postulaciones/UIPuertoPostulaciones";
import { APIPuertoPostulaciones } from "../../api/postulaciones/APIPuertoPostulaciones";
import { PostulacionParaDominio } from "@/core/dominio/postulacion/DTOPostulacion";
import { Postulacion } from "@/core/dominio/postulacion/Postulacion";
import { ServicioListarPostulaciones } from "@/core/dominio/servicios/postulaciones/ServicioListarPostulaciones";
import { MappearPostulacion } from "../../mappers/MapperPostulacion";
import { OfertaParaDominio } from "@/core/dominio/ofertasDeTrabajo/DTOOfertaDeTrabajo";

export class MostrarPostuladosDeOferta extends UIPuertoPostulaciones{

    public listarPostulacionesUI(apiPuerto: APIPuertoPostulaciones, oferta: OfertaParaDominio): PostulacionParaDominio[] | {statusCode: number, mensaje: string}{
        try{
            const postulacionesEnElRepo = this.listarPostulacionesApi(apiPuerto, oferta)
            const mapper: Mapper = new MappearPostulacion()
            const postulaciones: PostulacionParaDominio[] = []
            postulacionesEnElRepo.forEach((postulacion : any) => {
                postulaciones.push(mapper.paraInfraestructura(postulacion))
            })
            return postulaciones
        }
        catch(error){
            return {statusCode: 500, mensaje:error.mensaje}
        }
    }

    public listarPostulacionesApi(apiPuerto: APIPuertoPostulaciones, oferta: OfertaParaDominio): Postulacion[]{

        const postulacionesEnElRepo = apiPuerto.listarPostulaciones()
        const postulaciones: any[] = []
        postulacionesEnElRepo.forEach((postulacion : any) => {
            if (oferta.idOfertaDeTrabajo == postulacion.ofertaDeTrabajo.idOfertaDeTrabajo) {
                postulaciones.push(ServicioListarPostulaciones.pasarADominio(postulacion))
            }
        })
        return postulaciones
    }

}
