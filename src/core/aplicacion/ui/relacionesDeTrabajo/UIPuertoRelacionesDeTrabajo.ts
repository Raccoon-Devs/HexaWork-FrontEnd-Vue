import { APIPuertoRelacionesDeTrabajo } from "../../api/relacionesDeTrabajo/APIPuertoRelacionesDeTrabajo";

export abstract class UIPuertoRelacionesDeTrabajo {
    abstract listarRelacionesDeTrabajoUI(apiPuerto: APIPuertoRelacionesDeTrabajo) : any;
}
