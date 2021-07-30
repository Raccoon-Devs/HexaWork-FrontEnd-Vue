import { CertificacionPropiedades } from "../Certificacion/Certificacion";
import { Curso, CursoPropiedades } from "../Curso/Curso";
import { FechaCompletacionCertificacion } from "./ValueObjects/FechaCompletacionCertificacion";
import { NombreCertificacion } from "./ValueObjects/NombreCertificacion";

type CertificacionParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends NombreCertificacion? string
    : Type[Property] extends Curso? CursoPropiedades
    : Type[Property] extends FechaCompletacionCertificacion? Date
    : string;
}

export type CertificacionParaDominio = CertificacionParaDominioMap<CertificacionPropiedades>