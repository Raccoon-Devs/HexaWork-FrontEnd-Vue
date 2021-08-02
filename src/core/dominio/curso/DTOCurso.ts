import { Habilidad, HabilidadPropiedades } from "../habilidad/Habilidad";
import { Imagen } from "../valueObjectsComunes/Imagen";
import { CursoPropiedades } from "./Curso";
import { CodigoCurso } from "./valueObjects/CodigoCurso";
import { EstadoCurso } from "./valueObjects/EstadoCurso";
import { TituloCurso } from "./valueObjects/TituloCurso";

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