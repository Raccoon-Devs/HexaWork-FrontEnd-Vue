import { Entidad } from "../ClasesBase/Entidad"
import { IDUnicoEntidad } from "../ClasesBase/IDUnicoEntidad"

import { IDHabilidad } from "./valueObjects/IDHabilidad"
import { NombreHabilidad } from "./valueObjects/NombreHabilidad"
import { CategoriaHabilidad } from "./valueObjects/CategoriaHabilidad"


interface HabilidadPropiedades {
    idHabilidad: IDHabilidad,
    nombre: NombreHabilidad,
    categoria: CategoriaHabilidad
}

export class Habilidad extends Entidad<HabilidadPropiedades> {

    private constructor (propiedades: HabilidadPropiedades) {
        super(propiedades)
    }

    obtenerId(): IDHabilidad {
        return this.propiedades.idHabilidad
    }

    obtenerNombre(): NombreHabilidad {
        return this.propiedades.nombre
    }

    obtenerCategoria(): CategoriaHabilidad {
        return this.propiedades.categoria
    }

    public static crear(
        atributos: any
    ): Habilidad {
        return new Habilidad(
            {
                idHabilidad: IDHabilidad.crear(atributos.id),
                nombre: NombreHabilidad.crear(atributos.nombre),
                categoria: CategoriaHabilidad.crear(atributos.categoria)
            }
        )
    }
}
