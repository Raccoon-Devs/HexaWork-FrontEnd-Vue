import { ValueObject } from "../ClasesBase/ValueObject"
import { ExcepcionDireccionInvalida } from "./excepciones/ExcepcionDireccionInvalida"


export interface DireccionPropiedades {
    calle1: string,
    calle2: string,
    ciudad: string,
    estado: string,
    codPostal: string
}

export class Direccion extends ValueObject<DireccionPropiedades> {

    constructor (propiedades: DireccionPropiedades) {
        super(propiedades)
    }

    obtenerCalle1(): string {
        return this.propiedades.calle1
    }

    obtenerCalle2(): string {
        return this.propiedades.calle2
    }

    obtenerCiudad(): string {
        return this.propiedades.ciudad
    }

    obtenerEstadao(): string {
        return this.propiedades.estado
    }

    obtenerCodPostal(): string {
        return this.propiedades.codPostal
    }

    obtenerDireccion(): DireccionPropiedades{
        return this.propiedades
    }

    public static crear(calle1: string, calle2: string, ciudad: string, estado: string, codPostal: string): Direccion {
        if(calle1 === "" || calle1 === null || calle1 === undefined) {
            throw new ExcepcionDireccionInvalida<typeof calle1>(`La calle1: ${calle1} es inválida, no puede estar vacía`, calle1)
        }
        if(calle2 === "" || calle2 === null || calle2 === undefined) {
            throw new ExcepcionDireccionInvalida<typeof calle2>(`La calle2: ${calle2} es inválida, no puede estar vacía`, calle2)
        }
        if(ciudad === "" || ciudad === null || ciudad === undefined) {
            throw new ExcepcionDireccionInvalida<typeof ciudad>(`La ciudad: ${ciudad} es inválida, no puede estar vacía`, ciudad)
        }
        if(estado === "" || estado === null || estado === undefined) {
            throw new ExcepcionDireccionInvalida<typeof estado>(`El estado: ${estado} es inválido, no puede estar vacío`, estado)
        }
        if(codPostal === "" || codPostal === null || codPostal === undefined) {
            throw new ExcepcionDireccionInvalida<typeof codPostal>(`El código postal: ${codPostal} es inválido, no puede estar vacío`, codPostal)
        }
        return new Direccion({calle1, calle2, ciudad, estado, codPostal})
    }


}
