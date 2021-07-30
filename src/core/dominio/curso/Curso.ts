import { Entidad } from "../ClasesBase/Entidad"
import { IDUnicoEntidad } from "../ClasesBase/IDUnicoEntidad"

import { IDCurso } from "./valueObjects/IDCurso"
import { CodigoCurso } from "./valueObjects/CodigoCurso"
import { EstadoCurso } from "./valueObjects/EstadoCurso"
import { TituloCurso } from "./valueObjects/TituloCurso"

import { Imagen } from "../valueObjectsComunes/Imagen"

import { Habilidad } from "../habilidad/Habilidad"


interface CursoPropiedades {
    idCurso: IDCurso,
    codigo: CodigoCurso,
    titulo: TituloCurso,
    imagenPortada: Imagen,
    estadoCurso: EstadoCurso,
    habilidades: Array<Habilidad>
}

export class Curso extends Entidad<CursoPropiedades> {

    private constructor (propiedades: CursoPropiedades) {
        super(propiedades)
    }

    obtenerId(): IDCurso {
        return this.propiedades.idCurso
    }

    obtenerCodgio(): CodigoCurso {
        return this.propiedades.codigo
    }

    obtenerTitulo(): TituloCurso {
        return this.propiedades.titulo
    }

    obtenerImagenPortada(): Imagen {
        return this.propiedades.imagenPortada
    }

    obtenerEstadoCurso(): EstadoCurso {
        return this.propiedades.estadoCurso
    }

    obtenerHabilidades(): Array<Habilidad> {
        return this.propiedades.habilidades
    }

    public static crear(
        atributos: any
    ): Curso {
        return new Curso(
            {
                idCurso: IDCurso.crear(atributos.idCurso),
                codigo: CodigoCurso.crear(atributos.codigoCurso),
                titulo: TituloCurso.crear(atributos.titulo),
                imagenPortada: Imagen.crear(atributos.urlImagen),
                estadoCurso: EstadoCurso.crear(atributos.estadoCurso),
                habilidades: []
            }
        )
    }
}
