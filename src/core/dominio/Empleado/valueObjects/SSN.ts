import { ValueObject } from "../../clasesBase/ValueObject"
import { ExcepcionSSNInvalido } from "../excepciones/ExcepcionSSNInvalido"

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

        if(ssn.trim() === "" || ssn === null || ssn === undefined){
            throw new ExcepcionSSNInvalido<typeof ssn >(`El ssn: "${ssn}" es inválido, el ssn no puede estar vacío`, ssn)
        }

        return new SSN({ssn})
    }

}
