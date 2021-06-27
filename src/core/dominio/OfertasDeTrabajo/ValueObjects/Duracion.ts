import {ValueObject} from "../../ClasesBase/ValueObject"

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
            console.log("horas inválidas")
        }

        if(totalHorasRequeridas <0){
            console.log("las horas no pueden ser negativas")
        }

        return new Duracion({totalHorasRequeridas})
    }
}