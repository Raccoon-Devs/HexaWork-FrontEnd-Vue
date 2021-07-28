import { Entidad } from "../ClasesBase/Entidad"
import { Empleado } from "../Empleado/Empleado"
import { OfertaDeTrabajo } from "../OfertasDeTrabajo/OfertaDeTrabajo"
import { EstadoPostulacion } from "./ValueObjects/EstadoPostulacion"
import { FechaPostulacion } from "./ValueObjects/Fechapostulacion"
import { IDPostulacion } from "./ValueObjects/IDPostulacion"

export interface PostulacionPropiedades {
    idPostulacion: IDPostulacion
    fechaPostulacion: FechaPostulacion
    empleado: Empleado
    ofertaDeTrabajo: OfertaDeTrabajo
    estadoPostulacion: EstadoPostulacion
}

export class Postulacion extends Entidad<PostulacionPropiedades> {

    private constructor (propiedades: PostulacionPropiedades) {
        super(propiedades, propiedades.idPostulacion)
    }

    obtenerFechaPostulacion(): Date | string{
        return this.propiedades.fechaPostulacion.obtenerFechaPublicacion()
    }

    obtenerEmpleado(): Empleado{
        return this.propiedades.empleado.obtenerEmpleado()
    }

    // obtenerOfertaDeTrabajo(): string | number{
    //     return this.propiedades.ofertaDeTrabajo.obtenerOfertaDeTrabajo()
    // }

    obtenerEstadoPostulacion(): number{
        return this.propiedades.estadoPostulacion.obtenerEstado()
    }

    obtenerId(): string | number{
        return this.propiedades.idPostulacion.obtenerId()
    }

    obtenerPostulacion(): Postulacion{
        return this
    }

    public static crear(propiedades: any): Postulacion

        {
        return new Postulacion(
            {
                idPostulacion: IDPostulacion.crear(propiedades.idPostulacion),
                fechaPostulacion: FechaPostulacion.crear(propiedades.fechaPostulacion, propiedades.ofertaDeTrabajo.fechaLimiteOfertaDeTrabajo),
                empleado: Empleado.crear(propiedades.empleado),
                ofertaDeTrabajo: OfertaDeTrabajo.crear(propiedades.ofertaDeTrabajo),
                estadoPostulacion: EstadoPostulacion.crear(propiedades.estadoPostulacion),
            }
        )
    }
}
