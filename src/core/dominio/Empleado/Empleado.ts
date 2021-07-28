import { Entidad } from "../ClasesBase/Entidad"
import { SSN } from "./ValueObjects/SSN"
import { FechaNacimiento } from "./ValueObjects/FechaNacimiento"
import { NivelEducativo } from "./ValueObjects/NivelEducativo"
import { EstadoEmpleado } from "./ValueObjects/EstadoEmpleado"
import { Telefono, TelefonoPropiedades } from "../valueObjectsComunes/Telefono"
import { Direccion, DireccionPropiedades } from "../valueObjectsComunes/Direccion"
import { NombreCompleto, NombreCompletoPropiedades } from "../valueObjectsComunes/NombreCompleto"
import { ExperienciaDeTrabajo, ExperienciaDeTrabajoPropiedades } from "../ExperienciaDeTrabajo/ExperienciaDeTrabajo"
import { Habilidad, HabilidadPropiedades } from "../Habilidad/Habilidad"
import { Curso, CursoPropiedades } from "../Curso/Curso"
import { Referencia, ReferenciaPropiedades } from "../Referencia/Referencia"
import { Clasificacion } from "./ValueObjects/Clasificacion"

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
            experiencias.push(ExperienciaDeTrabajo.crear(experiencia.propiedades))
        });

        const habilidades: Habilidad[] = []
        atributos.habilidades.forEach(habilidad => {
            habilidades.push(Habilidad.crear(habilidad.propiedades))
        });

        const cursos: Curso[] = []
        atributos.cursos.forEach(curso => {
            cursos.push(Curso.crear(curso.propiedades))
        });

        const referencias: Referencia[] = []
        atributos.referencias.forEach(referencia => {
            referencias.push(Referencia.crear(referencia.propiedades))
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
                numeroTelefono: Telefono.crear(atributos.nroTlf.codigoPais, atributos.nroTlf.numeroTelefono),
                fechaNacimiento: FechaNacimiento.crear(atributos.fechaNacimiento.fechaNacimiento),
                nivelEducativo: NivelEducativo.crear(atributos.nivelEducativo.nivelEducativo),
                experienciaLaboral: experiencias,
                habilidades: habilidades,
                cursos: cursos,
                referencias: referencias,
                clasificacion: atributos.clasificacion,
                estadoEmpleado: EstadoEmpleado.crear(atributos.estadoEmpleado.estado),
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
