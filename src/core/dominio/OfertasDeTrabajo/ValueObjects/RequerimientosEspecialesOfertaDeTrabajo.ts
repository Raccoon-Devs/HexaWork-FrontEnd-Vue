import {ValueObject} from "../../clasesBase/ValueObject"
import { ExcepcionRequerimientosInvalidos } from "../excepciones/ExcepcionRequerimientosInvalidos"

export interface RequerimientosEspecialesPropiedades {
    requerimientos: string;
}
  
export class RequerimientosEspecialesOfertaDeTrabajo extends ValueObject<RequerimientosEspecialesPropiedades> {

    private constructor (propiedades: RequerimientosEspecialesPropiedades) {
        super(propiedades)
    }

    obtenerRequerimientos(): string {
        return this.propiedades.requerimientos
    }

    public static crear(requerimientos: string): RequerimientosEspecialesOfertaDeTrabajo{

        if(requerimientos.trim() === "" || requerimientos === null || requerimientos === undefined){
            throw new ExcepcionRequerimientosInvalidos<typeof requerimientos >("Los requerimientos especiales no pueden estar vacíos", requerimientos)
        }

        return new RequerimientosEspecialesOfertaDeTrabajo({requerimientos})
    }
}