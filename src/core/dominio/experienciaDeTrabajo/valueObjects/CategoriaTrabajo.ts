import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionCategoriaDeTrabajoInvalido } from '../excepciones/ExcepcionCategoriaDeTrabajoInvalido'


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
        if (categoria < 0 || categoria > 3) {
            throw new ExcepcionCategoriaDeTrabajoInvalido<typeof categoria>(
                `El valor categoria: ${categoria} es invalido, debe estar entre 0 y 3`,
                categoria
            )
        }
        return new CategoriaTrabajo({categoria})
    }
}
