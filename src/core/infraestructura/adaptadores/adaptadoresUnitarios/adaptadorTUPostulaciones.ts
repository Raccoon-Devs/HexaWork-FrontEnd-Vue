import { APIPuertoPostulaciones } from "../../../aplicacion/api/postulaciones/APIPuertoPostulaciones";
import { obtenerPostulacionesTU } from "../../persistencia/postulacionesTU";

export class AdaptadorTUPostulaciones extends APIPuertoPostulaciones{

    public listarPostulaciones(): any{
       return obtenerPostulacionesTU()
    }
}
