import { ExperienciaDeTrabajo } from "@/core/dominio/experienciaDeTrabajo/ExperienciaDeTrabajo";
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