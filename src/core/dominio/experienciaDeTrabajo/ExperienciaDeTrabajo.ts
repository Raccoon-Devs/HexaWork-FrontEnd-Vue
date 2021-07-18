import { Entidad } from "../ClasesBase/Entidad"
import { IDUnicoEntidad } from "../ClasesBase/IDUnicoEntidad"

import { IDExperienciaTrabajo } from "./valueObjects/IDExperienciaTrabajo"
import { CategoriaTrabajo } from "./valueObjects/CategoriaTrabajo"

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
        super(propiedades)
    }

    obtenerId(): IDExperienciaTrabajo {
        return this.propiedades.idExperiencia
    }

    obtenerTituloTrabajo(): TituloTrabajo {
        return this.propiedades.tituloTrabajo
    }

    obtenerNombreCompania(): NombreCompania {
        return this.propiedades.nombreCompania
    }

    obtenerCategoria(): CategoriaTrabajo {
        return this.propiedades.categoria
    }

    public static crear(
        atributos: any
    ): ExperienciaDeTrabajo {
        return new ExperienciaDeTrabajo(
            {
                idExperiencia: IDExperienciaTrabajo.crear(atributos.id),
                tituloTrabajo: TituloTrabajo.crear(atributos.titulo),
                nombreCompania: NombreCompania.crear(atributos.nombre),
                categoria: CategoriaTrabajo.crear(atributos.categoria)
            }
        )
    }
}
