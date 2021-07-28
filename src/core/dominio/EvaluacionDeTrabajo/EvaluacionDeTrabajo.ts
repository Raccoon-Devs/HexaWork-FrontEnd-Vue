import { Entidad } from "../ClasesBase/Entidad"
import { IDEvaluacionDeTrabajo } from "./ValueObjects/IDEvaluacionDeTrabajo"
import { PreguntasEvaluacionDeTrabajo } from "./ValueObjects/PreguntasEvaluacionDeTrabajo"
import { PuntuacionEvaluacionDeTrabajo } from "./ValueObjects/PuntuacionesEvaluacionDeTrabajo"
import { PuntuacionPromedioEvaluacionDeTrabajo } from "./ValueObjects/PuntuacionPromedioEvaluacionDeTrabajo"
import { RelacionDeTrabajo } from "../RelacionDeTrabajo/RelacionDeTrabajo"


interface EvaluacionDeTrabajoPropiedades {
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

    obtenerPreguntasEvaluacion(): PreguntasEvaluacionDeTrabajo {
        return this.propiedades.preguntas.obtenerPreguntasEvaluacionDeTrabajo()
    }

    obtenerPuntuacionEvaluacion(): PuntuacionEvaluacionDeTrabajo {
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

    public static crear(propiedades: any): EvaluacionDeTrabajo {
        return new EvaluacionDeTrabajo(
            {
                idEvaluacion: IDEvaluacionDeTrabajo.crear(propiedades.id),
                preguntas: PreguntasEvaluacionDeTrabajo.crear(
                    propiedades.preguntas.pregunta1,
                    propiedades.preguntas.pregunta2,
                    propiedades.preguntas.pregunta3,
                    propiedades.preguntas.pregunta4,
                    propiedades.preguntas.pregunta5,
                ),
                puntuaciones: PuntuacionEvaluacionDeTrabajo.crear(
                    propiedades.puntuaciones.puntuacion1,
                    propiedades.puntuaciones.puntuacion2,
                    propiedades.puntuaciones.puntuacion3,
                    propiedades.puntuaciones.puntuacion4,
                    propiedades.puntuaciones.puntuacion5,
                ),
                puntuacionPromedio: PuntuacionPromedioEvaluacionDeTrabajo.crear(propiedades.puntuacionPromedio),
                trabajo: RelacionDeTrabajo.crear(propiedades.trabajo)
            }
        )
    }
}
