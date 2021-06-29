import { OfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/OfertaDeTrabajo"
import { Direccion, DireccionPropiedades } from "./valueObjects/Direccion"
import { NombreCompañia, NombreCompañiaPropiedades } from "./valueObjects/NombreCompañia"
import {InfoEmpleador, InfoEmpleadorPropiedades} from "./valueObjects/InfoEmpleador"
import { Rol, RolPropiedades } from "./valueObjects/Rol"
import { EmpleadorPropiedades } from "./Empleador"
import { IDEmpleador } from "./valueObjects/IDEmpleador"

type EmpleadorParaDominioMap<Type> = {
    [Property in keyof Type]: 
    Type[Property] extends Direccion? DireccionPropiedades 
    : Type[Property] extends NombreCompañia? NombreCompañiaPropiedades
    : Type[Property] extends InfoEmpleador? InfoEmpleadorPropiedades
    : Type[Property] extends Rol? RolPropiedades: IDEmpleador;
}

export type EmpleadorParaDominio= EmpleadorParaDominioMap<EmpleadorPropiedades>