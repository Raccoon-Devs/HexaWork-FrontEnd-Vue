import { Entidad } from "../ClasesBase/Entidad"
import { IDReferencia } from "./ValueObjects/IDReferencia"
import { NombreCompleto, NombreCompletoPropiedades } from "../valueObjectsComunes/NombreCompleto"
import { TituloTrabajo } from "../valueObjectsComunes/TituloTrabajo"
import { NombreCompania } from "../valueObjectsComunes/NombreCompania"
import { Telefono, TelefonoPropiedades } from "../valueObjectsComunes/Telefono"
import { Correo } from "../valueObjectsComunes/Correo"

export interface ReferenciaPropiedades {
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

    obtenerNombre(): NombreCompletoPropiedades {
        return this.propiedades.nombreCompleto.obtenerNombreCompleto()
    }

    obtenerTitulo(): string {
        return this.propiedades.tituloTrabajo.obtenerTitulo()
    }

    obtenerNombreCompania(): string {
        return this.propiedades.nombreCompania.obtenerNombre()
    }

    obtenerNroTelefono(): TelefonoPropiedades {
        return this.propiedades.numeroTelefono.obtenerTelefono()
    }

    obtenerCorreo(): string {
        return this.propiedades.correo.obtenerCorreo()
    }

    obtenerReferencia(): Referencia {
        return this
    }

    public static crear(atributos: any): Referencia {
        return new Referencia(
            {
                idReferencia: IDReferencia.crear(atributos.idReferencia),
                nombreCompleto: NombreCompleto.crear(
                    atributos.nombreCompleto.primerNombre,
                    atributos.nombreCompleto.segundoNombre,
                    atributos.nombreCompleto.primerApellido,
                    atributos.nombreCompleto.segundoApellido,
                ),
                tituloTrabajo: TituloTrabajo.crear(atributos.tituloTrabajo),
                nombreCompania: NombreCompania.crear(atributos.nombreCompania),
                numeroTelefono: Telefono.crear(
                    atributos.numeroTelefono.codigoPais,
                    atributos.numeroTelefono.numeroTelefono
                ),
                correo: Correo.crear(atributos.correo)
            }
        )
    }
}
