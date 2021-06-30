import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import {Mapper} from "./Mapper"
import { MappearEmpleador } from "./MapperEmpleador";
export class MappearOfertaDeTrabajo extends Mapper{

    public paraInfraestructura(oferta: OfertaDeTrabajo){
        return {
            titulo : oferta.obtenerTitulo(),
            direccion: oferta.obtenerDireccion(),
            fechaLimite: oferta.obtenerFechaLimite(),
            duracion: oferta.obtenerDuracion(),
            remuneracion: oferta.obtenerRemuneracion(),
            estadoOfertaDeTrabajo: oferta.obtenerEstadoOfertaDeTrabajo(),
            vacante: oferta.obtenerVacante(),
            cargo: oferta.obtenerCargo(),
            descripcion: oferta.obtenerDescripcion(),
            fechaPublicacion: oferta.obtenerFechaPublicacion(),
            id: oferta.obtenerId(),
            //empleador: {nombre: oferta.propiedades.empleador.propiedades.nombreEmpresa, id: oferta.propiedades.empleador.obtenerId()}
            empleador: new MappearEmpleador().paraInfraestructura(oferta.obtenerEmpleador())
        }
    }
}