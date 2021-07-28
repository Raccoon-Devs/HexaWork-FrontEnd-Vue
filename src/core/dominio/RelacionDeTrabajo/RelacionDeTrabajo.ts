import { Entidad } from "../ClasesBase/Entidad"
import { IDRelacionDeTrabajo } from "./ValueObjects/IDRelacionDeTrabajo"
import { Postulacion, PostulacionPropiedades } from "../Postulacion/Postulacion"
import { Calendario, CalendarioPropiedades } from "../valueObjectsComunes/Calendario"
import { EstadoRelacionDeTrabajo } from "./ValueObjects/EstadoRelacionDeTrabajo"


export interface RelacionDeTrabajoPropiedades {
    idRelacion: IDRelacionDeTrabajo,
    postulacion: Postulacion,
    calendario: Calendario[],
    estadoRelacionDeTrabajo: EstadoRelacionDeTrabajo
}

export class RelacionDeTrabajo extends Entidad<RelacionDeTrabajoPropiedades> {

    private constructor (propiedades: RelacionDeTrabajoPropiedades) {
        super(propiedades, propiedades.idRelacion)
    }

    obtenerId(): string | number {
        return this.propiedades.idRelacion.obtenerId()
    }

    obtenerPostulacion(): Postulacion {
        return this.propiedades.postulacion.obtenerPostulacion()
    }

    obtenerCalendario(): CalendarioPropiedades[]{
        const calendario: CalendarioPropiedades[] = []
        this.propiedades.calendario.forEach(fecha => {
            calendario.push(fecha.obtenerCalendario())
        });
        return calendario
    }

    obtenerEstadoRelacionDeTrabajo(): number {
        return this.propiedades.estadoRelacionDeTrabajo.obtenerEstadoRelacionDeTrabajo()
    }

    obtenerRelacionDeTrabajo(): RelacionDeTrabajo {
        return this
    }

    public static crear(atributos: any): RelacionDeTrabajo {
        const calendario: Calendario[] = []

        atributos.calendario.forEach(fecha => {
            calendario.push(Calendario.crear(fecha))
        });
        
        return new RelacionDeTrabajo(
            {
                idRelacion: IDRelacionDeTrabajo.crear(atributos.id),
                postulacion: Postulacion.crear(atributos.postulacion.propiedades),
                calendario: calendario,
                estadoRelacionDeTrabajo: EstadoRelacionDeTrabajo.crear(atributos.estadoRelacionDeTrabajo)
            }
        )
    }
}
