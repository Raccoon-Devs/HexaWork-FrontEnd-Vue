import {ValueObject} from "../../clasesBase/ValueObject"
import { ExcepcionRemuneracionInvalida } from "../excepciones/ExcepcionRemuneracionInvalida"

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


    public static crear(remuneracion: number): Remuneracion{

        if(remuneracion === 0 || remuneracion === null || remuneracion === undefined || remuneracion.toString() === ""){
            throw new ExcepcionRemuneracionInvalida<typeof remuneracion >(`El monto: ${remuneracion} es inválido, no puede estar vacío`, remuneracion)
        }

        if(remuneracion <0){
            throw new ExcepcionRemuneracionInvalida<typeof remuneracion >(`El monto: ${remuneracion} es inválido, no puede ser negativo`, remuneracion)
        }

        return new Remuneracion({remuneracion})
    }
}