import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionVacanteInvalida } from "../Excepciones/ExcepcionVacanteInvalida"

export interface VacantePropiedades {
    vacante: number
}
  
export class Vacante extends ValueObject<VacantePropiedades> {

    private constructor (propiedades: VacantePropiedades) {
        super(propiedades)
    }

    obtenerVacante(): number {
        return this.propiedades.vacante
    }

    public static crear(propiedades: VacantePropiedades): Vacante{

        if(propiedades.vacante === 0 || propiedades.vacante === null || propiedades.vacante === undefined || propiedades.vacante.toString() === ""){
            throw new ExcepcionVacanteInvalida<typeof propiedades.vacante >(`La cantidad de vacantes: ${propiedades.vacante} es inválida, no puede estar vacía`, propiedades.vacante)
        }

        if(propiedades.vacante < 0){
            throw new ExcepcionVacanteInvalida<typeof propiedades.vacante >(`La cantidad de vacantes: ${propiedades.vacante} es inválida, debe ser mayor a cero`, propiedades.vacante)
        }

        return new Vacante(propiedades)
    }
}