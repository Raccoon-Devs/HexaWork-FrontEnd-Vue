import { APIPuertoHabilidades } from "../../../aplicacion/api/habilidades/APIPuertoHabilidades";
import { obtenerHabilidades } from "./../../persistencia/habilidades";

export class AdaptadorMockHabilidades extends APIPuertoHabilidades{

    public listarHabilidades(): any{
       return obtenerHabilidades()
    }
}
