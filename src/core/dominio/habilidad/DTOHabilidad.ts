import { HabilidadPropiedades } from "./Habilidad"
import { CategoriaHabilidad } from "./valueObjects/CategoriaHabilidad"
import { NombreHabilidad } from "./valueObjects/NombreHabilidad"

type HabilidadParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends NombreHabilidad? string
    : Type[Property] extends CategoriaHabilidad? number
    : string
}

export type HabilidadParaDominio = HabilidadParaDominioMap<HabilidadPropiedades>