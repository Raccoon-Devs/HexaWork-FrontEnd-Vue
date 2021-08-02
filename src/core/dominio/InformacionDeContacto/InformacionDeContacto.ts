import { Entidad } from "../clasesBase/Entidad"
import { NombreCompleto, NombreCompletoPropiedades } from "../valueObjectsComunes/NombreCompleto"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"
import { Telefono, TelefonoPropiedades } from "../valueObjectsComunes/Telefono"
import { Correo } from "../valueObjectsComunes/Correo"
import { IDInformacionContacto } from "./valueObjects/IDInformacionContacto"

export interface InformacionDeContactoPropiedades {
    idInformacionContacto: IDInformacionContacto,
    nombreCompleto: NombreCompleto,
    tituloTrabajo: TituloTrabajo,
    numeroTelefono: Telefono,
    correo: Correo
}

export class InformacionDeContacto extends Entidad<InformacionDeContactoPropiedades> {

    private constructor (propiedades: InformacionDeContactoPropiedades) {
        super(propiedades, propiedades.idInformacionContacto)
    }

    obtenerId(): string | number {
        return this.propiedades.idInformacionContacto.obtenerId()
    }

    obtenerNombre(): NombreCompletoPropiedades {
        return this.propiedades.nombreCompleto.obtenerNombreCompleto()
    }

    obtenerTitulo(): string {
        return this.propiedades.tituloTrabajo.obtenerTitulo()
    }

    obtenerNroTelefono(): TelefonoPropiedades {
        return this.propiedades.numeroTelefono.obtenerTelefono()
    }

    obtenerCorreo(): string {
        return this.propiedades.correo.obtenerCorreo()
    }

    obtenerInformacionDeContacto(): InformacionDeContacto {
        return this
    }

    public static crear(atributos: any): InformacionDeContacto {
        return new InformacionDeContacto(
            {
                idInformacionContacto: IDInformacionContacto.crear(atributos.idInformacionContacto),
                nombreCompleto: NombreCompleto.crear(
                    atributos.nombreCompleto.primerNombre,
                    atributos.nombreCompleto.segundoNombre,
                    atributos.nombreCompleto.primerApellido,
                    atributos.nombreCompleto.segundoApellido,
                ),
                tituloTrabajo: TituloTrabajo.crear(atributos.tituloTrabajo),
                numeroTelefono: Telefono.crear(
                    atributos.numeroTelefono.codigoPais,
                    atributos.numeroTelefono.numeroTelefono
                ),
                correo: Correo.crear(atributos.correo)
            }
        )
    }
}
