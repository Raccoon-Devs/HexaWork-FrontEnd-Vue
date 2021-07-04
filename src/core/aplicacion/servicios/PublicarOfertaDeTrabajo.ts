import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import { ServicioPublicarOfertaDeTrabajo } from "../../dominio/servicios/ServicioPublicarOfertaDeTrabajo";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { UIPuertoPublicarOferta } from "../ui/UIPuertoPublicarOferta";

export class PublicarOfertaDeTrabajo extends UIPuertoPublicarOferta {

    private resultado:any

    public publicarOfertaUI(oferta: any, apiPuerto: APIPuerto){
        try {
     
            oferta.estadoOfertaDeTrabajo = 1
            oferta.fechaPublicacion = new Date().toISOString().slice(0, 10)

            const ofertaDominio = ServicioPublicarOfertaDeTrabajo.pasarADominio(oferta)

            return this.actualizarOfertaApi(apiPuerto, ofertaDominio)
      
        } catch (error) {
            return {statusCode: 500, mensaje:error.mensaje}
        }
    }

    private mappearAInfraestructura(mapper: Mapper, oferta: OfertaDeTrabajo){
        return mapper.paraInfraestructura(oferta)
    }

    public actualizarOfertaApi(apiPuerto: APIPuerto, ofertaDeTrabajo: any):void {
        const ofertas = apiPuerto.actualizarOferta(ofertaDeTrabajo)
        return ofertas
    }


}
