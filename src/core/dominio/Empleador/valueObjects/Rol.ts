import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionRolInvalido } from "../excepciones/ExcepcionRolInvalido"

export interface RolPropiedades {
    nombre: string
}

export class Rol extends ValueObject<RolPropiedades> {
    constructor (propiedades: RolPropiedades) {
        super(propiedades)
    }

    obtenerRol(): string {
        return this.propiedades.nombre
    }

    public static crear(
        nombre: string
    ){
        if(
            nombre === "" || nombre === null || nombre === undefined
        ){
            throw new ExcepcionRolInvalido<typeof nombre>(
                `El valor nombre: ${nombre} es invalido, no pueden estar vacio`,
                nombre
            )
        }
        return new Rol({
            nombre
        })
    }
}
