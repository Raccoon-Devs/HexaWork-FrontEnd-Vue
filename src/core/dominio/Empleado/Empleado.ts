import { Entidad } from "../ClasesBase/Entidad"
import { SSN } from "./ValueObjects/SSN"
import { FechaNacimiento } from "./ValueObjects/FechaNacimiento"
import { NivelEducativo } from "./ValueObjects/NivelEducativo"
import { EstadoEmpleado } from "./ValueObjects/EstadoEmpleado"
import { Telefono } from "../valueObjectsComunes/Telefono"
import { Direccion } from "../valueObjectsComunes/Direccion"
import { NombreCompleto } from "../valueObjectsComunes/NombreCompleto"
import { ExperienciaDeTrabajo } from "../ExperienciaDeTrabajo/ExperienciaDeTrabajo"
import { Habilidad } from "../Habilidad/Habilidad"
import { Curso } from "../Curso/Curso"
import { Referencia } from "../Referencia/Referencia"
import { Clasificacion } from "./ValueObjects/Clasificacion"

interface EmpeladoPropiedades {
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

export class Empleado extends Entidad<EmpeladoPropiedades> {

    private constructor (propiedades: EmpeladoPropiedades) {
        super(propiedades)
    }

    obtenerSSN(): string {
        return this.propiedades.ssn.obtenerSSN()
    }

    obtenerNombreEmpleado(): NombreCompleto {
        return this.propiedades.nombreCompleto.obtenerNombreCompleto()
    }

    obtenerNroTlf(): Telefono {
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

    // obtenerDireccion(): Direccion {
    //     return this.propiedades.direccion.obtenerDireccion()
    // }

    obtenerEmpleado(): Empleado {
        return this
    }

    public static crear(propiedades: any): Empleado {

        const experiencias: ExperienciaDeTrabajo[] = []
        propiedades.experienciaLaboral.forEach(experiencia => {
            experiencias.push(ExperienciaDeTrabajo.crear(experiencia))
        });

        const habilidades: Habilidad[] = []
        propiedades.habilidades.forEach(habilidad => {
            habilidades.push(Habilidad.crear(habilidad))
        });

        const cursos: Curso[] = []
        propiedades.cursos.forEach(curso => {
            cursos.push(Curso.crear(curso))
        });

        const referencias: Referencia[] = []
        propiedades.referencias.forEach(referencia => {
            referencias.push(Referencia.crear(referencia))
        });
        
        return new Empleado(
            {
                ssn: SSN.crear(propiedades.ssn),
                nombreCompleto: NombreCompleto.crear(
                    propiedades.nombreCompleto.primerNombre,
                    propiedades.nombreCompleto.segundoNombre,
                    propiedades.nombreCompleto.primerApellido,
                    propiedades.nombreCompleto.segundoApellido,
                ),
                numeroTelefono: Telefono.crear(propiedades.nroTlf.codigoPais, propiedades.nroTlf.numeroTelefono),
                fechaNacimiento: FechaNacimiento.crear(propiedades.fechaNacimiento.fechaNacimiento),
                nivelEducativo: NivelEducativo.crear(propiedades.nivelEducativo.nivelEducativo),
                experienciaLaboral: experiencias,
                habilidades: habilidades,
                cursos: cursos,
                referencias: referencias,
                clasificacion: propiedades.clasificacion,
                estadoEmpleado: EstadoEmpleado.crear(propiedades.estadoEmpleado.estado),
                direccion: Direccion.crear(
                    propiedades.direccion.calle1, 
                    propiedades.direccion.calle2, 
                    propiedades.direccion.ciudad, 
                    propiedades.direccion.estado, 
                    propiedades.direccion.codPostal
                )
            }
        )
    }
}
