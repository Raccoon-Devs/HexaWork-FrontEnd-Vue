import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import { ServicioCrearOfertaDeTrabajo } from "@/core/dominio/servicios/ServicioCrearOfertaDeTrabajo";
import { AdaptadorMockOferta } from "@/core/infraestructura/adaptadorMockOferta";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../ui/UIPuertoCrearOferta";

export class CrearOfertaDeTrabajo extends UIPuertoCrearOferta{

    private resultado:any

    public crearOfertaUI(oferta: OfertaParaDominio){

        //alert(oferta.empleador.rol.nombre)
        //1 llamar a dominio
        const ofertaDominio = ServicioCrearOfertaDeTrabajo.pasarADominio(oferta)
        // alert(ofertaDominio.obtenerTitulo())
        // alert(ofertaDominio.propiedades.empleador.propiedades.rol.propiedades.nombre)
        //2 mappear a la api
        console.log(ofertaDominio.obtenerEmpleador)
        const ofertaApi = this.mappearAInfraestructura(new MappearOfertaDeTrabajo(), ofertaDominio)
        
        //3 llamar a la api

        this.crearOfertaApi(new AdaptadorMockOferta(), ofertaApi)
    }

    private mappearAInfraestructura(mapper: Mapper, oferta: OfertaDeTrabajo){

        return mapper.paraInfraestructura(oferta)
    }

    public crearOfertaApi(apiPuerto: APIPuerto, ofertaDeTrabajo: OfertaParaDominio):void{

        const ofertas = apiPuerto.crearOferta(ofertaDeTrabajo)
    }
    
}