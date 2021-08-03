import { Entidad } from "../clasesBase/Entidad"
import { Empleado, EmpleadoPropiedades } from "../empleado/Empleado"
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../ofertasDeTrabajo/OfertaDeTrabajo"
import { PasarADominio } from "../servicios/PasarADominio"
import { EstadoPostulacion } from "./valueObjects/EstadoPostulacion"
import { FechaPostulacion } from "./valueObjects/Fechapostulacion"
import { IDPostulacion } from "./valueObjects/IDPostulacion"

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

        const datosOferta: OfertaDeTrabajoPropiedades = new PasarADominio().aDominio(atributos.ofertaDeTrabajo)

        return new Postulacion(
            {
                idPostulacion: IDPostulacion.crear(atributos.idPostulacion),
                fechaPostulacion: FechaPostulacion.crear(
                    atributos.fechaPostulacion,
                    //    atributos.ofertaDeTrabajo.fechaLimiteOfertaDeTrabajo
                    atributos.ofertaDeTrabajo.fechaLimitePostulacionOfertaDeTrabajo
                ),
                empleado: Empleado.crear(atributos.empleado),
                ofertaDeTrabajo: OfertaDeTrabajo.crear(datosOferta),
                estadoPostulacion: EstadoPostulacion.crear(atributos.estadoPostulacion),
            }
        )
    }
}
