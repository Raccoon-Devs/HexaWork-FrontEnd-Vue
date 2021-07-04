import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import { ServicioCrearOfertaDeTrabajo } from "../../dominio/servicios/ServicioCrearOfertaDeTrabajo";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../ui/UIPuertoCrearOferta";

export class CrearOfertaDeTrabajo extends UIPuertoCrearOferta{

    public crearOfertaUI(oferta: OfertaParaDominio, apiPuerto: APIPuerto){

        try{ 
            const ofertaDominio = ServicioCrearOfertaDeTrabajo.pasarADominio(oferta)

            const ofertaApi = this.mappearAInfraestructura(new MappearOfertaDeTrabajo(), ofertaDominio)

            return this.crearOfertaApi(apiPuerto, ofertaApi)
    
        }
        catch(error){
            return {statusCode:422, mensaje:error.mensaje}
        }

    }

    private mappearAInfraestructura(mapper: Mapper, oferta: OfertaDeTrabajo){

        return mapper.paraInfraestructura(oferta)
    }

    public crearOfertaApi(apiPuerto: APIPuerto, ofertaDeTrabajo: OfertaParaDominio):void{
        
        return apiPuerto.crearOferta(ofertaDeTrabajo)
    }
    
}