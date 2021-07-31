import { APIPuertoRelacionDeTrabajo } from "../../../aplicacion/api/APIPuertoRelacionDeTrabajo";
import { obtenerRelacionesDeTrabajo } from "../.././persistencia/relacionesDeTrabajo";

export class AdaptadorSpringRelacionDeTrabajo extends APIPuertoRelacionDeTrabajo{

    public listarRelacionesDeTrabajo():any{
       return JSON.parse(obtenerRelacionesDeTrabajo()!)
    }
}