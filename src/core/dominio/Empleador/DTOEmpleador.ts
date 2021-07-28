import { Habilidad, HabilidadPropiedades } from "../Habilidad/Habilidad"
import { InformacionDeContacto, InformacionDeContactoPropiedades } from "../InformacionDeContacto/InformacionDeContacto"
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion"
import { NombreCompania } from "../valueObjectsComunes/NombreCompania"
import { EmpleadorPropiedades } from "./Empleador"
import { EstadoEmpleador } from "./ValueObjects/EstadoEmpleador"
import { LogoEmpleador } from "./ValueObjects/LogoEmpleador"
import { RequerimientosEspeciales } from "./ValueObjects/RequerimientosEspeciales"

type EmpleadorParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends NombreCompania? string 
    : Type[Property] extends Direccion? DireccionPropiedades
    : Type[Property] extends InformacionDeContacto[]? InformacionDeContactoPropiedades[]
    : Type[Property] extends LogoEmpleador? string
    : Type[Property] extends Habilidad[]? HabilidadPropiedades[]
    : Type[Property] extends RequerimientosEspeciales? string
    : Type[Property] extends EstadoEmpleador? number
    : string
}

export type EmpleadorParaDominio = EmpleadorParaDominioMap<EmpleadorPropiedades>