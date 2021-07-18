import { ValueObject } from "../../ClasesBase/ValueObject"

interface CategoriaTrabajoPropiedades {
    categoria: number
}

export class CategoriaTrabajo extends ValueObject<CategoriaTrabajoPropiedades> {

    private constructor (propiedades: CategoriaTrabajoPropiedades) {
        super(propiedades)
    }

    obtenerCategoria(): number {
        return this.propiedades.categoria
    }

    public static crear(categoria: number): CategoriaTrabajo {
        return new CategoriaTrabajo({categoria})
    }
}
