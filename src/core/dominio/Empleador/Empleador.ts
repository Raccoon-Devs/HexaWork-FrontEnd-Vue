import { Entidad } from "../ClasesBase/Entidad"
import { NombreCompañia, NombreCompañiaPropiedades } from "./valueObjects/NombreCompañia"
import { Direccion } from "./valueObjects/Direccion"
import { InfoEmpleador } from "./valueObjects/InfoEmpleador"
import { Rol, RolPropiedades } from "./valueObjects/Rol"
import { IDEmpleador } from "./valueObjects/IDEmpleador"

export interface EmpleadorPropiedades {
    IDEmpleador: IDEmpleador
    nombreEmpresa: NombreCompañia,
    direccion: Direccion,
    infoEmpleador: InfoEmpleador,
    rol: Rol
}

type InfoEmpleadorType = {
    nombreCompleto: string,
    cargoDeTrabajo: string,
    numeroDeTelefono: string,
    correo: string
}

type DireccionType = {
    calle1: string,
    calle2: string,
    ciudad: string,
    estado: string,
    zip: string
}

type NombreEmpresaType = {
    nombre: string,
    rif: string
}

export class Empleador extends Entidad<EmpleadorPropiedades> {

    constructor (propiedades: EmpleadorPropiedades) {
        super(propiedades, propiedades.IDEmpleador)
    }

    obtenerId(): IDEmpleador {
        return this.propiedades.IDEmpleador
    }

    obtenerNombreEmpresa(): NombreCompañiaPropiedades {
        return this.propiedades.nombreEmpresa.obtenerNombreEmpresa()
    }

    obtenerDireccion(): Direccion {
        return this.propiedades.direccion
    }

    obtenerInfoEmpleador(): InfoEmpleador {
        return this.propiedades.infoEmpleador
    }

    obtenerRol(): Rol {
        return this.propiedades.rol
    }

    public static crear(
        nombreEmpresa: NombreEmpresaType,
        direccion: DireccionType,
        infoEmpleador: InfoEmpleadorType,
        rol: string,
        id? : string,
    ){
        return new Empleador({
            IDEmpleador: IDEmpleador.crear(id),
            nombreEmpresa: NombreCompañia.crear(nombreEmpresa.nombre, nombreEmpresa.rif),
            direccion: Direccion.crear(direccion.calle1, direccion.calle2, direccion.ciudad, direccion.ciudad, direccion.zip),
            infoEmpleador: InfoEmpleador.crear(infoEmpleador.nombreCompleto, infoEmpleador.cargoDeTrabajo, infoEmpleador.numeroDeTelefono, infoEmpleador.correo),
            rol: Rol.crear(rol)
        })
    }

}
