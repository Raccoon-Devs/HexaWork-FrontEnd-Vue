import { APIPuerto } from "../api/APIPuerto";

export abstract class UIPuerto{
    abstract listarOfertasUI(apiPuerto: APIPuerto) : any;
}