import { EvaluacionDeTrabajoParaDominio } from "@/core/dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { APIPuertoEvaluacionDeTrabajo } from "../../../aplicacion/api/evaluacionesDeTrabajo/APIPuertoEvaluacionDeTrabajo";

export class AdaptadorTUEvaluacion extends APIPuertoEvaluacionDeTrabajo{

    listarEvaluaciones() : any[]{
        //llamada a la api
        return []
    };
    realizarEvaluacionDeTrabajo(dato: EvaluacionDeTrabajoParaDominio) : any {
       return "Evaluación realizada con éxito"
    }
}