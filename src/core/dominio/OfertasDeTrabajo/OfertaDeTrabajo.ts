import { Entidad } from "../clasesBase/Entidad"
import { IDOferta } from "./valueObjects/IDOferta"
import { TiempoLimitePostulacion } from "./valueObjects/TiempoLimitePostulacion"
import { Duracion } from "./valueObjects/Duracion"
import { Remuneracion } from "./valueObjects/Remuneracion"
import { EstadoOfertaDeTrabajo } from "./valueObjects/EstadoOfertaDeTrabajo"
import { Vacante } from "./valueObjects/Vacante"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"
import { Calendario, CalendarioPropiedades } from "../valueObjectsComunes/Calendario"
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion"
import { RequerimientosEspecialesOfertaDeTrabajo } from "./valueObjects/RequerimientosEspecialesOfertaDeTrabajo"
import { Habilidad } from "../habilidad/Habilidad"
import { Certificacion } from "../certificacion/Certificacion"

export interface OfertaDeTrabajoPropiedades{
    idOfertaDeTrabajo: IDOferta,
    tituloTrabajo: TituloTrabajo,
    //empleador: Empleador,
    direccion: Direccion,
    fechaLimitePostulacionOfertaDeTrabajo: TiempoLimitePostulacion,
    calendario: Calendario[],
    habilidades: Habilidad[],
    requerimientosEspeciales: RequerimientosEspecialesOfertaDeTrabajo,
    certificaciones: Certificacion[],
    duracion: Duracion,
    remuneracionPorHora: Remuneracion,
    estadoOfertaDeTrabajo: EstadoOfertaDeTrabajo,
    vacantes: Vacante
}

export class OfertaDeTrabajo extends Entidad<OfertaDeTrabajoPropiedades> {

    private constructor (propiedades: OfertaDeTrabajoPropiedades) {
        super(propiedades, propiedades.idOfertaDeTrabajo)
    }

    obtenerId(): string | number{
        return this.propiedades.idOfertaDeTrabajo.obtenerId()
    }

    obtenerTitulo(): string{
        return this.propiedades.tituloTrabajo.obtenerTitulo()
    }

    // obtenerEmpleador(): Empleador{
    //     return this.propiedades.empleador.obtenerEmpleador()
    // }

    obtenerDireccion(): DireccionPropiedades{
        return this.propiedades.direccion.obtenerDireccion()
    }

    obtenerFechaLimite(): Date{
        return this.propiedades.fechaLimitePostulacionOfertaDeTrabajo.obtenerFechaLimite()
    }

    obtenerCalendario(): CalendarioPropiedades[]{
        const calendario: CalendarioPropiedades[] = []
        this.propiedades.calendario.forEach(fecha => {
            calendario.push(fecha.obtenerCalendario())
        });
        return calendario
    }

    obtenerHabilidades(): Habilidad[]{
    
        const habilidades: Habilidad[] = []
        this.propiedades.habilidades.forEach(habilidad => {
            habilidades.push(habilidad.obtenerHabilidad())
        });
    
        return habilidades
    }

    obtenerRequerimientos(): string{
        return this.propiedades.requerimientosEspeciales.obtenerRequerimientos()
    }

    obtenerCertificaciones(): Certificacion[]{
    
        const certificaciones: Certificacion[] = []
        this.propiedades.certificaciones.forEach(certificacion => {
            certificaciones.push(certificacion.obtenerCertificacion())
        });
    
        return certificaciones
    }

    obtenerDuracion(): number{
        return this.propiedades.duracion.obtenerDuracion()
    }

    obtenerRemuneracion(): number{
        return this.propiedades.remuneracionPorHora.obtenerRemuneracion()
    }

    obtenerEstadoOfertaDeTrabajo(): number{
        return this.propiedades.estadoOfertaDeTrabajo.obtenerEstado()
    }

    obtenerVacante(): number{
        return this.propiedades.vacantes.obtenerVacante()
    }

    obtenerOfertaDeTrabajo(): OfertaDeTrabajo{
        return this
    }

    public static update(ofertaDeTrabajo: any,): OfertaDeTrabajo {

        return new OfertaDeTrabajo(
            <unknown>{...ofertaDeTrabajo} as OfertaDeTrabajoPropiedades
        )
    }

    public static crear(atributos: any): OfertaDeTrabajo {
        return new OfertaDeTrabajo(
            {
                idOfertaDeTrabajo: atributos.idOfertaDeTrabajo,
                tituloTrabajo: atributos.tituloTrabajo,
                //empleador: atributos.empleador,
                direccion:atributos.direccion,
                fechaLimitePostulacionOfertaDeTrabajo: atributos.fechaLimitePostulacionOfertaDeTrabajo,
                requerimientosEspeciales: atributos.requerimientosEspeciales,
                duracion: atributos.duracion,
                remuneracionPorHora: atributos.remuneracionPorHora,
                estadoOfertaDeTrabajo: atributos.estadoOfertaDeTrabajo,
                vacantes: atributos.vacantes,
                certificaciones: atributos.certificaciones,
                habilidades: atributos.habilidades,
                calendario: atributos.calendario
            }
        )
    }
}
