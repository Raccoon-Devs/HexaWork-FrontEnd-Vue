import {ValueObject} from "../../ClasesBase/ValueObject"

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

        if(vacante === 0 || vacante === null || vacante === undefined){
            console.log("vacante inválida")
        }

        if(vacante < 0){
            console.log("la cantidad de vacantes no puede ser negativa")
        }

        return new Vacante({vacante})
    }
}