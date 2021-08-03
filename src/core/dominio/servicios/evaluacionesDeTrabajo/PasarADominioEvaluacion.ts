import { EvaluacionDeTrabajoParaDominio } from "../../evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { EvaluacionDeTrabajoPropiedades } from "../../evaluacionDeTrabajo/EvaluacionDeTrabajo";
import { IDEvaluacionDeTrabajo } from "../../evaluacionDeTrabajo/valueObjects/IDEvaluacionDeTrabajo";
import { PreguntasEvaluacionDeTrabajo } from "../../evaluacionDeTrabajo/valueObjects/PreguntasEvaluacionDeTrabajo";
import { PuntuacionEvaluacionDeTrabajo } from "../../evaluacionDeTrabajo/valueObjects/PuntuacionesEvaluacionDeTrabajo";
import { PuntuacionPromedioEvaluacionDeTrabajo } from "../../evaluacionDeTrabajo/valueObjects/PuntuacionPromedioEvaluacionDeTrabajo";
import { RelacionDeTrabajo } from "../../RelacionDeTrabajo/RelacionDeTrabajo";
import { EstadoRelacionDeTrabajo } from "../../relacionDeTrabajo/valueObjects/EstadoRelacionDeTrabajo";
import { IDRelacionDeTrabajo } from "../../relacionDeTrabajo/valueObjects/IDRelacionDeTrabajo";

export class PasarADominioEvaluacion {
    public aDominio (atributos: EvaluacionDeTrabajoParaDominio): EvaluacionDeTrabajoPropiedades {
        
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
                4,
                2,
                2,
                2,
                2
            ),
            puntuacionPromedio: PuntuacionPromedioEvaluacionDeTrabajo.crear(1),
            trabajo: RelacionDeTrabajo.crear(
                {
                    idRelacion: atributos.trabajo.idRelacion,
                    postulacion: atributos.trabajo.postulacion,
                    calendario: atributos.trabajo.calendario,
                    estadoRelacionDeTrabajo: atributos.trabajo.estadoRelacionDeTrabajo
                }
            ),
        }
    }
}