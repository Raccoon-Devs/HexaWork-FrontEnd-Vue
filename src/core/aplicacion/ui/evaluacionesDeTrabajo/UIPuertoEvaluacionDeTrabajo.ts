import { EvaluacionDeTrabajoParaDominio } from "@/core/dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { APIPuertoEvaluacionDeTrabajo } from "../../api/evaluacionesDeTrabajo/APIPuertoEvaluacionDeTrabajo";

export abstract class UIPuertoEvaluacionDeTrabajo{

    abstract realizarEvaluacionUI(evaluacion: any, apiPuerto: APIPuertoEvaluacionDeTrabajo) : any;
}