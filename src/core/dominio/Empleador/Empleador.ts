import { Entidad } from "../ClasesBase/Entidad"
import { NombreCompañia } from "./valueObjects/NombreEmpresa"
import { Direccion } from "./valueObjects/NombreEmpresa"
import { InfoEmpleador } from "./valueObjects/NombreEmpresa"
import { Rol } from "./valueObjects/NombreEmpresa"
import { IDEmpleador } from "./IDEmpleador"

interface EmpleadorPropiedades {
    IDEmpleador: IDEmpleador
    nombreEmpresa: NombreCompañia,
    direccion: Direccion,
    infoEmpleador: InfoEmpleador,
    rol: Rol
}

type InfoEmpleador {
    nombreCompleto: string,
    cargoDeTrabajo: string,
    numeroDeTelefono: string,
    correo: string
}

type Direccion {
    calle1: string,
    calle2: string,
    ciudad: string,
    estado: string,
    zip: string
}

export class Empleador extends Entidad<EmpleadorPropiedades> {

    constructor (propiedades: EmpleadorPropiedades) {
        super(propiedades)
    }

    obtenerId(): IDEmpeador {
        return this.propiedades.IDEmpeador
    }

    obtenerNombreEmpresa(): NombreCompañia {
        return this.propiedades.nombreEmpresa
    }

    direccion(): Direccion {
        return this.propiedades.direccion
    }

    infoEmpleador(): InfoEmpleador {
        return this.propiedades.infoEmpleador
    }

    rol(): Rol {
        return this.propiedades.rol
    }

    public static create(
        id? : string,
        nombreEmpresa: string,
        direccion: Direccion,
        infoEmpleador: InfoEmpleador,
        rol: string
    ){
        return new Empleador({
            id: IDOferta.create(id),
            nombreEmpresa: NombreEmpresa.create(nombreEmpresa),
            direccion: Direccion.create(direccion.calle1, direccion.calle2, direccion.ciudad, direccion.ciudad, direccion.zip),
            infoEmpleador: InfoEmpleador.create(infoEmpleador.nombreCompleto, infoEmpleador.cargoDeTrabajo, infoEmpleador.numeroDeTelefono, infoEmpleador.correo),
            rol: Rol.create(rol)
        })
    }

}
