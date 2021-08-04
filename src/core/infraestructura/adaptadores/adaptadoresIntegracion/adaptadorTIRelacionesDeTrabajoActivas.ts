import { APIPuertoRelacionesDeTrabajo } from "../../../aplicacion/api/relacionesDeTrabajo/APIPuertoRelacionesDeTrabajo";
import { obtenerRelacionesDeTrabajoTI } from "../../persistencia/relacionesDeTrabajoTI";

export class AdaptadorTIRelacionesDeTrabajo extends APIPuertoRelacionesDeTrabajo{

    public listarRelacionesDeTrabajoMock(): any{
        
        return obtenerRelacionesDeTrabajoTI()
    }

    public listarRelacionesPorEvaluar(): any {

    }
}
