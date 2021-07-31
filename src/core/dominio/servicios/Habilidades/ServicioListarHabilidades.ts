import { HabilidadParaDominio } from "../../Habilidad/DTOHabilidad";
import { Habilidad } from "../../Habilidad/Habilidad";

export class ServicioListarHabilidades{
    
    static pasarADominio(habilidadAtributos: HabilidadParaDominio): Habilidad{

        return Habilidad.crear(habilidadAtributos)
    }
}
