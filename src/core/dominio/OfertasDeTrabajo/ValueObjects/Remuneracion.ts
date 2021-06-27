import {ValueObject} from "../../ClasesBase/ValueObject"

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
            console.log("monto inválido")
        }

        if(monto <0){
            console.log("el monto no puede ser negativo")
        }

        if(frecuencia === "" || frecuencia === null || frecuencia === undefined){
            console.log("frecuencia de pago inválida")
        }

        if(frecuencia !== "hora" && frecuencia !== "mes" && frecuencia !== "semana" && frecuencia !== "total"){
            console.log("la frecuencia debe ser por hora, mes o semana")
        }

        if(divisa === "" || divisa === null || divisa === undefined){
            console.log("divisa de pago inválida")
        }

        if(divisa !== "euro" && divisa !== "dolar" && divisa !== "bolivar"){
            console.log("la divisa debe ser euro, dolar o bolivares")
        }

        return new Remuneracion({monto, frecuencia, divisa})
    }
}