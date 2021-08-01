import { APIPuertoPostulaciones } from "@/core/aplicacion/api/postulaciones/APIPuertoPostulaciones";
import { obtenerPostulaciones } from "../../persistencia/postulaciones";

export class AdaptadorMockPostulaciones extends APIPuertoPostulaciones{

    public listarPostulaciones(): any{
       return obtenerPostulaciones()
    }
}
