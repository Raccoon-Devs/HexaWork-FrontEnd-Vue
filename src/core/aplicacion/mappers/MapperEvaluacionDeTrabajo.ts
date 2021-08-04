import { EvaluacionDeTrabajo } from "../../../core/dominio/evaluacionDeTrabajo/EvaluacionDeTrabajo";
import { RelacionDeTrabajo } from "../../../core/dominio/relacionDeTrabajo/RelacionDeTrabajo";
import {Mapper} from "./Mapper"
import { MappearRelacionDeTrabajo } from "./MapperRelacionDeTrabajo";

export class MappearEvaluacionDeTrabajo extends Mapper{

    public paraInfraestructura(evaluacion: EvaluacionDeTrabajo){
               
        return {
            idEvaluacion: evaluacion.obtenerId(),
            preguntas: evaluacion.obtenerPreguntasEvaluacion(),
            puntuaciones: evaluacion.obtenerPuntuacionEvaluacion(),
            puntuacionPromedio: evaluacion.obtenerPuntuacionPromedio(),
            trabajo: new MappearRelacionDeTrabajo().paraInfraestructura(evaluacion.obtenerRelacionDeTrabajo()),
        }
    }
}