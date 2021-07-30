import { ValueObject } from "../../ClasesBase/ValueObject"

interface SSNPropiedades {
    ssn: string
}

export class SSN extends ValueObject<SSNPropiedades> {

    constructor (propiedades: SSNPropiedades) {
        super(propiedades)
    }

    obtenerSSN(): string {
        return this.propiedades.ssn
    }

    public static crear(ssn: string): SSN {
        return new SSN({ssn})
    }

}
