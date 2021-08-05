import { Curso } from "@/core/dominio/curso/Curso"
import {Mapper} from "./Mapper"
import { MappearHabilidad } from "./MapperHabilidad"

export class MappearCurso extends Mapper{

    public paraInfraestructura(curso: Curso): any{

        const habilidades: any[] = []

        curso.obtenerHabilidades().forEach(habilidad => {
            habilidades.push(new MappearHabilidad().paraInfraestructura(habilidad))
        });

        return {
            idCurso: curso.obtenerId(),
            codigo: curso.obtenerCodigo(),
            titulo: curso.obtenerTitulo(),
            imagenPortada: curso.obtenerImagenPortada(),
            habilidades: habilidades,
            estadoCurso: curso.obtenerEstadoCurso()
        }
    }
}