import { ExperienciaDeTrabajo } from "@/core/dominio/ExperienciaDeTrabajo/ExperienciaDeTrabajo";
import {Mapper} from "./Mapper"

export class MappearExperienciaDeTrabajo extends Mapper{

    public paraInfraestructura(experiencia: ExperienciaDeTrabajo){
        return {
            idExperiencia: experiencia.obtenerId(),
            tituloTrabajo: experiencia.obtenerTituloTrabajo(),
            nombreCompania: experiencia.obtenerNombreCompania(),
            categoria: experiencia.obtenerCategoria()
        }
    }
}