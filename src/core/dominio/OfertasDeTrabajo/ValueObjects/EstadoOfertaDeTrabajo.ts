import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionEstadoInvalido } from "../Excepciones/ExcepcionEstadoInvalido"

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

    public static crear(propiedades: EstadoOfertaDeTrabajoPropiedades): EstadoOfertaDeTrabajo{

        if(propiedades.estado === null || propiedades.estado === undefined){
            throw new ExcepcionEstadoInvalido<typeof propiedades.estado >(`El estado: ${propiedades.estado} no puede estar vacio`, propiedades.estado)
        }

        if(!(propiedades.estado in [0, 1, 2, 3, 4])){
            throw new ExcepcionEstadoInvalido<typeof propiedades.estado >(`El estado: ${propiedades.estado} de la oferta debe ser: 0 (creado), 1 (publicado), 2 (postulaciones cerradas), 3 (empleado asignado), 4 (en progreso), 5 (finalizada), 6 (cancelada)`, propiedades.estado)
        }

        return new EstadoOfertaDeTrabajo(propiedades)
    }
}