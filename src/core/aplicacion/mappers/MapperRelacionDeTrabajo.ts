import { RelacionDeTrabajo } from "@/core/dominio/RelacionDeTrabajo/RelacionDeTrabajo";
import { Mapper } from "./Mapper"
import { MappearPostulacion } from "./MapperPostulacion";

export class MappearRelacionDeTrabajo extends Mapper{

    public paraInfraestructura(trabajo: RelacionDeTrabajo){
        return {
            idRelacion: trabajo.obtenerId(),
            postulacion: new MappearPostulacion().paraInfraestructura(trabajo.obtenerPostulacion()),
            calendario: trabajo.obtenerCalendario(),
            estadoRelacionDeTrabajo: trabajo.obtenerEstadoRelacionDeTrabajo()
        }
    }
}
