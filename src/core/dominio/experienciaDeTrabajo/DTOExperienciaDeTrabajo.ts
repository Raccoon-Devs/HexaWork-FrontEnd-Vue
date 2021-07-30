import { NombreCompania } from "../valueObjectsComunes/NombreCompania"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"
import { ExperienciaDeTrabajoPropiedades } from "./ExperienciaDeTrabajo"
import { CategoriaTrabajo } from "./ValueObjects/CategoriaTrabajo"

type ExperienciaDeTrabajoParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends TituloTrabajo? string 
    : Type[Property] extends NombreCompania? string
    : Type[Property] extends CategoriaTrabajo? number
    : string
}

export type ExperienciaDeTrabajoParaDominio = ExperienciaDeTrabajoParaDominioMap<ExperienciaDeTrabajoPropiedades>