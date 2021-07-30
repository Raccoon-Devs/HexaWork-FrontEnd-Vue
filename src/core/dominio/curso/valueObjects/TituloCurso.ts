import { ValueObject } from "../../ClasesBase/ValueObject"

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
        return new TituloCurso({titulo})
    }
}
