import { APIPuerto } from "../api/APIPuerto";

export abstract class UIPuerto {
    abstract listarOfertasUI(apiPuerto: APIPuerto) : any;
    abstract listarOfertasActivasUI(apiPuerto: APIPuerto): any;
    abstract listarOfertasCulminadasUI(apiPuerto: APIPuerto): any;
}
