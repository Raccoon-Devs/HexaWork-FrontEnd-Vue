import { Empleado, EmpleadoPropiedades } from "../empleado/Empleado"
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../ofertasDeTrabajo/OfertaDeTrabajo"
import { PostulacionPropiedades } from "./Postulacion"
import { EstadoPostulacion } from "./valueObjects/EstadoPostulacion"
import { FechaPostulacion } from "./valueObjects/Fechapostulacion"

type PostulacionParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends FechaPostulacion? Date
    : Type[Property] extends Empleado? EmpleadoPropiedades
    : Type[Property] extends OfertaDeTrabajo? OfertaDeTrabajoPropiedades
    : Type[Property] extends EstadoPostulacion? number
    : string
}

export type PostulacionParaDominio = PostulacionParaDominioMap<PostulacionPropiedades>