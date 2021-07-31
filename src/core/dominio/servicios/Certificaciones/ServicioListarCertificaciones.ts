import { Certificacion } from "../../Certificacion/Certificacion";
import { CertificacionParaDominio } from "../../Certificacion/DTOCertificacion";

export class ServicioListarCertificaciones{
    
    static pasarADominio(certificacionAtributos: CertificacionParaDominio): Certificacion{

        return Certificacion.crear(certificacionAtributos)
    }
}
