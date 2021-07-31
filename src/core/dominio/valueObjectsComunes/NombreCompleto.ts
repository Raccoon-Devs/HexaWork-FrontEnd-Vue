import { ValueObject } from "../ClasesBase/ValueObject"
import { ExcepcionNombreCompletoInvalido } from "./excepciones/ExcepcionNombreCompleto"

export interface NombreCompletoPropiedades {
    primerNombre: string,
    segundoNombre: string,
    primerApellido: string,
    segundoApellido: string
}

export class NombreCompleto extends ValueObject<NombreCompletoPropiedades> {

    constructor (propiedades: NombreCompletoPropiedades) {
        super(propiedades)
    }

    obtenerPrimerNombre(): string {
        return this.propiedades.primerNombre
    }

    obtenerSegundoNombre(): string {
        return this.propiedades.segundoNombre
    }

    obtenerPrimerApellido(): string {
        return this.propiedades.primerApellido
    }

    obtenerSegundoApellido(): string {
        return this.propiedades.segundoApellido
    }

    obtenerNombreCompleto(): NombreCompletoPropiedades {
        return this.propiedades
    }

    public static crear(primerNombre: string, segundoNombre: string, primerApellido: string, segundoApellido: string): NombreCompleto {
        if(primerNombre === "" || primerNombre === null || primerNombre === undefined) {
            throw new ExcepcionNombreCompletoInvalido<typeof primerNombre>(`El primer nombre: ${primerNombre} es inválido, no puede ser vacío`, primerNombre)
        }
        if(segundoNombre === "" || segundoNombre === null || segundoNombre === undefined) {
            throw new ExcepcionNombreCompletoInvalido<typeof segundoNombre>(`El segundo nombre: ${segundoNombre} es inválido, no puede ser vacío`, segundoNombre)
        }
        if(primerApellido === "" || primerApellido === null || primerApellido === undefined) {
            throw new ExcepcionNombreCompletoInvalido<typeof primerApellido>(`El primer apellido: ${primerApellido} es inválido, no puede ser vacío`, primerApellido)
        }
        if(segundoApellido === "" || segundoApellido === null || segundoApellido === undefined) {
            throw new ExcepcionNombreCompletoInvalido<typeof segundoApellido>(`El segundo apellido: ${segundoApellido} es inválido, no puede ser vacío`, segundoApellido)
        }
        return new NombreCompleto({primerNombre, segundoNombre, primerApellido, segundoApellido})
    }

}
