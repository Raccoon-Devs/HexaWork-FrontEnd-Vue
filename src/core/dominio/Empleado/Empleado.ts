import { Entidad } from "../ClasesBase/Entidad"

// import { Cedula } from "./valueObjects/Cedula"
// import { Direccion } from "./valueObjects/Direccion"
// import { NombreCompleto } from "./valueObjects/NombreCompleto"
// import { NumeroDeTelefono } from "./valueObjects/NumeroDeTelefono"

import { SSN } from "./valueObjects/SSN"
import { NombreCompleto } from "./valueObjects/NombreCompleto"
import { FechaNacimiento } from "./valueObjects/FechaNacimiento"
import { NivelEducativo } from "./valueObjects/NivelEducativo"
import { EstadoEmpleado } from "./valueObjects/EstadoEmpleado"

import { Telefono } from "../valueObjectsComunes/Telefono"
import { Direccion } from "../valueObjectsComunes/Direccion"

// import { ExperienciaDeTrabajo } from "../experienciaDeTrabajo/ExperienciaDeTrabajo"
// import { Habilidad } from "../habilidad/Habilidad"
// import { Curso } from "../curso/Curso"
// import { Referencia } from "../referencia/Referencia"


interface EmpeladoPropiedades {
    ssn: SSN,
    nombreCompleto: NombreCompleto,
    numeroTelefono: Telefono,
    fechaNacimiento: FechaNacimiento,
    nivelEducativo: NivelEducativo,
    //experienciaLaboral: Array<ExperienciaDeTrabajo>,
    //habilidades: Array<Habilidad>
    //cursos: Array<Curso>
    //referencias: Array<Referencia>
    estadoEmpleador: EstadoEmpleado,
    direccion: Direccion
}

type ssnEmpleado = {
    ssn: string
}

type nombreEmpleado = {
    primerNombre: string,
    segundoNombre: string,
    primerApellido: string
    segundoApellido: string
}

type telefonoEmpleado = {
    codigoPais: number,
    numeroTelefono: number
}

type fechaNacimientoEmpleado = {
    fechaNacimiento: Date
}

type nivelEducativoEmpleado = {
    nivelEducativo: string
}

type estadoEmpleadorEmpleado = {
    estado: number
}

type direccionEmpleado = {
    calle1: string,
    calle2: string,
    ciudad: string,
    estado: string,
    codPostal: string
}

export class Empleado extends Entidad<EmpeladoPropiedades> {

    private constructor (propiedades: EmpeladoPropiedades) {
        super(propiedades)
    }

    obtenerSSN(): SSN {
        return this.propiedades.SSN
    }

    ObtenerNombreEmpleado(): NombreCompleto {
        return this.propiedades.nombreCompleto
    }

    obtenerNroTlf(): Telefono{
        return this.propiedades.numeroTelefono
    }

    obtenerDireccion(): Direccion{
        return this.propiedades.direccion
    }

    public static crear(
        ssn: ssnEmpleado,
        nombreEmpleado: nombreEmpleado,
        nroTlf: telefonoEmpleado,
        direccion: direccionEmpleado
    ): Empleado {
        return new Empleado(
            {
                ssn: SSN.crear(ssn.ssn),
                nombreEmpleado: NombreCompleto.crear(nombreEmpleado.primerNombre, nombreEmpleado.segundoNombre, nombreEmpleado.primerApellido, nombreEmpleado.segundoApellido),
                nroTlf: Telefono.crear(nroTlf.codigoPais, nroTlf.numeroTelefono),
                direccion: Direccion.crear(direccion.calle1, direccion.calle2, direccion.ciudad, direccion.estado, direccion.codPostal)
            }
        )
    }
}
