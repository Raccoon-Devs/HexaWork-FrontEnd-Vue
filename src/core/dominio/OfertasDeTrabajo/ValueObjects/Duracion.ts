import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionDuracionInvalida } from "../Excepciones/ExcepcionDuracionInvalida"

interface DuracionPropiedades {
    totalHorasRequeridas: number
}
  
export class Duracion extends ValueObject<DuracionPropiedades> {

    private constructor (propiedades: DuracionPropiedades) {
        super(propiedades)
    }

    obtenerDuracion(): number{
        return this.propiedades.totalHorasRequeridas
    }

    public static crear(totalHorasRequeridas: number): Duracion{

        if(totalHorasRequeridas === 0 || totalHorasRequeridas === null || totalHorasRequeridas === undefined){
            throw new ExcepcionDuracionInvalida<typeof totalHorasRequeridas >(`Las horas totales son inválidas, no pueden estar vacías`, totalHorasRequeridas)
        }

        if(totalHorasRequeridas <0){
            throw new ExcepcionDuracionInvalida<typeof totalHorasRequeridas >(`Las horas totales: ${totalHorasRequeridas} no pueden ser menores a 0`, totalHorasRequeridas)
        }

        return new Duracion({totalHorasRequeridas})
    }
}