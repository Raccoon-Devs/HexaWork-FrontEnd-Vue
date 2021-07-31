import { ValueObject } from "../../ClasesBase/ValueObject"

interface PuntuacionPromedioPropiedades {
    promedio: number
}

export class PuntuacionPromedioEvaluacionDeTrabajo extends ValueObject<PuntuacionPromedioPropiedades> {

    private constructor (propiedades: PuntuacionPromedioPropiedades) {
        super(propiedades)
    }

    obtenerPuntuacionPromedio(): number {
        return this.propiedades.promedio
    }

    public static crear(promedio: number): PuntuacionPromedioEvaluacionDeTrabajo {
        return new PuntuacionPromedioEvaluacionDeTrabajo({promedio})
    }
}
