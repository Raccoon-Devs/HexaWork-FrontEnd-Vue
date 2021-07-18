import { ValueObject } from "../ClasesBase/ValueObject"

interface NombreCompaniaPropiedades {
    nombre: string
}

export class NombreCompania extends ValueObject<NombreCompaniaPropiedades> {

    private constructor (propiedades: NombreCompaniaPropiedades) {
        super(propiedades)
    }

    obtenerNombre(): string {
        return this.propiedades.nombre
    }

    public static crear(nombre: string): NombreCompania {
        return new NombreCompania({nombre})
    }
}
