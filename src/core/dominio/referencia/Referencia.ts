import { Entidad } from "../ClasesBase/Entidad"
import { IDReferencia } from "./ValueObjects/IDReferencia"
import { NombreCompleto } from "../valueObjectsComunes/NombreCompleto"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"
import { NombreCompania } from "../valueObjectsComunes/NombreCompania"
import { Telefono } from "../valueObjectsComunes/Telefono"
import { Correo } from "../valueObjectsComunes/Correo"

interface ReferenciaPropiedades {
    idReferencia: IDReferencia,
    nombreCompleto: NombreCompleto,
    tituloTrabajo: TituloTrabajo,
    nombreCompania: NombreCompania,
    numeroTelefono: Telefono,
    correo: Correo
}

export class Referencia extends Entidad<ReferenciaPropiedades> {

    private constructor (propiedades: ReferenciaPropiedades) {
        super(propiedades, propiedades.idReferencia)
    }

    obtenerId(): string | number {
        return this.propiedades.idReferencia.obtenerId()
    }

    obtenerNombre(): NombreCompleto {
        return this.propiedades.nombreCompleto.obtenerNombreCompleto()
    }

    obtenerTitulo(): string {
        return this.propiedades.tituloTrabajo.obtenerTitulo()
    }

    obtenerNombreCompania(): string {
        return this.propiedades.nombreCompania.obtenerNombre()
    }

    obtenerNroTelefono(): Telefono {
        return this.propiedades.numeroTelefono.obtenerTelefono()
    }

    obtenerCorreo(): string {
        return this.propiedades.correo.obtenerCorreo()
    }

    obtenerReferencia(): Referencia {
        return this
    }

    public static crear(propiedades: any): Referencia {
        return new Referencia(
            {
                idReferencia: IDReferencia.crear(propiedades.id),
                nombreCompleto: NombreCompleto.crear(
                    propiedades.primerNombre,
                    propiedades.segundoNombre,
                    propiedades.primerApellido,
                    propiedades.segundoApellido,
                ),
                tituloTrabajo: TituloTrabajo.crear(propiedades.tituloTrabajo),
                nombreCompania: NombreCompania.crear(propiedades.nombreCompania),
                numeroTelefono: Telefono.crear(
                    propiedades.codigoPais,
                    propiedades.numeroTelefono
                ),
                correo: Correo.crear(propiedades.correo)
            }
        )
    }
}
