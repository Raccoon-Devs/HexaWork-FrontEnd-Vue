import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionEstadoCursoInvalido } from '../excepciones/ExcepcionEstadoCursoInvalido'

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
        if (estadoCurso < 0 || estadoCurso > 1) {
            throw new ExcepcionEstadoCursoInvalido<typeof estadoCurso>(
                `El valor estadoCurso: ${estadoCurso} es invalido, debe estar entre 0 y 10`,
                estadoCurso
            )
        }
        return new EstadoCurso({estadoCurso})
    }
}
