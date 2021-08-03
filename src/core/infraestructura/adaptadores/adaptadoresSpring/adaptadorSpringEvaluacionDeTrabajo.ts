import { EvaluacionDeTrabajoParaDominio } from "@/core/dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { APIPuertoEvaluacionDeTrabajo } from "../../../aplicacion/api/evaluacionesDeTrabajo/APIPuertoEvaluacionDeTrabajo";

export class AdaptadorSpringEvaluacion extends APIPuertoEvaluacionDeTrabajo{

    listarEvaluaciones() : any[]{
        //llamada a la api
        return []
    };
    realizarEvaluacionDeTrabajo(dato: EvaluacionDeTrabajoParaDominio) : any {
        //llamada a la api
    }
}