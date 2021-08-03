import {ValueObject} from "../../clasesBase/ValueObject"
import { ExcepcionFechaPostulacionInvalido } from "../excepciones/ExcepcionFechaPostulacionInvalida"

interface FechaPostulacionPropiedades {
    fecha: Date
}
  
export class FechaPostulacion extends ValueObject<FechaPostulacionPropiedades> {

    private constructor (propiedades: FechaPostulacionPropiedades) {
        super(propiedades)
    }

    obtenerFechaPublicacion(): Date | string{
        return this.propiedades.fecha
    }

    public static crear(fecha: Date, limite: Date): FechaPostulacion{

        if(fecha > limite){
            throw new ExcepcionFechaPostulacionInvalido<typeof fecha >(`La fecha no puede ser menor que la fecha límite de postulación`, fecha)
        }

        return new FechaPostulacion({fecha})
    }
}