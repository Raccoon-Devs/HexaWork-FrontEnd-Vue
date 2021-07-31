import { Empleado, EmpleadoPropiedades } from "../Empleado/Empleado"
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/OfertaDeTrabajo"
import { PostulacionPropiedades } from "./Postulacion"
import { EstadoPostulacion } from "./ValueObjects/EstadoPostulacion"
import { FechaPostulacion } from "./ValueObjects/Fechapostulacion"

type PostulacionParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends FechaPostulacion? Date
    : Type[Property] extends Empleado? EmpleadoPropiedades
    : Type[Property] extends OfertaDeTrabajo? OfertaDeTrabajoPropiedades
    : Type[Property] extends EstadoPostulacion? number
    : string
}

export type PostulacionParaDominio = PostulacionParaDominioMap<PostulacionPropiedades>