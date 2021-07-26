import { Entidad } from "../ClasesBase/Entidad"
import { IDOferta } from "./ValueObjects/IDOferta"
import { TiempoLimitePostulacion, TiempoLimitePostulacionPropiedades } from "./ValueObjects/TiempoLimitePostulacion"
import { Duracion } from "./ValueObjects/Duracion"
import { Remuneracion, RemuneracionPropiedades } from "./ValueObjects/Remuneracion"
import { EstadoOfertaDeTrabajo } from "./ValueObjects/EstadoOfertaDeTrabajo"
import { Vacante } from "./ValueObjects/Vacante"
import { Cargo } from "./ValueObjects/Cargo"
//import { Descripcion } from "./ValueObjects/Descripcion"
import { FechaPublicacion } from "./ValueObjects/FechaPublicacion"
import { Empleador, EmpleadorPropiedades } from "../Empleador/Empleador"
import { EmpleadorParaDominio } from "../Empleador/DTOEmpleador"
//import { DireccionPropiedades } from "../Empleador/valueObjects/Direccion"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"
import { Calendario } from "../valueObjectsComunes/Calendario"
import { Direccion } from "../valueObjectsComunes/Direccion"
import { Habilidad } from "../habilidad/Habilidad"
import { Certificacion } from "../certificacion/Certificacion"
import { RequerimientosEspecialesOfertaDeTrabajo } from "./ValueObjects/RequerimientosEspecialesOfertaDeTrabajo"


// export interface OfertaDeTrabajoPropiedades {
//     id: IDOferta
//     titulo: TituloOferta
//     empleador: Empleador
//     direccion: Direccion
//     fechaLimite: TiempoLimitePostulacion
//     duracion: Duracion
//     remuneracion: Remuneracion
//     estadoOfertaDeTrabajo:  EstadoOfertaDeTrabajo
//     vacante: Vacante
//     cargo: Cargo
//     descripcion: Descripcion
//     fechaPublicacion: FechaPublicacion | null
// }
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

// type direccionOferta = {
//     calle1: string,
//     calle2: string,
//     ciudad: string,
//     estado: string,
//     zip: string
// }

// type remuneracionOferta = {
//     monto: number,
//     frecuencia: string,
//     divisa: string
// }


export class OfertaDeTrabajo extends Entidad<OfertaDeTrabajoPropiedades> {

    private constructor (propiedades: OfertaDeTrabajoPropiedades) {
        super(propiedades, propiedades.idOfertaDeTrabajo)
    }

    obtenerTitulo(): string{
        return this.propiedades.tituloTrabajo.obtenerTitulo()
    }

    // obtenerDireccion(): DireccionPropiedades{
    //     return this.propiedades.direccion.obtenerDireccion()
    // }

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

    // obtenerCargo(): Cargo{
    //     return this.propiedades.cargo
    // }

    // obtenerFechaPublicacion(): FechaPublicacion | null{
    //     return this.propiedades.fechaPublicacion
    // }

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
                //calendario: propiedades.calendario,
                //habilidades: propiedades.habilidades,
                requerimientosEspeciales: propiedades.requerimientosEspeciales,
                //certificaciones: propiedades.certificaciones,
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
