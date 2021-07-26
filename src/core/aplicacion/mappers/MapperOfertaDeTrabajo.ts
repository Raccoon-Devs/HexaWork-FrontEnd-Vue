import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import {Mapper} from "./Mapper"
import { MappearEmpleador } from "./MapperEmpleador";
export class MappearOfertaDeTrabajo extends Mapper{

    public paraInfraestructura(oferta: OfertaDeTrabajo): any{
        return {
            tituloTrabajo: oferta.obtenerTitulo(),
            direccion: oferta.obtenerDireccion(),
            fechaLimitePostulacionOfertaDeTrabajo: oferta.obtenerFechaLimite(),
            duracion: oferta.obtenerDuracion(),
            remuneracionPorHora: oferta.obtenerRemuneracion(),
            requerimientosEspeciales: oferta.obtenerRequerimientos(),
            estadoOfertaDeTrabajo: oferta.obtenerEstadoOfertaDeTrabajo(),
            vacantes: oferta.obtenerVacante(),
            habilidades: oferta.obtenerHabilidades(),
            certificaciones: oferta.obtenerCertificaciones(),
            calendario: oferta.obtenerCalendario(),
            idOfertaDeTrabajo: oferta.obtenerId(),
            //empleador: {nombre: oferta.propiedades.empleador.propiedades.nombreEmpresa, id: oferta.propiedades.empleador.obtenerId()}
            //empleador: new MappearEmpleador().paraInfraestructura(oferta.obtenerEmpleador())
        }
    }
}