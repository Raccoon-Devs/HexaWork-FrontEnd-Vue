import { ValueObject } from "../../ClasesBase/ValueObject"

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
        return new EstadoEmpleado({estado})
    }
}
