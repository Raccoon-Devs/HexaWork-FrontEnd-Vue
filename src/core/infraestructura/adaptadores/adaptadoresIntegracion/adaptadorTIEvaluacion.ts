import { EvaluacionDeTrabajoParaDominio } from "@/core/dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { APIPuertoEvaluacionDeTrabajo } from "../../../aplicacion/api/evaluacionesDeTrabajo/APIPuertoEvaluacionDeTrabajo";
import { realizarEvaluacion } from "./../../persistencia/evaluacionesTI";

export class AdaptadorTIEvaluacion extends APIPuertoEvaluacionDeTrabajo{

    listarEvaluaciones() : any[]{
        //llamada a la api
        return []
    };
    realizarEvaluacionDeTrabajo(dato: EvaluacionDeTrabajoParaDominio) : any {
        
    }
}