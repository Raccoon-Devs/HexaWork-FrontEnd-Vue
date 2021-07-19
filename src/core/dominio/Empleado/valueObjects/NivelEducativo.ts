import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionNivelEducativoInvalido } from '../excepciones/ExcepcionNivelEducativoInvalido'

interface NivelEducativoPropiedades {
    nivelEducativo: number
}

export class NivelEducativo extends ValueObject<NivelEducativoPropiedades> {

    constructor (propiedades: NivelEducativoPropiedades) {
        super(propiedades)
    }

    obtenerNivelEducativo(): number {
        return this.propiedades.nivelEducativo
    }

    public static crear(nivelEducativo: number): NivelEducativo {
        if (nivelEducativo < 0 || nivelEducativo > 10) {
            throw new ExcepcionNivelEducativoInvalido<typeof nivelEducativo>(
                `El valor nivelEducativo: ${nivelEducativo} es invalido, debe estar entre 0 y 10`,
                nivelEducativo
            )
        }
        return new NivelEducativo({nivelEducativo})
    }
}
