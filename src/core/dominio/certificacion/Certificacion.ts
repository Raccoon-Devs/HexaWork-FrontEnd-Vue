import { Entidad } from "../clasesBase/Entidad";
import { Curso, CursoPropiedades } from "../curso/Curso";
import { FechaCompletacionCertificacion } from "./valueObjects/FechaCompletacionCertificacion";
import { IDCertificacion } from "./valueObjects/IDCertificacion";
import { NombreCertificacion } from "./valueObjects/NombreCertificacion";

export interface CertificacionPropiedades{
    idCertificacion: IDCertificacion,
    nombre: NombreCertificacion,
    curso: Curso,
    fechaCompletacionCertificacion: FechaCompletacionCertificacion
}

export class Certificacion extends Entidad<CertificacionPropiedades>{

    private constructor (propiedades: CertificacionPropiedades) {
       super(propiedades, propiedades.idCertificacion)
    }

    obtenerId(): string | number {
        return this.propiedades.idCertificacion.obtenerId()
    }

    obtenerNombre(): string{
        return this.propiedades.nombre.obtenerNombre()
    }

    obtenerCurso(): Curso{
        return this.propiedades.curso.obtenerCurso()
    }

    obtenerFechaCertificacion(): Date{
        return this.propiedades.fechaCompletacionCertificacion.obtenerFechaCompletacion()
    }

    obtenerCertificacion(): Certificacion{
        return this
    }

    public static crear(atributos: any): Certificacion {
        return new Certificacion(
            {
                idCertificacion: IDCertificacion.crear(atributos.idCertificacion),
                nombre: NombreCertificacion.crear(atributos.nombre),
                curso: Curso.crear(atributos.curso),
                fechaCompletacionCertificacion: FechaCompletacionCertificacion.crear(atributos.fechaCompletacionCertificacion)
            }
        )
    }
}
