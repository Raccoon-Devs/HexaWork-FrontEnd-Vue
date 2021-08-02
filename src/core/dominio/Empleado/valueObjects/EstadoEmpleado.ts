import { ValueObject } from "../../clasesBase/ValueObject"
import { ExcepcionEstadoEmpleadoInvalido } from '../excepciones/ExcepcionEstadoEmpleadoInvalido'

interface EstadoEmpleadoPropiedades {
    estado: number
}

export class EstadoEmpleado extends ValueObject<EstadoEmpleadoPropiedades> {

    constructor (propiedades: EstadoEmpleadoPropiedades) {
        super(propiedades)
    }

    obtenerEstadoEmpleado(): number {
        return this.propiedades.estado
    }

    public static crear(estado: number): EstadoEmpleado {

        if(estado === null || estado === undefined){
            throw new ExcepcionEstadoEmpleadoInvalido<typeof estado >(`El estado: ${estado} no puede estar vacio`, estado)
        }

        if(!(estado in [0, 1, 2, 3, 4, 5])){
            throw new ExcepcionEstadoEmpleadoInvalido<typeof estado >(
                `El estado: ${estado} del empleado debe ser:
                0 (Creado), 1 (Aprobación Pendiente)
                2 (Disponible), 3 (No Disponible)
                4 (Rechazado), 5 (Suspendido)`
                , estado)
        }

        return new EstadoEmpleado({estado})
    }
}
