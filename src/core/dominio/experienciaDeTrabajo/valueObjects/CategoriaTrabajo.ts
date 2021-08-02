import { ValueObject } from "../../clasesBase/ValueObject"
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

        if(categoria === null || categoria === undefined){
            throw new ExcepcionCategoriaDeTrabajoInvalido<typeof categoria >(`La categoría: ${categoria} no puede estar vacio`, categoria)
        }

        if(!(categoria in [0, 1, 2, 3])){
            throw new ExcepcionCategoriaDeTrabajoInvalido<typeof categoria >(`La categoría: ${categoria} de la Experiencia de Trabajo debe ser: 0 (Limpieza), 1 (Mantenimiento), 2 (Cocina), 3 (Lavandería)`, categoria)
        }

        return new CategoriaTrabajo({categoria})
    }
}
