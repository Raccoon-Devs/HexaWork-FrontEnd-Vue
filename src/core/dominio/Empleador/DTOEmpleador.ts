import { Habilidad, HabilidadPropiedades } from "../habilidad/Habilidad"
import { InformacionDeContacto, InformacionDeContactoPropiedades } from "../informacionDeContacto/InformacionDeContacto"
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion"
import { NombreCompania } from "../valueObjectsComunes/NombreCompania"
import { EmpleadorPropiedades } from "./Empleador"
import { EstadoEmpleador } from "./valueObjects/EstadoEmpleador"
import { LogoEmpleador } from "./valueObjects/LogoEmpleador"
import { RequerimientosEspeciales } from "./valueObjects/RequerimientosEspeciales"

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