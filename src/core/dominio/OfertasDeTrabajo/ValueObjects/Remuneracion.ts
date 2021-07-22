import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionRemuneracionInvalida } from "../Excepciones/ExcepcionRemuneracionInvalida"

export interface RemuneracionPropiedades {
    remuneracion: number
}
  
export class Remuneracion extends ValueObject<RemuneracionPropiedades> {

    private constructor (propiedades: RemuneracionPropiedades) {
        super(propiedades)
    }

    obtenerRemuneracion(): number{
        return this.propiedades.remuneracion
    }


    public static crear(propiedades: RemuneracionPropiedades): Remuneracion{

        if(propiedades.remuneracion === 0 || propiedades.remuneracion === null || propiedades.remuneracion === undefined || propiedades.remuneracion.toString() === ""){
            throw new ExcepcionRemuneracionInvalida<typeof propiedades.remuneracion >(`El monto: ${propiedades.remuneracion} es inválido, no puede estar vacío`, propiedades.remuneracion)
        }

        if(propiedades.remuneracion <0){
            throw new ExcepcionRemuneracionInvalida<typeof propiedades.remuneracion >(`El monto: ${propiedades.remuneracion} es inválido, no puede ser negativo`, propiedades.remuneracion)
        }

        return new Remuneracion(propiedades)
    }
}