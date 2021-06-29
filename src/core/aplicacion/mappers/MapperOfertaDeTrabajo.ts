import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import {Mapper} from "./Mapper"
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
            //empleador: MappearEmpleador.paraInfraestructura(oferta.obtenerEmpleador())
        }
    }
}