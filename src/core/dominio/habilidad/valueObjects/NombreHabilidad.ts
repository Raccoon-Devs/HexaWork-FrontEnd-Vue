import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionNombreHabilidadInvalido } from "../Excepciones/ExcepcionNombreHabilidadInvalido"

interface NombreHabilidadPropiedades {
    nombre: string
}

export class NombreHabilidad extends ValueObject<NombreHabilidadPropiedades> {

    private constructor (propiedades: NombreHabilidadPropiedades) {
        super(propiedades)
    }

    obtenerNombre(): string {
        return this.propiedades.nombre
    }

    public static crear(nombre: string): NombreHabilidad {

        if(nombre.trim() === "" || nombre === null || nombre === undefined){
            throw new ExcepcionNombreHabilidadInvalido<typeof nombre >(`El nombre: "${nombre}" es inválido, el nombre no puede estar vacío`, nombre)
        }

        return new NombreHabilidad({nombre})
    }
}
