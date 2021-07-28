import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionTituloCursoInvalido } from "../Excepciones/ExcepcionTituloCursoInvalido"

interface TituloCursoPropiedades {
    titulo: string
}

export class TituloCurso extends ValueObject<TituloCursoPropiedades> {

    private constructor (propiedades: TituloCursoPropiedades) {
        super(propiedades)
    }

    obtenerTitulo(): string {
        return this.propiedades.titulo
    }

    public static crear(titulo: string): TituloCurso {

        if(titulo.trim() === "" || titulo === null || titulo === undefined){
            throw new ExcepcionTituloCursoInvalido<typeof titulo >(`El titulo: "${titulo}" es inválido, el título no puede estar vacío`, titulo)
        }

        return new TituloCurso({titulo})
    }
}
