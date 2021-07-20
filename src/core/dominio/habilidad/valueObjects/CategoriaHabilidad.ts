import { ValueObject } from "../../ClasesBase/ValueObject"

interface CategoriaHabilidadPropiedades {
    categoria: number
}

export class CategoriaHabilidad extends ValueObject<CategoriaHabilidadPropiedades> {

    private constructor (propiedades: CategoriaHabilidadPropiedades) {
        super(propiedades)
    }

    obtenerCategoria(): number {
        return this.propiedades.categoria
    }

    public static crear(categoria: number): CategoriaHabilidad {
        return new CategoriaHabilidad({categoria})
    }
}
