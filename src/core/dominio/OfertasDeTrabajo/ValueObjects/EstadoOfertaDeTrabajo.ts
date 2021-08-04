import {ValueObject} from "../../clasesBase/ValueObject"
import { ExcepcionEstadoInvalido } from "../excepciones/ExcepcionEstadoInvalido"

export interface EstadoOfertaDeTrabajoPropiedades {
    estado: number,
}

export class EstadoOfertaDeTrabajo extends ValueObject<EstadoOfertaDeTrabajoPropiedades> {

    private constructor (propiedades: EstadoOfertaDeTrabajoPropiedades) {
        super(propiedades)
    }

    obtenerEstado(): number{
        return this.propiedades.estado
    }

    public static crear(estado: number): EstadoOfertaDeTrabajo{

        if(estado === null || estado === undefined){
            throw new ExcepcionEstadoInvalido<typeof estado >(`El estado: ${estado} no puede estar vacio`, estado)
        }

        if(!(estado in [0, 1, 2, 3, 4, 5])){
            throw new ExcepcionEstadoInvalido<typeof estado >(`El estado: ${estado} de la oferta debe ser: 0 (creado), 1 (publicado), 2 (postulaciones cerradas), 3 (empleado asignado), 4 (en progreso), 5 (finalizada), 6 (cancelada)`, estado)
        }

        return new EstadoOfertaDeTrabajo({estado})
    }
}
