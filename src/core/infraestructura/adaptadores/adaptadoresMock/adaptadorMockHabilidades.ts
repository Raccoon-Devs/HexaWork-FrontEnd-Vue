import { APIPuertoHabilidades } from "../../../aplicacion/api/Habilidades/APIPuertoHabilidades";
import { obtenerHabilidades } from "./../../persistencia/habilidades";

export class AdaptadorMockHabilidades extends APIPuertoHabilidades{

    public listarHabilidades(): any{
       return obtenerHabilidades()
    }
}
