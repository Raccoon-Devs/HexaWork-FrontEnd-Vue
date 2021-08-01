import { Certificacion } from "../../certificacion/Certificacion";
import { CertificacionParaDominio } from "../../certificacion/DTOCertificacion";

export class ServicioListarCertificaciones{
    
    static pasarADominio(certificacionAtributos: CertificacionParaDominio): Certificacion{

        return Certificacion.crear(certificacionAtributos)
    }
}
