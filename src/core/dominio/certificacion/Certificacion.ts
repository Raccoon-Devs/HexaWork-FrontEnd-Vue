import { Entidad } from "../ClasesBase/Entidad";
import { Curso } from "../curso/Curso";

export interface CertificacionPropiedades{
    // idCertificacion: IdCertificacion,
    // nombre: NombreCertificacion,
    curso: Curso,
    //fechaCompletacionCertificacion: FechaCompletacionCertificacion
}

export class Certificacion extends Entidad<CertificacionPropiedades>{

    private constructor (propiedades: CertificacionPropiedades) {
       // super(propiedades, propiedades.idCertificacion)
       super(propiedades)
    }

    public static crear(propiedades: CertificacionPropiedades): Certificacion {
        return new Certificacion(
            {
                //idCertificacion: propiedades.idCertificacion,
                //nombre: propiedades.nombre,
                curso: propiedades.curso,
                //fechaCompletacionCertificacion: propiedades.fechaCompletacionCertificacion
            }
        )
    }
}