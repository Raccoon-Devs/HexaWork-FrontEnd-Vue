import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import { ServicioCrearOfertaDeTrabajo } from "@/core/dominio/servicios/ServicioCrearOfertaDeTrabajo";
import { ServicioPublicarOfertaDeTrabajo } from "@/core/dominio/servicios/ServicioPublicarOfertaDeTrabajo";
import { AdaptadorMockOferta } from "@/core/infraestructura/adaptadorMockOferta";
import { APIPuerto } from "../api/APIPuerto";
import { Mapper } from "../mappers/Mapper";
import { MappearOfertaDeTrabajo } from "../mappers/MapperOfertaDeTrabajo";
import { UIPuertoCrearOferta } from "../ui/UIPuertoCrearOferta";

export class PublicarOfertaDeTrabajo extends UIPuertoCrearOferta{

    private resultado:any

    public publicarOfertaUI(oferta: OfertaParaDominio){

        //1. get ofertas
        const apiPuerto: APIPuerto = new AdaptadorMockOferta()
        const ofertas = JSON.parse(apiPuerto.listarOfertas())
        const resultado: OfertaParaDominio = null
        ofertas.forEach((ofertaAPI : any) => {
            if (ofertaAPI.titulo == oferta.nombre && ofertaAPI.descripcion.propiedades.descripcion == oferta.descripcion) {
                this.resultado = ofertaAPI
            }
        })

        this.resultado.estadoOfertaDeTrabajo = 1
        this.resultado.fechaPublicacion = new Date()

        //alert(oferta.empleador.rol.nombre)
        //1 llamar a dominio
        const ofertaDominio = ServicioPublicarOfertaDeTrabajo.pasarADominio(this.resultado)
        // alert(ofertaDominio.obtenerTitulo())
        // alert(ofertaDominio.propiedades.empleador.propiedades.rol.propiedades.nombre)
        //2 mappear a la api
        // const ofertaApi = this.mappearAInfraestructura(new MappearOfertaDeTrabajo(), ofertaDominio)
        // console.log('ofertaApi');
        // console.log(ofertaApi);


        //3 llamar a la api

        this.actualizarOfertaApi(new AdaptadorMockOferta(), ofertaDominio)
        return ofertas
    }

    private mappearAInfraestructura(mapper: Mapper, oferta: OfertaDeTrabajo){
        return mapper.paraInfraestructura(oferta)
    }

    public actualizarOfertaApi(apiPuerto: APIPuerto, ofertaDeTrabajo: OfertaParaDominio):void {
        const ofertas = apiPuerto.actualizarOferta(ofertaDeTrabajo)
    }

}
