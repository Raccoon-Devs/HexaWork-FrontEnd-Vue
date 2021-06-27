import {ValueObject} from "../../ClasesBase/ValueObject"

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
            console.log("El cargo no puede estar vacío")
        }

        return new Cargo({cargo})
    }
}