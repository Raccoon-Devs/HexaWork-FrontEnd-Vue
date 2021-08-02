import { Postulacion, PostulacionPropiedades } from "../postulacion/Postulacion"
import { Calendario, CalendarioPropiedades } from "../valueObjectsComunes/Calendario"
import { RelacionDeTrabajoPropiedades } from "./RelacionDeTrabajo"
import { EstadoRelacionDeTrabajo } from "./valueObjects/EstadoRelacionDeTrabajo"

type RelacionDeTrabajoParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends Postulacion? PostulacionPropiedades
    : Type[Property] extends Calendario[]? CalendarioPropiedades[]
    : Type[Property] extends EstadoRelacionDeTrabajo? number
    : string
}

export type RelacionDeTrabajoParaDominio = RelacionDeTrabajoParaDominioMap<RelacionDeTrabajoPropiedades>