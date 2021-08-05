import { ValueObject } from "../../clasesBase/ValueObject"
import { ExcepcionEstadoCursoInvalido } from '../excepciones/ExcepcionEstadoCursoInvalido'

interface EstadoCursoPropiedades {
    estadoCurso: number
}

export class EstadoCurso extends ValueObject<EstadoCursoPropiedades> {

    private constructor (propiedades: EstadoCursoPropiedades) {
        super(propiedades)
    }

    obtenerEstadoCurso(): number {
        return this.propiedades.estadoCurso
    }

    public static crear(estadoCurso: number): EstadoCurso {
        
        if(estadoCurso === null || estadoCurso === undefined){
            throw new ExcepcionEstadoCursoInvalido<typeof estadoCurso >(`El estado: ${estadoCurso} no puede estar vacio`, estadoCurso)
        }

        if(!(estadoCurso in [0, 1])){
            throw new ExcepcionEstadoCursoInvalido<typeof estadoCurso >(`El estado: ${estadoCurso} de la oferta debe ser: 0 (Inactivo), 1 (Activo)`, estadoCurso)
        }

        return new EstadoCurso({estadoCurso})
    }
}
