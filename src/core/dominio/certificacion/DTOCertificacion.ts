import { CertificacionPropiedades } from "./Certificacion";
import { Curso, CursoPropiedades } from "../curso/Curso";
import { FechaCompletacionCertificacion } from "./valueObjects/FechaCompletacionCertificacion";
import { NombreCertificacion } from "./valueObjects/NombreCertificacion";

type CertificacionParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends NombreCertificacion? string
    : Type[Property] extends Curso? CursoPropiedades
    : Type[Property] extends FechaCompletacionCertificacion? Date
    : string;
}

export type CertificacionParaDominio = CertificacionParaDominioMap<CertificacionPropiedades>