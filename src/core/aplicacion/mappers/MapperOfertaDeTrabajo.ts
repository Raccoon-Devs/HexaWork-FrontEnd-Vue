import { OfertaDeTrabajo } from "@/core/dominio/OfertasDeTrabajo/OfertaDeTrabajo";
import {Mapper} from "./Mapper"
import { MappearCertificacion } from "./MapperCertificacion";
import { MappearEmpleador } from "./MapperEmpleador";
import { MappearHabilidad } from "./MapperHabilidad";

export class MappearOfertaDeTrabajo extends Mapper{

    public paraInfraestructura(oferta: OfertaDeTrabajo): any{

        const habilidades: any[] = []

        oferta.obtenerHabilidades().forEach(habilidad => {
            habilidades.push(new MappearHabilidad().paraInfraestructura(habilidad))
        });

        // const certificaciones: any[] = []

        // oferta.obtenerCertificaciones().forEach(certificacion => {
        //     certificaciones.push(new MappearCertificacion().paraInfraestructura(certificacion))
        // });

        return {
            idOfertaDeTrabajo: oferta.obtenerId(),
            tituloTrabajo: oferta.obtenerTitulo(),
            // empleador: new MappearEmpleador().paraInfraestructura(oferta.obtenerEmpleador()),
            direccion: oferta.obtenerDireccion(),
            fechaLimitePostulacionOfertaDeTrabajo: oferta.obtenerFechaLimite(),
            calendario: oferta.obtenerCalendario(),
            habilidades: habilidades,
            requerimientosEspeciales: oferta.obtenerRequerimientos(),
            certificaciones: oferta.obtenerCertificaciones(),
            // certificaciones: certificaciones,
            duracion: oferta.obtenerDuracion(),
            remuneracionPorHora: oferta.obtenerRemuneracion(),
            estadoOfertaDeTrabajo: oferta.obtenerEstadoOfertaDeTrabajo(),
            vacantes: oferta.obtenerVacante()
        }
    }
}