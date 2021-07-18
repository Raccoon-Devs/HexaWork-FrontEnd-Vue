import { Entidad } from "../ClasesBase/Entidad"

import { SSN } from "./valueObjects/SSN"
import { FechaNacimiento } from "./valueObjects/FechaNacimiento"
import { NivelEducativo } from "./valueObjects/NivelEducativo"
import { EstadoEmpleado } from "./valueObjects/EstadoEmpleado"

import { Telefono } from "../valueObjectsComunes/Telefono"
import { Direccion } from "../valueObjectsComunes/Direccion"
import { NombreCompleto } from "../valueObjectsComunes/NombreCompleto"

import { ExperienciaDeTrabajo } from "../experienciaDeTrabajo/ExperienciaDeTrabajo"
// import { Habilidad } from "../habilidad/Habilidad"
// import { Curso } from "../curso/Curso"
// import { Referencia } from "../referencia/Referencia"


interface EmpeladoPropiedades {
    ssn: SSN,
    nombreCompleto: NombreCompleto,
    numeroTelefono: Telefono,
    fechaNacimiento: FechaNacimiento,
    nivelEducativo: NivelEducativo,
    experienciaLaboral: Array<ExperienciaDeTrabajo>,
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
    nivelEducativo: number
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
        return this.propiedades.ssn
    }

    obtenerNombreEmpleado(): NombreCompleto {
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
        fechaNacimiento: fechaNacimientoEmpleado,
        nivelEducativo: nivelEducativoEmpleado,
        estadoEmpleador: estadoEmpleadorEmpleado,
        direccion: direccionEmpleado,
        experienciaLaboral: Array<ExperienciaDeTrabajo>
        //habilidades: Array<Habilidad>
        //cursos: Array<Curso>
        //referencias: Array<Referencia>
    ): Empleado {
        return new Empleado(
            {
                ssn: SSN.crear(ssn.ssn),
                nombreCompleto: NombreCompleto.crear(nombreEmpleado.primerNombre, nombreEmpleado.segundoNombre, nombreEmpleado.primerApellido, nombreEmpleado.segundoApellido),
                numeroTelefono: Telefono.crear(nroTlf.codigoPais, nroTlf.numeroTelefono),
                fechaNacimiento: FechaNacimiento.crear(fechaNacimiento.fechaNacimiento),
                nivelEducativo: NivelEducativo.crear(nivelEducativo.nivelEducativo),
                estadoEmpleador: EstadoEmpleado.crear(estadoEmpleador.estado),
                direccion: Direccion.crear(direccion.calle1, direccion.calle2, direccion.ciudad, direccion.estado, direccion.codPostal),
                experienciaLaboral: []
            }
        )
    }
}
