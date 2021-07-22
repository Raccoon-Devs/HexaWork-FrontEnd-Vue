import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionVacanteInvalida } from "../Excepciones/ExcepcionVacanteInvalida"

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

    public static crear(propiedades: VacantePropiedades): Vacante{

        if(propiedades.vacantes === 0 || propiedades.vacantes === null || propiedades.vacantes === undefined || propiedades.vacantes.toString() === ""){
            throw new ExcepcionVacanteInvalida<typeof propiedades.vacantes >(`La cantidad de vacantes: ${propiedades.vacantes} es inválida, no puede estar vacía`, propiedades.vacantes)
        }

        if(propiedades.vacantes < 0){
            throw new ExcepcionVacanteInvalida<typeof propiedades.vacantes >(`La cantidad de vacantes: ${propiedades.vacantes} es inválida, debe ser mayor a cero`, propiedades.vacantes)
        }

        return new Vacante(propiedades)
    }
}