import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionDireccionInvalida } from "../excepciones/ExcepcionDireccionInvalida"

interface DireccionPropiedades {
    calle1: string,
    calle2: string,
    ciudad: string,
    estado: string,
    zip: string
}

export class Direccion extends ValueObject<DireccionPropiedades> {
    constructor (propiedades: DireccionPropiedades) {
        super(propiedades)
    }

    public static crear(calle1: string, calle2: string, ciudad: string, estado: string, zip: string){
        if (calle1 === "" || calle1 === null || calle1 === undefined) {
            throw new ExcepcionDireccionInvalida<typeof calle1>(
                `El valor calle1: ${calle1} es invalido, no pueden estar vacio`,
                calle1
            )
        }
        if (calle2 === "" || calle2 === null || calle2 === undefined) {
            throw new ExcepcionDireccionInvalida<typeof calle2>(
                `El valor calle2: ${calle2} es invalido, no pueden estar vacio`,
                calle1
            )
        }
        if (ciudad === "" || ciudad === null || ciudad === undefined) {
            throw new ExcepcionDireccionInvalida<typeof ciudad>(
                `El valor ciudad: ${ciudad} es invalido, no pueden estar vacio`,
                calle1
            )
        }
        if (estado === "" || estado === null || estado === undefined) {
            throw new ExcepcionDireccionInvalida<typeof estado>(
                `El valor estado: ${estado} es invalido, no pueden estar vacio`,
                calle1
            )
        }
        if (zip === "" || zip === null || zip === undefined) {
            throw new ExcepcionDireccionInvalida<typeof zip>(
                `El valor zip: ${zip} es invalido, no pueden estar vacio`,
                calle1
            )
        }

        return new Direccion({
            calle1,
            calle2,
            ciudad,
            estado,
            zip
        })
    }
}
