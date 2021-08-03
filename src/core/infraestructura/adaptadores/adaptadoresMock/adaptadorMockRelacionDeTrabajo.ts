import { APIPuertoRelacionesDeTrabajo } from "../../../aplicacion/api/relacionesDeTrabajo/APIPuertoRelacionesDeTrabajo";
import { obtenerRelacionesPorEvaluar } from "../../persistencia/relacionDeTrabajoPorEvaluar";
import { obtenerRelacionesDeTrabajoMock } from "./../../persistencia/relacionesDeTrabajoMock";

export class AdaptadorMockRelacionDeTrabajo extends APIPuertoRelacionesDeTrabajo {
    public listarRelacionesDeTrabajoMock(): any {
        return obtenerRelacionesDeTrabajoMock()
    }

    public listarRelacionesPorEvaluar(): any {
        return obtenerRelacionesPorEvaluar()
    }
}