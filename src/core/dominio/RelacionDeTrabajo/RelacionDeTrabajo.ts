import { Entidad } from "../clasesBase/Entidad"
import { IDRelacionDeTrabajo } from "./valueObjects/IDRelacionDeTrabajo"
import { Postulacion, PostulacionPropiedades } from "../postulacion/Postulacion"
import { Calendario, CalendarioPropiedades } from "../valueObjectsComunes/Calendario"
import { EstadoRelacionDeTrabajo } from "./valueObjects/EstadoRelacionDeTrabajo"


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
        return new RelacionDeTrabajo(
            {
                idRelacion: atributos.idRelacion,
                postulacion: atributos.postulacion,
                calendario: atributos.calendario,
                estadoRelacionDeTrabajo: atributos.estadoRelacionDeTrabajo
            }
        )
    }
}
