import { ValueObject } from "../../clasesBase/ValueObject"

interface FechaNacimientoPropiedades {
    fechaNacimiento: Date
}

export class FechaNacimiento extends ValueObject<FechaNacimientoPropiedades> {

    constructor (propiedades: FechaNacimientoPropiedades) {
        super(propiedades)
    }

    obtenerFechaNacimiento(): Date {
        return this.propiedades.fechaNacimiento
    }

    public static crear(fechaNacimiento: Date): FechaNacimiento {
        return new FechaNacimiento({fechaNacimiento})
    }
}
