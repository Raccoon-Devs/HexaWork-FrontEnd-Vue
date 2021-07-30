import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionCodigoCursoInvalido } from "../Excepciones/ExcepcionCodigoCursoInvalido"

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

        if(codigo.trim() === "" || codigo === null || codigo === undefined){
            throw new ExcepcionCodigoCursoInvalido<typeof codigo >(`El código: "${codigo}" es inválido, el código del curso no puede estar vacío`, codigo)
        }

        return new CodigoCurso({codigo})
    }
}
