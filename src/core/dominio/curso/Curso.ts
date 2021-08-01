import { Entidad } from "../ClasesBase/Entidad"
import { IDCurso } from "./valueObjects/IDCurso"
import { CodigoCurso } from "./valueObjects/CodigoCurso"
import { EstadoCurso } from "./valueObjects/EstadoCurso"
import { TituloCurso } from "./valueObjects/TituloCurso"
import { Imagen } from "../valueObjectsComunes/Imagen"
import { Habilidad, HabilidadPropiedades } from "../habilidad/Habilidad"


export interface CursoPropiedades {
    idCurso: IDCurso,
    codigo: CodigoCurso,
    titulo: TituloCurso,
    imagenPortada: Imagen,
    habilidades: Habilidad[],
    estadoCurso: EstadoCurso
}

export class Curso extends Entidad<CursoPropiedades> {

    private constructor (propiedades: CursoPropiedades) {
        super(propiedades, propiedades.idCurso)
    }

    obtenerId(): string | number {
        return this.propiedades.idCurso.obtenerId()
    }

    obtenerCodigo(): string {
        return this.propiedades.codigo.obtenerCodigo()
    }

    obtenerTitulo(): string {
        return this.propiedades.titulo.obtenerTitulo()
    }

    obtenerImagenPortada(): string {
        return this.propiedades.imagenPortada.obtenerImagen()
    }

    obtenerHabilidades(): Habilidad[] {
        const habilidades: Habilidad[] = []

        this.propiedades.habilidades.forEach(habilidad => {
            habilidades.push(habilidad.obtenerHabilidad())
        });
        
        return habilidades
    }

    obtenerEstadoCurso(): number {
        return this.propiedades.estadoCurso.obtenerEstadoCurso()
    }

    obtenerCurso(): Curso {
        return this
    }

    public static crear(atributos: any): Curso {
        const habilidades: Habilidad[] = []

        atributos.habilidades.forEach(habilidad => {
            habilidades.push(Habilidad.crear(habilidad))
        });

        return new Curso(
            {
                idCurso: IDCurso.crear(atributos.idCurso),
                codigo: CodigoCurso.crear(atributos.codigo),
                titulo: TituloCurso.crear(atributos.titulo),
                imagenPortada: Imagen.crear(atributos.imagenPortada),
                estadoCurso: EstadoCurso.crear(atributos.estadoCurso),
                habilidades: habilidades
            }
        )
    }
}
