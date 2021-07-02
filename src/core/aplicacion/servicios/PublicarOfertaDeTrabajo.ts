import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import { ServicioPublicarOfertaDeTrabajo } from "@/core/dominio/servicios/ServicioPublicarOfertaDeTrabajo";
import { AdaptadorMockOferta } from "@/core/infraestructura/adaptadorMockOferta";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuertoPublicarOferta } from "../ui/UIPuertoPublicarOferta";

export class PublicarOfertaDeTrabajo extends UIPuertoPublicarOferta {

    private resultado:any

    public publicarOfertaUI(oferta: OfertaParaDominio, apiPuerto: APIPuerto){
        try {
            //1. get ofertas
            //const ofertas = JSON.parse(apiPuerto.listarOfertas())
            const ofertas = apiPuerto.listarOfertas()
            const resultado: OfertaParaDominio = null
            ofertas.forEach((ofertaAPI : any) => {
                if (ofertaAPI.titulo == oferta.nombre && ofertaAPI.descripcion.propiedades.descripcion == oferta.descripcion) {
                    this.resultado = ofertaAPI
                }
            })
            this.resultado.estadoOfertaDeTrabajo = 1
            this.resultado.fechaPublicacion = new Date()
            //1 llamar a dominio
            const ofertaDominio = ServicioPublicarOfertaDeTrabajo.pasarADominio(this.resultado)
            //2 mappear a la api
            // const ofertaApi = this.mappearAInfraestructura(new MappearOfertaDeTrabajo(), ofertaDominio)
            //3 llamar a la api
            this.actualizarOfertaApi(apiPuerto, ofertaDominio)
            return ofertas

        } catch (error) {
            return {statusCode: 500, mensaje:error.mensaje}
        }
    }

    private mappearAInfraestructura(mapper: Mapper, oferta: OfertaDeTrabajo){
        return mapper.paraInfraestructura(oferta)
    }

    public actualizarOfertaApi(apiPuerto: APIPuerto, ofertaDeTrabajo: OfertaParaDominio):void {
        const ofertas = apiPuerto.actualizarOferta(ofertaDeTrabajo)
    }


}
