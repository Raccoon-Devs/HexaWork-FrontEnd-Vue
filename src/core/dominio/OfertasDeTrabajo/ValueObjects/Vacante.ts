import {ValueObject} from "../../clasesBase/ValueObject"
import { ExcepcionVacanteInvalida } from "../excepciones/ExcepcionVacanteInvalida"

export interface VacantePropiedades {
    vacantes: number
}
  
export class Vacante extends ValueObject<VacantePropiedades> {

    private constructor (propiedades: VacantePropiedades) {
        super(propiedades)
    }

    obtenerVacante(): number {
        return this.propiedades.vacantes
    }

    public static crear(vacantes: number): Vacante{

        if(vacantes === 0 || vacantes === null || vacantes === undefined || vacantes.toString() === ""){
            throw new ExcepcionVacanteInvalida<typeof vacantes >(`La cantidad de vacantes: ${vacantes} es inválida, no puede estar vacía`, vacantes)
        }

        if(vacantes < 0){
            throw new ExcepcionVacanteInvalida<typeof vacantes >(`La cantidad de vacantes: ${vacantes} es inválida, debe ser mayor a cero`, vacantes)
        }

        return new Vacante({vacantes})
    }
}