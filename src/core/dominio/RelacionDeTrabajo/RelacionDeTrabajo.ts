import { Entidad } from "../ClasesBase/Entidad"
import { IDRelacionDeTrabajo } from "./ValueObjects/IDRelacionDeTrabajo"
import { Postulacion } from "../Postulacion/Postulacion"
import { Calendario } from "../valueObjectsComunes/Calendario"
import { EstadoRelacionDeTrabajo } from "./ValueObjects/EstadoRelacionDeTrabajo"


interface RelacionDeTrabajoPropiedades {
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

    obtenerCalendario(): any{
        const calendario: {horaInicio:string, horaFin:string}[] = []
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

    public static crear(propiedades: any): RelacionDeTrabajo {
        const calendario: Calendario[] = []

        propiedades.calendario.forEach(fecha => {
            calendario.push(Calendario.crear(fecha))
        });
        
        return new RelacionDeTrabajo(
            {
                idRelacion: IDRelacionDeTrabajo.crear(propiedades.id),
                postulacion: Postulacion.crear(propiedades.postulacion),
                calendario: calendario,
                estadoRelacionDeTrabajo: EstadoRelacionDeTrabajo.crear(propiedades.estadoRelacionDeTrabajo)
            }
        )
    }
}
