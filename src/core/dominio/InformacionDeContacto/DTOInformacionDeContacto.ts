import { Correo } from "../valueObjectsComunes/Correo"
import { NombreCompleto, NombreCompletoPropiedades } from "../valueObjectsComunes/NombreCompleto"
import { Telefono, TelefonoPropiedades } from "../valueObjectsComunes/Telefono"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"
import { InformacionDeContactoPropiedades } from "./InformacionDeContacto"

type InformacionDeContactoParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends NombreCompleto? NombreCompletoPropiedades
    : Type[Property] extends TituloTrabajo? string
    : Type[Property] extends Telefono? TelefonoPropiedades
    : Type[Property] extends Correo? string
    : string
}

export type InformacionDeContactoParaDominio = InformacionDeContactoParaDominioMap<InformacionDeContactoPropiedades>