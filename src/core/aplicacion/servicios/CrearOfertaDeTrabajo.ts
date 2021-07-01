import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import { AdaptadorTUOferta } from "../../infraestructura/adaptadorTUOferta";
import { ServicioCrearOfertaDeTrabajo } from "../../dominio/servicios/ServicioCrearOfertaDeTrabajo";
import { AdaptadorMockOferta } from "../../infraestructura/adaptadorMockOferta";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../ui/UIPuertoCrearOferta";

export class CrearOfertaDeTrabajo extends UIPuertoCrearOferta{

    private resultado:any

    public crearOfertaUI(oferta: OfertaParaDominio){

        try{
            const ofertaDominio = ServicioCrearOfertaDeTrabajo.pasarADominio(oferta)

            const ofertaApi = this.mappearAInfraestructura(new MappearOfertaDeTrabajo(), ofertaDominio)
            
            /*Para los tests unitarios*/ 
            return this.crearOfertaApi(new AdaptadorTUOferta(), ofertaApi)

            /*Para los tests de integración*/
            //return this.crearOfertaApi(new AdaptadorTIOferta(), ofertaApi)

            /*Para los tests de aceptació*/ 
            //return this.crearOfertaApi(new AdaptadorMockOferta(), ofertaApi)

            
            
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