import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionNumeroDeTelefonoInvalido } from "../Excepciones/ExcepcionNumeroDeTelefonoInvalido"

interface NumeroDeTelefonoPropiedades {
    codigo: number,
    numero: number
}

export class NumeroDeTelefono extends ValueObject<NumeroDeTelefonoPropiedades> {

    constructor (propiedades: NumeroDeTelefonoPropiedades) {
        super(propiedades)
    }

    obtenerCodigo(): number{
        return this.propiedades.codigo
    }

    obtenerNumero(): number{
        return this.propiedades.numero
    }

    public static crear(codigo: number, numero: number): NumeroDeTelefono{
        if(codigo === null || codigo === undefined){
            throw new ExcepcionNumeroDeTelefonoInvalido<typeof codigo>(`El código: ${codigo} es inválido, no puede ser vacío`, codigo)
        }
        if(codigo < 0 || codigo > 999){
            throw new ExcepcionNumeroDeTelefonoInvalido<typeof codigo>(`El código: ${codigo} es inválido`, codigo)
        }

        if(numero === null || numero === undefined){
            throw new ExcepcionNumeroDeTelefonoInvalido<typeof numero>(`El número de teléfono: ${numero} es inválido, no puede ser vacío`, numero)
        }
        if(numero < 1000000000 || numero > 9999999999){
            throw new ExcepcionNumeroDeTelefonoInvalido<typeof numero>(`El número de teléfono: ${numero} es inválido`, numero)
        }
        return new NumeroDeTelefono({codigo, numero})
    }

}
