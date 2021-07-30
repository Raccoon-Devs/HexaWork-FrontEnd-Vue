import { ValueObject } from "../../ClasesBase/ValueObject"
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
        if (estado < 0 || estado > 5) {
            throw new ExcepcionEstadoEmpleadoInvalido<typeof estado>(
                `El valor estado: ${estado} es invalido, debe estar entre 0 y 5`,
                estado
            )
        }
        return new EstadoEmpleado({estado})
    }
}
