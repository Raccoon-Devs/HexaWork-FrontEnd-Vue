import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionVacanteInvalida } from "../Excepciones/ExcepcionVacanteInvalida"

interface VacantePropiedades {
    vacante: number
}
  
export class Vacante extends ValueObject<VacantePropiedades> {

    private constructor (propiedades: VacantePropiedades) {
        super(propiedades)
    }

    obtenerVacante(): number {
        return this.propiedades.vacante
    }

    public static crear(vacante: number): Vacante{

        if(vacante === 0 || vacante === null || vacante === undefined || vacante.toString() === ""){
            throw new ExcepcionVacanteInvalida<typeof vacante >(`La cantidad de vacantes: ${vacante} es inválida, no puede estar vacía`, vacante)
        }

        if(vacante < 0){
            throw new ExcepcionVacanteInvalida<typeof vacante >(`La cantidad de vacantes: ${vacante} es inválida, debe ser mayor a cero`, vacante)
        }

        return new Vacante({vacante})
    }
}