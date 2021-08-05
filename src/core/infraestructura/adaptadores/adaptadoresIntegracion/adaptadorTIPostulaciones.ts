import { APIPuertoPostulaciones } from "../../../aplicacion/api/postulaciones/APIPuertoPostulaciones";
import { obtenerPostulacionesTI } from "../../persistencia/postulacionesTI";

export class AdaptadorTIPostulaciones extends APIPuertoPostulaciones{

    public listarPostulaciones():any{
       return obtenerPostulacionesTI()
    }
}
