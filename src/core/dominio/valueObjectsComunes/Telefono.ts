import { ValueObject } from "../ClasesBase/ValueObject"
import { ExcepcionNumeroDeTelefonoInvalido } from "./excepciones/ExcepcionNumeroDeTelefonoInvalido"

interface TelefonoPropiedades {
    codigoPais: number,
    numeroTelefono: number
}

export class Telefono extends ValueObject<TelefonoPropiedades> {

    constructor (propiedades: TelefonoPropiedades) {
        super(propiedades)
    }

    obtenerCodigo(): number{
        return this.propiedades.codigoPais
    }

    obtenerNumero(): number{
        return this.propiedades.numeroTelefono
    }

    obtenerTelefono(): Telefono{
        return this
    }
    
    public static crear(codigoPais: number, numeroTelefono: number): Telefono {
        if(codigoPais === null || codigoPais === undefined) {
            throw new ExcepcionNumeroDeTelefonoInvalido<typeof codigoPais>(`El código: ${codigoPais} es inválido, no puede ser vacío`, codigoPais)
        }
        if(codigoPais < 0 || codigoPais > 999) {
            throw new ExcepcionNumeroDeTelefonoInvalido<typeof codigoPais>(`El código: ${codigoPais} es inválido`, codigoPais)
        }
        if(numeroTelefono === null || numeroTelefono === undefined) {
            throw new ExcepcionNumeroDeTelefonoInvalido<typeof numeroTelefono>(`El número de teléfono: ${numeroTelefono} es inválido, no puede ser vacío`, numeroTelefono)
        }
        if(numeroTelefono < 1000000000 || numeroTelefono > 9999999999) {
            throw new ExcepcionNumeroDeTelefonoInvalido<typeof numeroTelefono>(`El número de teléfono: ${numeroTelefono} es inválido`, numeroTelefono)
        }
        return new Telefono({codigoPais, numeroTelefono})
    }

}
