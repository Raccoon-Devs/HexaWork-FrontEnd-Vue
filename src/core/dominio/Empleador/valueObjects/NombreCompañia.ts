import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionNombreCompañiaInvalida } from "../excepciones/ExcepcionNombreCompañiaInvalida"

interface NombreCompañiaPropiedades {
    nombre: String,
    rif: String
}

export class NombreCompañia extends ValueObject<NombreCompañiaPropiedades> {
    constructor (propiedades: NombreCompañiaPropiedades) {
        super(propiedades)
    }
    public static crear(nombre: string, rif: string){
        if (nombre === "" || nombre === null || nombre === undefined) {
            throw new ExcepcionNombreCompañiaInvalida<typeof nombre>(
                `El valor nombre: ${nombre} es invalido, no pueden estar vacio`,
                nombre
            )
        }
        if (rif === "" || rif === null || rif === undefined) {
            throw new ExcepcionNombreCompañiaInvalida<typeof rif>(
                `El valor rif: ${rif} es invalido, no pueden estar vacio`,
                rif
            )
        }
        return new NombreCompañia({
            nombre,
            rif
        })
    }
}
