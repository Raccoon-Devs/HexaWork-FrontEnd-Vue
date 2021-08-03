import { APIPuertoRelacionesDeTrabajo } from "../../api/relacionesDeTrabajo/APIPuertoRelacionesDeTrabajo";

export abstract class UIPuertoRelacionesPorEvaluar{
    abstract listarRelacionesPorEvaluarUI(apiPuerto: APIPuertoRelacionesDeTrabajo) : any;
}