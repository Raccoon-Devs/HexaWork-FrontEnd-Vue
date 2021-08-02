import { ValueObject } from "../../clasesBase/ValueObject"

export interface PreguntasEvaluacionPropiedades {
    pregunta1: string,
    pregunta2: string,
    pregunta3: string,
    pregunta4: string,
    pregunta5: string
}

export class PreguntasEvaluacionDeTrabajo extends ValueObject<PreguntasEvaluacionPropiedades> {

    private constructor (propiedades: PreguntasEvaluacionPropiedades) {
        super(propiedades)
    }

    obtenerPregunta1(): string {
        return this.propiedades.pregunta1
    }

    obtenerPregunta2(): string {
        return this.propiedades.pregunta2
    }

    obtenerPregunta3(): string {
        return this.propiedades.pregunta3
    }

    obtenerPregunta4(): string {
        return this.propiedades.pregunta4
    }

    obtenerPregunta5(): string {
        return this.propiedades.pregunta5
    }

    obtenerPreguntasEvaluacionDeTrabajo(): PreguntasEvaluacionPropiedades {
        return this.propiedades
    }

    public static crear(
        pregunta1: string,
        pregunta2: string,
        pregunta3: string,
        pregunta4: string,
        pregunta5: string
    ): PreguntasEvaluacionDeTrabajo {
        return new PreguntasEvaluacionDeTrabajo({
            pregunta1,
            pregunta2,
            pregunta3,
            pregunta4,
            pregunta5
        })
    }
}
