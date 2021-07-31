import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import { ServicioPublicarOfertaDeTrabajo } from "../../dominio/servicios/ServicioPublicarOfertaDeTrabajo";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuertoPublicarOferta } from "../ui/UIPuertoPublicarOferta";

export class PublicarOfertaDeTrabajo extends UIPuertoPublicarOferta {

    public publicarOfertaUI(oferta: OfertaParaDominio, apiPuerto: APIPuerto){
        try {
     
            oferta.estadoOfertaDeTrabajo = 1

            const ofertaDominio = ServicioPublicarOfertaDeTrabajo.pasarADominio(oferta)

            const ofertaApi = this.mappearAInfraestructura(new MappearOfertaDeTrabajo(), ofertaDominio)
          
            return this.actualizarOfertaApi(apiPuerto, ofertaApi)
      
        } catch (error) {
            return error.mensaje
        }
    }

    private mappearAInfraestructura(mapper: Mapper, oferta: OfertaDeTrabajo){
        return mapper.paraInfraestructura(oferta)
    }

    public actualizarOfertaApi(apiPuerto: APIPuerto, ofertaDeTrabajo: OfertaParaDominio):void {
        return apiPuerto.actualizarOferta(ofertaDeTrabajo)
    }

}
