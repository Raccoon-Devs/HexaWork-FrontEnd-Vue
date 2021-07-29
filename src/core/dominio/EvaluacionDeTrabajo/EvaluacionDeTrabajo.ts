import { Entidad } from "../ClasesBase/Entidad"
import { IDEvaluacionDeTrabajo } from "./ValueObjects/IDEvaluacionDeTrabajo"
import { PreguntasEvaluacionDeTrabajo, PreguntasEvaluacionPropiedades } from "./ValueObjects/PreguntasEvaluacionDeTrabajo"
import { PuntuacionEvaluacionDeTrabajo, PuntuacionEvaluacionPropiedades } from "./ValueObjects/PuntuacionesEvaluacionDeTrabajo"
import { PuntuacionPromedioEvaluacionDeTrabajo } from "./ValueObjects/PuntuacionPromedioEvaluacionDeTrabajo"
import { RelacionDeTrabajo, RelacionDeTrabajoPropiedades } from "../RelacionDeTrabajo/RelacionDeTrabajo"


export interface EvaluacionDeTrabajoPropiedades {
    idEvaluacion: IDEvaluacionDeTrabajo,
    preguntas: PreguntasEvaluacionDeTrabajo,
    puntuaciones: PuntuacionEvaluacionDeTrabajo,
    puntuacionPromedio: PuntuacionPromedioEvaluacionDeTrabajo,
    trabajo: RelacionDeTrabajo,
}

export class EvaluacionDeTrabajo extends Entidad<EvaluacionDeTrabajoPropiedades> {

    private constructor (propiedades: EvaluacionDeTrabajoPropiedades) {
        super(propiedades, propiedades.idEvaluacion)
    }

    obtenerId(): string | number {
        return this.propiedades.idEvaluacion.obtenerId()
    }

    obtenerPreguntasEvaluacion(): PreguntasEvaluacionPropiedades {
        return this.propiedades.preguntas.obtenerPreguntasEvaluacionDeTrabajo()
    }

    obtenerPuntuacionEvaluacion(): PuntuacionEvaluacionPropiedades {
        return this.propiedades.puntuaciones.obtenerPreguntasEvaluacionDeTrabajo()
    }

    obtenerPuntuacionPromedio(): number {
        return this.propiedades.puntuacionPromedio.obtenerPuntuacionPromedio()
    }

    obtenerRelacionDeTrabajo(): RelacionDeTrabajo {
        return this.propiedades.trabajo.obtenerRelacionDeTrabajo()
    }

    obtenerEvaluacionDeTrabajo(): EvaluacionDeTrabajo {
        return this
    }

    public static crear(atributos: any): EvaluacionDeTrabajo {
        return new EvaluacionDeTrabajo(
            {
                idEvaluacion: IDEvaluacionDeTrabajo.crear(atributos.idEvaluacion),
                preguntas: PreguntasEvaluacionDeTrabajo.crear(
                    atributos.preguntas.pregunta1,
                    atributos.preguntas.pregunta2,
                    atributos.preguntas.pregunta3,
                    atributos.preguntas.pregunta4,
                    atributos.preguntas.pregunta5,
                ),
                puntuaciones: PuntuacionEvaluacionDeTrabajo.crear(
                    atributos.puntuaciones.puntuacion1,
                    atributos.puntuaciones.puntuacion2,
                    atributos.puntuaciones.puntuacion3,
                    atributos.puntuaciones.puntuacion4,
                    atributos.puntuaciones.puntuacion5,
                ),
                puntuacionPromedio: PuntuacionPromedioEvaluacionDeTrabajo.crear(atributos.puntuacionPromedio),
                trabajo: RelacionDeTrabajo.crear(atributos.trabajo)
            }
        )
    }
}
