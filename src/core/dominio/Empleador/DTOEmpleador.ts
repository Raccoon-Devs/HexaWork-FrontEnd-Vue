import { OfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/OfertaDeTrabajo"
import { Direccion, DireccionPropiedades } from "./valueObjects/Direccion"
import { NombreCompañia, NombreCompañiaPropiedades } from "./valueObjects/NombreCompañia"
import {InfoEmpleador, InfoEmpleadorPropiedades} from "./valueObjects/InfoEmpleador"
import { Rol, RolPropiedades } from "./valueObjects/Rol"
import { EmpleadorPropiedades } from "./Empleador"
import { IDEmpleador } from "./valueObjects/IDEmpleador"

type EmpleadorParaDominioMap<Type> = {
    [Property in keyof Type]: 
    Type[Property] extends Direccion? Direccion 
    : Type[Property] extends NombreCompañia? NombreCompañia
    : Type[Property] extends InfoEmpleador? InfoEmpleador
    : Type[Property] extends Rol? Rol: IDEmpleador;
}

export type EmpleadorParaDominio= EmpleadorParaDominioMap<EmpleadorPropiedades>