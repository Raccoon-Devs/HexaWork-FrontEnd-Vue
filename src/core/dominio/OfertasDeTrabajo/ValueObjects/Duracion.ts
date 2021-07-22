import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionDuracionInvalida } from "../Excepciones/ExcepcionDuracionInvalida"

export interface DuracionPropiedades {
    totalHorasRequeridas: number
}
  
export class Duracion extends ValueObject<DuracionPropiedades> {

    private constructor (propiedades: DuracionPropiedades) {
        super(propiedades)
    }

    obtenerDuracion(): number{
        return this.propiedades.totalHorasRequeridas
    }

    public static crear(propiedades: DuracionPropiedades): Duracion{

        if(propiedades.totalHorasRequeridas === 0 || propiedades.totalHorasRequeridas === null || propiedades.totalHorasRequeridas === undefined || propiedades.totalHorasRequeridas.toString() === ""){
            throw new ExcepcionDuracionInvalida<typeof propiedades.totalHorasRequeridas >(`Las horas totales son inválidas, no pueden estar vacías`, propiedades.totalHorasRequeridas)
        }

        if(propiedades.totalHorasRequeridas <0){
            throw new ExcepcionDuracionInvalida<typeof propiedades.totalHorasRequeridas >(`Las horas totales: ${propiedades.totalHorasRequeridas} no pueden ser menores a 0`, propiedades.totalHorasRequeridas)
        }

        return new Duracion(propiedades)
    }
}