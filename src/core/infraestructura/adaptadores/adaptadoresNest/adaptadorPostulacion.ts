import { APIPuertoPostulacion } from "../../../aplicacion/api/APIPuertoPostulacion";
import { obtenerPostulaciones } from "../.././persistencia/postulaciones";

export class AdaptadorNestPostulacion extends APIPuertoPostulacion{

    public listarPostulacionesOferta(idOferta: string):any{
       return JSON.parse(obtenerPostulaciones()!)
    }
}