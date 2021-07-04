import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionRemuneracionInvalida } from "../Excepciones/ExcepcionRemuneracionInvalida"

export interface RemuneracionPropiedades {
    monto: number,
    frecuencia: string,
    divisa: string
}
  
export class Remuneracion extends ValueObject<RemuneracionPropiedades> {

    private constructor (propiedades: RemuneracionPropiedades) {
        super(propiedades)
    }

    obtenerMonto(): number{
        return this.propiedades.monto
    }

    obtenerFrecuencia(): string{
        return this.propiedades.frecuencia
    }

    obtenerDivisa(): string{
        return this.propiedades.divisa
    }

    obtenerRemuneracion(): RemuneracionPropiedades{
        return this.propiedades
    }

    public static crear(monto: number, frecuencia: string, divisa:string): Remuneracion{

        if(monto === 0 || monto === null || monto === undefined || monto.toString() === ""){
            throw new ExcepcionRemuneracionInvalida<typeof monto >(`El monto: ${monto} es inválido, no puede estar vacío`, monto)
        }

        if(monto <0){
            throw new ExcepcionRemuneracionInvalida<typeof monto >(`El monto: ${monto} es inválido, no puede ser negativo`, monto)
        }

        if(frecuencia.trim() === "" || frecuencia.trim() === null || frecuencia.trim() === undefined){
            throw new ExcepcionRemuneracionInvalida<typeof frecuencia >(`La frecuencia de pago: ${frecuencia} es inválida, no puede estar vacía`, frecuencia)
        }

        if(frecuencia.trim() !== "hora" && frecuencia.trim() !== "mes" && frecuencia.trim() !== "semana" && frecuencia.trim() !== "total"){
            throw new ExcepcionRemuneracionInvalida<typeof frecuencia >(`La frecuencia de pago: ${frecuencia} es inválida, debe ser por hora, mes o semana`, frecuencia)
        }

        if(divisa === "" || divisa === null || divisa === undefined){
            throw new ExcepcionRemuneracionInvalida<typeof divisa >(`La divisa del pago: ${divisa} es inválida, no puede estar vacía`, divisa)
        }

        if(divisa !== "euro" && divisa !== "dolar" && divisa !== "bolivar"){
            throw new ExcepcionRemuneracionInvalida<typeof divisa >(`La divisa del pago: ${divisa} es inválida, debe ser euro, dolar o bolivares`, divisa)
        }

        return new Remuneracion({monto, frecuencia, divisa})
    }
}