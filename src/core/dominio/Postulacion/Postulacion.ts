import { Entidad } from "../ClasesBase/Entidad"
import { Empleado, EmpleadoPropiedades } from "../Empleado/Empleado"
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

    obtenerId(): string | number{
        return this.propiedades.idPostulacion.obtenerId()
    }

    obtenerFechaPostulacion(): Date | string{
        return this.propiedades.fechaPostulacion.obtenerFechaPublicacion()
    }

    obtenerEmpleado(): Empleado{
        return this.propiedades.empleado.obtenerEmpleado()
    }

    obtenerOfertaDeTrabajo(): OfertaDeTrabajo{
        return this.propiedades.ofertaDeTrabajo.obtenerOfertaDeTrabajo()
    }

    obtenerEstadoPostulacion(): number{
        return this.propiedades.estadoPostulacion.obtenerEstado()
    }

    obtenerPostulacion(): Postulacion{
        return this
    }

    public static crear(atributos: any): Postulacion {
        return new Postulacion(
            {
                idPostulacion: IDPostulacion.crear(atributos.idPostulacion),
                fechaPostulacion: FechaPostulacion.crear(
                    atributos.fechaPostulacion,
                    atributos.ofertaDeTrabajo.fechaLimiteOfertaDeTrabajo
                ),
                empleado: Empleado.crear(atributos.empleado),
                ofertaDeTrabajo: OfertaDeTrabajo.crear(atributos.ofertaDeTrabajo),
                estadoPostulacion: EstadoPostulacion.crear(atributos.estadoPostulacion),
            }
        )
    }
}
