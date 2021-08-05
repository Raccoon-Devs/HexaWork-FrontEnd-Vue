import { EvaluacionDeTrabajoParaDominio } from "@/core/dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";

export abstract class APIPuertoEvaluacionDeTrabajo{
    abstract listarEvaluaciones() : any[];
    abstract realizarEvaluacionDeTrabajo(dato: EvaluacionDeTrabajoParaDominio) : any
}