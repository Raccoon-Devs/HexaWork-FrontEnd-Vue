import { Entidad } from "../ClasesBase/Entidad";
import { Curso, CursoPropiedades } from "../Curso/Curso";
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