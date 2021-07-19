import { ValueObject } from "../../ClasesBase/ValueObject"

interface EstadoCursoPropiedades {
    estadoCurso: number
}

export class EstadoCurso extends ValueObject<EstadoCursoPropiedades> {

    private constructor (propiedades: EstadoCursoPropiedades) {
        super(propiedades)
    }

    obtenerEstadoCurso(): number {
        return this.propiedades.estadoCurso
    }

    public static crear(estadoCurso: number): EstadoCurso {
        return new EstadoCurso({estadoCurso})
    }
}
