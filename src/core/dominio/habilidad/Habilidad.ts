import { Entidad } from "../ClasesBase/Entidad"
import { IDHabilidad } from "./ValueObjects/IDHabilidad"
import { NombreHabilidad } from "./ValueObjects/NombreHabilidad"
import { CategoriaHabilidad } from "./ValueObjects/CategoriaHabilidad"


interface HabilidadPropiedades {
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

    public static crear(propiedades: any): Habilidad {
        return new Habilidad(
            {
                idHabilidad: IDHabilidad.crear(propiedades.idHabilidad),
                nombre: NombreHabilidad.crear(propiedades.nombre),
                categoria: CategoriaHabilidad.crear(propiedades.categoria)
            }
        )
    }
}
