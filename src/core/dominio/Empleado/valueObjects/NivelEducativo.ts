import { ValueObject } from "../../ClasesBase/ValueObject"

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
        return new NivelEducativo({nivelEducativo})
    }
}
