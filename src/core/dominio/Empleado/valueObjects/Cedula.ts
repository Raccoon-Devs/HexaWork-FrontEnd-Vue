import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionCedulaInvalida } from "../Excepciones/ExcepcionCedulaInvalida"

interface CedulaPropiedades {
    prefijo: string,
    numero: number
}

export class Cedula extends ValueObject<CedulaPropiedades> {

    constructor (propiedades: CedulaPropiedades) {
        super(propiedades)
    }

    obtenerPrefijo(): string{
        return this.propiedades.prefijo
    }

    obtenerNumero(): number{
        return this.propiedades.numero
    }

    public static crear(prefijo: string, numero: number): Cedula{
        if(prefijo === "" || prefijo === null || prefijo === undefined)
        {
            throw new ExcepcionCedulaInvalida<typeof prefijo>(`El prefijo: ${prefijo} es inválido, no puede ser vacío`, prefijo)
        }
        if((prefijo != "V" && prefijo != "E"))
        {
            throw new ExcepcionCedulaInvalida<typeof prefijo>(`El prefijo: ${prefijo} es inválido, debe ser un prefijo válido (V ó E)`, prefijo)
        }

        if(numero === null || numero === undefined){
            throw new ExcepcionCedulaInvalida<typeof numero>(`El número de cédula: ${numero} es inválido, no puede ser vacío`, numero)
        }
        if(numero < 0 || numero > 99999999){
            throw new ExcepcionCedulaInvalida<typeof numero>(`El número de cédula: ${numero} es inválido`, numero)
        }

        return new Cedula({prefijo, numero})
    }

}

