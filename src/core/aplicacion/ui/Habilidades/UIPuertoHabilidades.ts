import { APIPuertoHabilidades } from "../../api/Habilidades/APIPuertoHabilidades";

export abstract class UIPuertoHabilidades{
    abstract listarHabilidadesUI(apiPuerto: APIPuertoHabilidades) : any;
}