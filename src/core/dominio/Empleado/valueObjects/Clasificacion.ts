import { ValueObject } from "../../ClasesBase/ValueObject"

interface ClasificacionPropiedades {
    promedio: number
}

export class Clasificacion extends ValueObject<ClasificacionPropiedades> {

    constructor (propiedades: ClasificacionPropiedades) {
        super(propiedades)
    }

    obtenerClasificacion(): number {
        return this.propiedades.promedio
    }

    public static crear(promedio: number): Clasificacion {
        return new Clasificacion({promedio})
    }
}
