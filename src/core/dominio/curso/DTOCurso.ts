import { Habilidad, HabilidadPropiedades } from "../Habilidad/Habilidad";
import { Imagen } from "../valueObjectsComunes/Imagen";
import { CursoPropiedades } from "./Curso";
import { CodigoCurso } from "./ValueObjects/CodigoCurso";
import { EstadoCurso } from "./ValueObjects/EstadoCurso";
import { TituloCurso } from "./ValueObjects/TituloCurso";

type CursoParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends CodigoCurso? string
    : Type[Property] extends TituloCurso? string
    : Type[Property] extends Imagen? string
    : Type[Property] extends Habilidad[]? HabilidadPropiedades[]
    : Type[Property] extends EstadoCurso? number
    : string;
}

export type CursoParaDominio = CursoParaDominioMap<CursoPropiedades>