import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionRemuneracionInvalida } from "../Excepciones/ExcepcionRemuneracionInvalida"

interface RemuneracionPropiedades {
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

    public static crear(monto: number, frecuencia: string, divisa:string): Remuneracion{

        if(monto === 0 || monto === null || monto === undefined){
            throw new ExcepcionRemuneracionInvalida<typeof monto >(`El monto: ${monto} es inválido, no puede estar vacío`, monto)
        }

        if(monto <0){
            throw new ExcepcionRemuneracionInvalida<typeof monto >(`El monto: ${monto} es inválido, no puede ser negativo`, monto)
        }

        if(frecuencia === "" || frecuencia === null || frecuencia === undefined){
            throw new ExcepcionRemuneracionInvalida<typeof frecuencia >(`La frecuencia de pago: ${frecuencia} es inválida, no puede estar vacía`, frecuencia)
        }

        if(frecuencia !== "hora" && frecuencia !== "mes" && frecuencia !== "semana" && frecuencia !== "total"){
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