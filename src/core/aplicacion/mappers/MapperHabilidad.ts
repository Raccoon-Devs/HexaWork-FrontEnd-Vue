import { Habilidad } from "@/core/dominio/Habilidad/Habilidad";
import {Mapper} from "./Mapper"

export class MappearHabilidad extends Mapper{

    public paraInfraestructura(habilidad: Habilidad){
        return {
            idHabilidad: habilidad.obtenerId(),
            nombre: habilidad.obtenerNombre(),
            categoria: habilidad.obtenerCategoria()
        }
    }
}