import { ValueObject } from "../../ClasesBase/ValueObject"

interface CodigoCursoPropiedades {
    codigo: string
}

export class CodigoCurso extends ValueObject<CodigoCursoPropiedades> {

    private constructor (propiedades: CodigoCursoPropiedades) {
        super(propiedades)
    }

    obtenerCodigo(): string {
        return this.propiedades.codigo
    }

    public static crear(codigo: string): CodigoCurso {
        return new CodigoCurso({codigo})
    }
}
