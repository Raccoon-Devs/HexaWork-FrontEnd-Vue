import { Entidad } from "../ClasesBase/Entidad"
import { IDUnicoEntidad } from "../ClasesBase/IDUnicoEntidad"

import { IDReferencia } from "./valueObjects/IDReferencia"

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
        super(propiedades)
    }

    obtenerId(): IDReferencia {
        return this.propiedades.idReferencia
    }

    obtenerNombre(): NombreCompleto {
        return this.propiedades.nombreCompleto
    }

    obtenerTitulo(): TituloTrabajo {
        return this.propiedades.tituloTrabajo
    }

    obtenerNombreCompania(): NombreCompania {
        return this.propiedades.nombreCompania
    }

    obtenerNroTelefono(): Telefono {
        return this.propiedades.numeroTelefono
    }

    obtenerCorreo(): Correo {
        return this.propiedades.correo
    }

    public static crear(
        atributos: any
    ): Referencia {
        return new Referencia(
            {
                idReferencia: IDReferencia.crear(atributos.id),
                nombreCompleto: NombreCompleto.crear(
                    atributos.primerNombre,
                    atributos.segundoNombre,
                    atributos.primerApellido,
                    atributos.segundoApellido,
                ),
                tituloTrabajo: TituloTrabajo.crear(atributos.tituloTrabajo),
                nombreCompania: NombreCompania.crear(atributos.nombreCompania),
                numeroTelefono: Telefono.crear(
                    atributos.codigoPais,
                    atributos.numeroTelefono
                ),
                correo: Correo.crear(atributos.correo)
            }
        )
    }
}
