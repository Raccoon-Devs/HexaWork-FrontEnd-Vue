import { Postulacion } from "@/core/dominio/postulacion/Postulacion";
import {Mapper} from "./Mapper"
import { MappearEmpleado } from "./MapperEmpleado";
import { MappearOfertaDeTrabajo } from "./MapperOfertaDeTrabajo";

export class MappearPostulacion extends Mapper{

    public paraInfraestructura(postulacion: Postulacion){

        return {
            idPostulacion: postulacion.obtenerId(),
            fechaPostulacion: postulacion.obtenerFechaPostulacion(),
            empleado: new MappearEmpleado().paraInfraestructura(postulacion.obtenerEmpleado()),
            ofertaDeTrabajo: new MappearOfertaDeTrabajo().paraInfraestructura(postulacion.obtenerOfertaDeTrabajo()),
            estadoPostulacion: postulacion.obtenerEstadoPostulacion()
        } 
    }
}