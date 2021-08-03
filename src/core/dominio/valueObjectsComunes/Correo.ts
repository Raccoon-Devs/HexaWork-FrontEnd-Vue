import { ValueObject } from "../clasesBase/ValueObject"

interface CorreoPropiedades {
    correo: string
}

export class Correo extends ValueObject<CorreoPropiedades> {

    private constructor (propiedades: CorreoPropiedades) {
        super(propiedades)
    }

    obtenerCorreo(): string {
        return this.propiedades.correo
    }

    public static crear(correo: string): Correo {
        return new Correo({correo})
    }
}
