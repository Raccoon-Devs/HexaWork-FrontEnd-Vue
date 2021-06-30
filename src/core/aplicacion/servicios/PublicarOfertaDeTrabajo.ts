import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import { ServicioPublicarOfertaDeTrabajo } from "@/core/dominio/servicios/ServicioPublicarOfertaDeTrabajo";
import { AdaptadorMockOferta } from "@/core/infraestructura/adaptadorMockOferta";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuertoPublicarOferta } from "../ui/UIPuertoPublicarOferta";

export class PublicarOfertaDeTrabajo extends UIPuertoPublicarOferta{

    public publicarOfertaUI(oferta: OfertaParaDominio){
        // const ofertaDominio = ServicioPublicarOfertaDeTrabajo.pasarADominio(oferta)
        // const ofertaApi = this.mappearAInfraestructura(new MappearOfertaDeTrabajo(), ofertaDominio)
        this.publicarOfertaApi(new AdaptadorMockOferta(), oferta)
    }

    private mappearAInfraestructura(mapper: Mapper, oferta: OfertaDeTrabajo){
        return mapper.paraInfraestructura(oferta)
    }

    public publicarOfertaApi(apiPuerto: APIPuerto, ofertaDeTrabajo: OfertaParaDominio): void{
        apiPuerto.publicarOferta(ofertaDeTrabajo)
    }
    
}