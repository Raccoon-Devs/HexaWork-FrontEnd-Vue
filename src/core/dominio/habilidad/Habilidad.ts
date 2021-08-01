import { Entidad } from "../ClasesBase/Entidad"
import { IDHabilidad } from "./valueObjects/IDHabilidad"
import { NombreHabilidad } from "./valueObjects/NombreHabilidad"
import { CategoriaHabilidad } from "./valueObjects/CategoriaHabilidad"


export interface HabilidadPropiedades {
    idHabilidad: IDHabilidad,
    nombre: NombreHabilidad,
    categoria: CategoriaHabilidad
}

export class Habilidad extends Entidad<HabilidadPropiedades> {

    private constructor (propiedades: HabilidadPropiedades) {
        super(propiedades, propiedades.idHabilidad)
    }

    obtenerId(): string | number {
        return this.propiedades.idHabilidad.obtenerId()
    }

    obtenerNombre(): string {
        return this.propiedades.nombre.obtenerNombre()
    }

    obtenerCategoria(): number {
        return this.propiedades.categoria.obtenerCategoria()
    }

    obtenerHabilidad(): Habilidad {
        return this
    }

    public static crear(atributos: any): Habilidad {
        return new Habilidad(
            {
                idHabilidad: IDHabilidad.crear(atributos.idHabilidad),
                nombre: NombreHabilidad.crear(atributos.nombre),
                categoria: CategoriaHabilidad.crear(atributos.categoria)
            }
        )
    }
}
