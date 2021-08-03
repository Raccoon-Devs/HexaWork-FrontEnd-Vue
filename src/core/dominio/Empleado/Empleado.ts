import { Entidad } from "../clasesBase/Entidad"
import { SSN } from "./valueObjects/SSN"
import { FechaNacimiento } from "./valueObjects/FechaNacimiento"
import { NivelEducativo } from "./valueObjects/NivelEducativo"
import { EstadoEmpleado } from "./valueObjects/EstadoEmpleado"
import { Telefono, TelefonoPropiedades } from "../valueObjectsComunes/Telefono"
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion"
import { NombreCompleto, NombreCompletoPropiedades } from "../valueObjectsComunes/NombreCompleto"
import { ExperienciaDeTrabajo, ExperienciaDeTrabajoPropiedades } from "../experienciaDeTrabajo/ExperienciaDeTrabajo"
import { Habilidad, HabilidadPropiedades } from "../habilidad/Habilidad"
import { Curso, CursoPropiedades } from "../curso/Curso"
import { Referencia, ReferenciaPropiedades } from "../referencia/Referencia"
import { Clasificacion } from "./valueObjects/Clasificacion"

export interface EmpleadoPropiedades {
    ssn: SSN,
    nombreCompleto: NombreCompleto,
    numeroTelefono: Telefono,
    fechaNacimiento: FechaNacimiento,
    nivelEducativo: NivelEducativo,
    experienciaLaboral: ExperienciaDeTrabajo[],
    habilidades: Habilidad[],
    cursos: Curso[],
    referencias: Referencia[],
    clasificacion: Clasificacion,
    estadoEmpleado: EstadoEmpleado,
    direccion: Direccion
}

export class Empleado extends Entidad<EmpleadoPropiedades> {

    private constructor (propiedades: EmpleadoPropiedades) {
        super(propiedades)
    }

    obtenerSSN(): string {
        return this.propiedades.ssn.obtenerSSN()
    }

    obtenerNombreEmpleado(): NombreCompletoPropiedades {
        return this.propiedades.nombreCompleto.obtenerNombreCompleto()
    }

    obtenerNroTlf(): TelefonoPropiedades {
        return this.propiedades.numeroTelefono.obtenerTelefono()
    }

    obtenerFechaNacimiento(): Date {
        return this.propiedades.fechaNacimiento.obtenerFechaNacimiento()
    }

    obetnerNivelEducativo(): number {
        return this.propiedades.nivelEducativo.obtenerNivelEducativo()
    }

    obtenerExperienciaLaboral(): ExperienciaDeTrabajo[] {

        const experiencias: ExperienciaDeTrabajo[] = []
        this.propiedades.experienciaLaboral.forEach(experiencia => {
            experiencias.push(experiencia.obtenerExperienciaDeTrabajo())
        });

        return experiencias
    }

    obtenerHabilidades(): Habilidad[] {

        const habilidades: Habilidad[] = []
        this.propiedades.habilidades.forEach(habilidad => {
            habilidades.push(habilidad.obtenerHabilidad())
        });

        return habilidades
    }

    obtenerCursos(): Curso[] {

        const cursos: Curso[] = []
        this.propiedades.cursos.forEach(curso => {
            cursos.push(curso.obtenerCurso())
        });

        return cursos
    }

    obtenerReferencias(): Referencia[] {

        const referencias: Referencia[] = []
        this.propiedades.referencias.forEach(referencia => {
            referencias.push(referencia.obtenerReferencia())
        });

        return referencias
    }

    obtenerClasifiacion(): number {
        return this.propiedades.clasificacion.obtenerClasificacion()
    }

    obtenerEstadoEmpleado(): number {
        return this.propiedades.estadoEmpleado.obtenerEstadoEmpleado()
    }

    obtenerDireccion(): DireccionPropiedades {
        return this.propiedades.direccion.obtenerDireccion()
    }

    obtenerEmpleado(): Empleado {
        return this
    }

    public static crear(atributos: any): Empleado {

        const experiencias: ExperienciaDeTrabajo[] = []
        atributos.experienciaLaboral.forEach(experiencia => {
            experiencias.push(ExperienciaDeTrabajo.crear(experiencia))
        });

        const habilidades: Habilidad[] = []
        atributos.habilidades.forEach(habilidad => {
            habilidades.push(Habilidad.crear(habilidad))
        });

        const cursos: Curso[] = []
        atributos.cursos.forEach(curso => {
            cursos.push(Curso.crear(curso))
        });

        const referencias: Referencia[] = []
        atributos.referencias.forEach(referencia => {
            referencias.push(Referencia.crear(referencia))
        });

        return new Empleado(
            {
                ssn: SSN.crear(atributos.ssn),
                nombreCompleto: NombreCompleto.crear(
                    atributos.nombreCompleto.primerNombre,
                    atributos.nombreCompleto.segundoNombre,
                    atributos.nombreCompleto.primerApellido,
                    atributos.nombreCompleto.segundoApellido,
                ),
                numeroTelefono: Telefono.crear(
                    atributos.numeroTelefono.codigoPais,
                    atributos.numeroTelefono.numeroTelefono
                ),
                fechaNacimiento: FechaNacimiento.crear(atributos.fechaNacimiento),
                nivelEducativo: NivelEducativo.crear(atributos.nivelEducativo),
                experienciaLaboral: experiencias,
                habilidades: habilidades,
                cursos: cursos,
                referencias: referencias,
                clasificacion: Clasificacion.crear(atributos.clasificacion),
                estadoEmpleado: EstadoEmpleado.crear(atributos.estadoEmpleado),
                direccion: Direccion.crear(
                    atributos.direccion.calle1,
                    atributos.direccion.calle2,
                    atributos.direccion.ciudad,
                    atributos.direccion.estado,
                    atributos.direccion.codPostal
                )
            }
        )
    }
}
