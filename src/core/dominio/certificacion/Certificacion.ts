import { Entidad } from "../ClasesBase/Entidad";
import { Curso } from "../Curso/Curso";
import { FechaCompletacionCertificacion } from "./ValueObjects/FechaCompletacionCertificacion";
import { IDCertificacion } from "./ValueObjects/IDCertificacion";
import { NombreCertificacion } from "./ValueObjects/NombreCertificacion";

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

    public static crear(propiedades: any): Certificacion {
        return new Certificacion(
            {
                idCertificacion: IDCertificacion.crear(propiedades.idCertificacion),
                nombre: NombreCertificacion.crear(propiedades.nombre),
                curso: Curso.crear(propiedades.curso),
                fechaCompletacionCertificacion: FechaCompletacionCertificacion.crear(propiedades.fechaCompletacionCertificacion)
            }
        )
    }
}