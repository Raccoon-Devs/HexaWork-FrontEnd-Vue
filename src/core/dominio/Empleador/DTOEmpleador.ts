import { Habilidad } from "../Habilidad/Habilidad"
import { InformacionDeContacto } from "../InformacionDeContacto/InformacionDeContacto"
import { Direccion } from "../valueObjectsComunes/Direccion"
import { NombreCompania } from "../valueObjectsComunes/NombreCompania"
import { EmpleadorPropiedades } from "./Empleador"
import { EstadoEmpleador } from "./ValueObjects/EstadoEmpleador"
import { LogoEmpleador } from "./ValueObjects/LogoEmpleador"
import { RequerimientosEspeciales } from "./ValueObjects/RequerimientosEspeciales"

type EmpleadorParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends NombreCompania? any 
    : Type[Property] extends Direccion? any
    : Type[Property] extends InformacionDeContacto[]? any[]
    : Type[Property] extends LogoEmpleador? string
    : Type[Property] extends Habilidad[]? any[]
    : Type[Property] extends RequerimientosEspeciales? string
    : Type[Property] extends EstadoEmpleador? number
    : string
}

export type EmpleadorParaDominio= EmpleadorParaDominioMap<EmpleadorPropiedades>