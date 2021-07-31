import { HabilidadParaDominio } from "../../habilidad/DTOHabilidad";
import { Habilidad } from "../../habilidad/Habilidad";

export class ServicioListarHabilidades{
    
    static pasarADominio(habilidadAtributos: HabilidadParaDominio): Habilidad{

        return Habilidad.crear(habilidadAtributos)
    }
}
