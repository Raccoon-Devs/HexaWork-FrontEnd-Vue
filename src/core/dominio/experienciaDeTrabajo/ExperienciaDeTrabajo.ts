import { Entidad } from "../ClasesBase/Entidad"
import { IDExperienciaTrabajo } from "./ValueObjects/IDExperienciaTrabajo"
import { CategoriaTrabajo } from "./ValueObjects/CategoriaTrabajo"
import { NombreCompania } from "../valueObjectsComunes/NombreCompania"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"

interface ExperienciaDeTrabajoPropiedades {
    idExperiencia: IDExperienciaTrabajo,
    tituloTrabajo: TituloTrabajo,
    nombreCompania: NombreCompania,
    categoria: CategoriaTrabajo
}

export class ExperienciaDeTrabajo extends Entidad<ExperienciaDeTrabajoPropiedades> {

    private constructor (propiedades: ExperienciaDeTrabajoPropiedades) {
        super(propiedades, propiedades.idExperiencia)
    }

    obtenerId(): string | number {
        return this.propiedades.idExperiencia.obtenerId()
    }

    obtenerTituloTrabajo(): string {
        return this.propiedades.tituloTrabajo.obtenerTitulo()
    }

    obtenerNombreCompania(): string {
        return this.propiedades.nombreCompania.obtenerNombre()
    }

    obtenerCategoria(): number {
        return this.propiedades.categoria.obtenerCategoria()
    }

    obtenerExperienciaDeTrabajo(): ExperienciaDeTrabajo {
        return this
    }

    public static crear(propiedades: any): ExperienciaDeTrabajo {
        return new ExperienciaDeTrabajo(
            {
                idExperiencia: IDExperienciaTrabajo.crear(propiedades.idExperiencia),
                tituloTrabajo: TituloTrabajo.crear(propiedades.titulo),
                nombreCompania: NombreCompania.crear(propiedades.nombre),
                categoria: CategoriaTrabajo.crear(propiedades.categoria)
            }
        )
    }
}
