import { ValueObject } from "../../clasesBase/ValueObject"
import { ExcepcionCategoriaHabilidadInvalida } from "../excepciones/ExcepcionCategoriaHabilidadInvalida"

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

        if(categoria === null || categoria === undefined){
            throw new ExcepcionCategoriaHabilidadInvalida<typeof categoria >(`La categoria: ${categoria} no puede estar vacio`, categoria)
        }

        if(!(categoria in [0, 1, 2, 3, 4, 5, 6])){
            throw new ExcepcionCategoriaHabilidadInvalida<typeof categoria >(`La categoria: ${categoria} de la habilidad debe ser: 0 (Habilidad Blanda), 1 (Habilidad Técnica), 2 (Habilidad Cognitiva), 3 (Habilidad Mecánica), 4 (Habilidad Lingüística), 5 (Habilidad Manual), 6 (Habilidad Visualización),`, categoria)
        }

        return new CategoriaHabilidad({categoria})
    }
}
