import { ValueObject } from "../../ClasesBase/ValueObject"

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
        return new NombreHabilidad({nombre})
    }
}
