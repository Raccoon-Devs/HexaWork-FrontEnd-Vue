import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionRolInvalido } from "../excepciones/ExcepcionRolInvalido"

interface RolPropiedades {
    nombre: string
}

export class Rol extends ValueObject<RolPropiedades> {
    constructor (propiedades: RolPropiedades) {
        super(propiedades)
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
