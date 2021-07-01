import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionCargoInvalido } from "../Excepciones/ExcepcionCargoInvalido"

interface CargoPropiedades {
    cargo: string
}
  
export class Cargo extends ValueObject<CargoPropiedades> {

    private constructor (propiedades: CargoPropiedades) {
        super(propiedades)
    }

    obtenerCargo(): string {
        return this.propiedades.cargo
    }

    public static crear(cargo: string): Cargo{

        if(cargo === "" || cargo === null || cargo === undefined){
            throw new ExcepcionCargoInvalido<typeof cargo >(`El cargo: "${cargo}" es inválido, el cargo no puede estar vacío`, cargo)
        }

        return new Cargo({cargo})
    }
}