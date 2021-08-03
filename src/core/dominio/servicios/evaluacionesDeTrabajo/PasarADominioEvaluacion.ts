import { EvaluacionDeTrabajoParaDominio } from "../../evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { EvaluacionDeTrabajoPropiedades } from "../../evaluacionDeTrabajo/EvaluacionDeTrabajo";
import { IDEvaluacionDeTrabajo } from "../../evaluacionDeTrabajo/valueObjects/IDEvaluacionDeTrabajo";
import { PreguntasEvaluacionDeTrabajo } from "../../evaluacionDeTrabajo/valueObjects/PreguntasEvaluacionDeTrabajo";
import { PuntuacionEvaluacionDeTrabajo } from "../../evaluacionDeTrabajo/valueObjects/PuntuacionesEvaluacionDeTrabajo";
import { PuntuacionPromedioEvaluacionDeTrabajo } from "../../evaluacionDeTrabajo/valueObjects/PuntuacionPromedioEvaluacionDeTrabajo";
import { RelacionDeTrabajo } from "../../relacionDeTrabajo/RelacionDeTrabajo";


export class PasarADominioEvaluacion {
    public aDominio (atributos: EvaluacionDeTrabajoParaDominio, relacionDeTrabajo: RelacionDeTrabajo): EvaluacionDeTrabajoPropiedades {

        return {
            idEvaluacion: IDEvaluacionDeTrabajo.crear(atributos.idEvaluacion),
            preguntas: PreguntasEvaluacionDeTrabajo.crear(
                atributos.preguntas.pregunta1,
                atributos.preguntas.pregunta2,
                atributos.preguntas.pregunta3,
                atributos.preguntas.pregunta4,
                atributos.preguntas.pregunta5
            ),
            puntuaciones: PuntuacionEvaluacionDeTrabajo.crear(
                atributos.puntuaciones.puntuacion1,
                atributos.puntuaciones.puntuacion2,
                atributos.puntuaciones.puntuacion3,
                atributos.puntuaciones.puntuacion4,
                atributos.puntuaciones.puntuacion5
            ),
            puntuacionPromedio: PuntuacionPromedioEvaluacionDeTrabajo.crear(1),
            trabajo: relacionDeTrabajo,
        }
    }
}