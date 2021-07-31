import { Certificacion, CertificacionPropiedades } from "@/core/dominio/Certificacion/Certificacion";
import {Mapper} from "./Mapper"
import { MappearCurso } from "./MapperCurso";

export class MappearCertificacion extends Mapper{

    public paraInfraestructura(certificacion: Certificacion): any{
        return {
            idCertificacion: certificacion.obtenerId(),
            nombre: certificacion.obtenerNombre(),
            curso: new MappearCurso().paraInfraestructura(certificacion.obtenerCurso()), 
            fechaCompletacionCertificacion: certificacion.obtenerFechaCertificacion()
        }
    }
}