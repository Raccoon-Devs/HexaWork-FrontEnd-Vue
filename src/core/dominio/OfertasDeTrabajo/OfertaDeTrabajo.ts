import { Entidad } from "../ClasesBase/Entidad"
import { IDOferta } from "./ValueObjects/IDOferta"
import { TiempoLimitePostulacion } from "./ValueObjects/TiempoLimitePostulacion"
import { Duracion } from "./ValueObjects/Duracion"
import { Remuneracion } from "./ValueObjects/Remuneracion"
import { EstadoOfertaDeTrabajo } from "./ValueObjects/EstadoOfertaDeTrabajo"
import { Vacante } from "./ValueObjects/Vacante"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"
import { Calendario } from "../valueObjectsComunes/Calendario"
import { Direccion } from "../valueObjectsComunes/Direccion"
import { RequerimientosEspecialesOfertaDeTrabajo } from "./ValueObjects/RequerimientosEspecialesOfertaDeTrabajo"

export interface OfertaDeTrabajoPropiedades{
    idOfertaDeTrabajo: IDOferta,
    tituloTrabajo: TituloTrabajo,
    //empleador: Empleador,
    direccion:Direccion,
    fechaLimitePostulacionOfertaDeTrabajo: TiempoLimitePostulacion,
    calendario: Calendario[],
    habilidades: string[],
    requerimientosEspeciales: RequerimientosEspecialesOfertaDeTrabajo,
    certificaciones: string[],
    duracion: Duracion,
    remuneracionPorHora: Remuneracion,
    estadoOfertaDeTrabajo: EstadoOfertaDeTrabajo,
    vacantes: Vacante
}

export class OfertaDeTrabajo extends Entidad<OfertaDeTrabajoPropiedades> {

    private constructor (propiedades: OfertaDeTrabajoPropiedades) {
        super(propiedades, propiedades.idOfertaDeTrabajo)
    }

    obtenerTitulo(): string{
        return this.propiedades.tituloTrabajo.obtenerTitulo()
    }

    obtenerFechaLimite(): Date{
        return this.propiedades.fechaLimitePostulacionOfertaDeTrabajo.obtenerFechaLimite()
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

    obtenerId(): string | number{
        return this.propiedades.idOfertaDeTrabajo.obtenerId()
    }

    obtenerDuracion(): number{
        return this.propiedades.duracion.obtenerDuracion()
    }

    obtenerHabilidades(): string[]{
        return this.propiedades.habilidades
    }

    obtenerCertificaciones(): string[]{
        return this.propiedades.certificaciones
    }

    obtenerRequerimientos(): string{
        return this.propiedades.requerimientosEspeciales.obtenerRequerimientos()
    }

    obtenerDireccion(): any{
        return this.propiedades.direccion.obtenerDireccion()
    }

    obtenerCalendario():any{
        const calendario: {horaInicio:string, horaFin:string}[] = []
        this.propiedades.calendario.forEach(fecha => {
            calendario.push(fecha.obtenerCalendario())
        });
        return calendario
    }

    // obtenerEmpleador(): Empleador{
    //     return this.propiedades.empleador
    // }

    obtenerOfertaDeTrabajo(): OfertaDeTrabajoPropiedades{
        return this.propiedades
    }

    public static update(ofertaDeTrabajo: any,): OfertaDeTrabajo {

        return new OfertaDeTrabajo(
            <unknown>{...ofertaDeTrabajo} as OfertaDeTrabajoPropiedades
        )
    }

    public static crear(propiedades: any): OfertaDeTrabajo {
        return new OfertaDeTrabajo(
            {
                idOfertaDeTrabajo: propiedades.idOfertaDeTrabajo,
                tituloTrabajo: propiedades.tituloTrabajo,
                //empleador: propiedades.empleador,
                direccion:propiedades.direccion,
                fechaLimitePostulacionOfertaDeTrabajo: propiedades.fechaLimitePostulacionOfertaDeTrabajo,
                requerimientosEspeciales: propiedades.requerimientosEspeciales,
                duracion: propiedades.duracion,
                remuneracionPorHora: propiedades.remuneracionPorHora,
                estadoOfertaDeTrabajo: propiedades.estadoOfertaDeTrabajo,
                vacantes: propiedades.vacantes,
                certificaciones: propiedades.certificaciones,
                habilidades: propiedades.habilidades,
                calendario: propiedades.calendario
            }
        )
    }
}
