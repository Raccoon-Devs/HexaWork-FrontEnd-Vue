import { Correo } from "../valueObjectsComunes/Correo"
import { NombreCompania } from "../valueObjectsComunes/NombreCompania"
import { NombreCompleto, NombreCompletoPropiedades } from "../valueObjectsComunes/NombreCompleto"
import { Telefono, TelefonoPropiedades } from "../valueObjectsComunes/Telefono"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"
import { ReferenciaPropiedades } from "./Referencia"

type ReferenciaParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends NombreCompleto? NombreCompletoPropiedades
    : Type[Property] extends TituloTrabajo? string
    : Type[Property] extends NombreCompania? string
    : Type[Property] extends Telefono? TelefonoPropiedades
    : Type[Property] extends Correo? string
    : string
}

export type ReferenciaParaDominio = ReferenciaParaDominioMap<ReferenciaPropiedades>