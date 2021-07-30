import { ValueObject } from "../ClasesBase/ValueObject"
import { ExcepcionTituloTrabajoInvalido } from "./excepciones/ExcepcionTituloTrabajoInvalido"

export interface TituloTrabajoPropiedades {
    titulo: string
}

export class TituloTrabajo extends ValueObject<TituloTrabajoPropiedades> {

    private constructor (propiedades: TituloTrabajoPropiedades) {
        super(propiedades)
    }

    obtenerTitulo(): string {
        return this.propiedades.titulo
    }

    public static crear(titulo: string): TituloTrabajo {
        
        if(titulo.trim() === "" || titulo === null || titulo === undefined){
            throw new ExcepcionTituloTrabajoInvalido<typeof titulo >(`El titulo: "${titulo}" es inválido, el título no puede estar vacío`, titulo)
        }

        return new TituloTrabajo({titulo})
    }
}
