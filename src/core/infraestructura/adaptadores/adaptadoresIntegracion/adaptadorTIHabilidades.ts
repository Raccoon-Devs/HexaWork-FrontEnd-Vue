import { APIPuertoHabilidades } from "../../../aplicacion/api/habilidades/APIPuertoHabilidades";
import { obtenerHabilidades } from "../../persistencia/habilidades";


export class AdaptadorTUHabilidades extends APIPuertoHabilidades{

    public listarHabilidades():any{
        return obtenerHabilidades()
    }
}
