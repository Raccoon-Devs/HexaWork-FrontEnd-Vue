import { Entidad } from "../ClasesBase/Entidad"
import { IDCurso } from "./ValueObjects/IDCurso"
import { CodigoCurso } from "./ValueObjects/CodigoCurso"
import { EstadoCurso } from "./ValueObjects/EstadoCurso"
import { TituloCurso } from "./ValueObjects/TituloCurso"
import { Imagen } from "../valueObjectsComunes/Imagen"
import { Habilidad } from "../Habilidad/Habilidad"


interface CursoPropiedades {
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

    public static crear(propiedades: any): Curso {
        const habilidades: Habilidad[] = []

        propiedades.habilidades.forEach(habilidad => {
            habilidades.push(Habilidad.crear(habilidad))
        });

        return new Curso(
            {
                idCurso: IDCurso.crear(propiedades.idCurso),
                codigo: CodigoCurso.crear(propiedades.codigoCurso),
                titulo: TituloCurso.crear(propiedades.titulo),
                imagenPortada: Imagen.crear(propiedades.urlImagen),
                estadoCurso: EstadoCurso.crear(propiedades.estadoCurso),
                habilidades: habilidades
            }
        )
    }
}
