import { APIPuertoHabilidades } from "../../api/habilidades/APIPuertoHabilidades";

export abstract class UIPuertoHabilidades{
    abstract listarHabilidadesUI(apiPuerto: APIPuertoHabilidades) : any;
}