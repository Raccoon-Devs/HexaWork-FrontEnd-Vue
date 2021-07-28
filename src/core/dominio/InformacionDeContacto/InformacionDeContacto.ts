import { Entidad } from "../ClasesBase/Entidad"
import { NombreCompleto } from "../valueObjectsComunes/NombreCompleto"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"
import { Telefono } from "../valueObjectsComunes/Telefono"
import { Correo } from "../valueObjectsComunes/Correo"
import { IDInformacionContacto } from "./ValueObjects/IDInformacionContacto"

interface InformacionDeContactoPropiedades {
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

    obtenerNombre(): NombreCompleto {
        return this.propiedades.nombreCompleto.obtenerNombreCompleto()
    }

    obtenerTitulo(): string {
        return this.propiedades.tituloTrabajo.obtenerTitulo()
    }

    obtenerNroTelefono(): Telefono {
        return this.propiedades.numeroTelefono.obtenerTelefono()
    }

    obtenerCorreo(): string {
        return this.propiedades.correo.obtenerCorreo()
    }

    obtenerInformacionDeContacto(): InformacionDeContacto {
        return this
    }

    public static crear(propiedades: any): InformacionDeContacto {
        return new InformacionDeContacto(
            {
                idInformacionContacto: IDInformacionContacto.crear(propiedades.idInformacionContacto),
                nombreCompleto: NombreCompleto.crear(
                    propiedades.nombreCompleto.primerNombre,
                    propiedades.nombreCompleto.segundoNombre,
                    propiedades.nombreCompleto.primerApellido,
                    propiedades.nombreCompleto.segundoApellido,
                ),
                tituloTrabajo: TituloTrabajo.crear(propiedades.tituloTrabajo),
                numeroTelefono: Telefono.crear(
                    propiedades.numeroTelefono.codigoPais,
                    propiedades.numeroTelefono.numeroTelefono
                ),
                correo: Correo.crear(propiedades.correo)
            }
        )
    }
}
