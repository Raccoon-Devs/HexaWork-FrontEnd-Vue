import { Habilidad } from "@/core/dominio/habilidad/Habilidad";
import { APIPuertoRelacionesDeTrabajo } from "../../../aplicacion/api/relacionesDeTrabajo/APIPuertoRelacionesDeTrabajo";
import { OfertaParaDominio } from "../../../dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { obtenerRelacionesDeTrabajoMock } from "./../../persistencia/relacionesDeTrabajoMock";

export class AdaptadorMockRelacionDeTrabajo extends APIPuertoRelacionesDeTrabajo {

    // public listarRelacionesDeTrabajo(): any {
    //     return obtenerRelacionesDeTrabajo()
    // }

    public listarRelacionesDeTrabajoMock(): any {
        return obtenerRelacionesDeTrabajoMock()
    }
}
