import { Empleado } from "@/core/dominio/empleado/Empleado"
import {Mapper} from "./Mapper"
import { MappearCurso } from "./MapperCurso";
import { MappearExperienciaDeTrabajo } from "./MapperExperienciaDeTrabajo";
import { MappearHabilidad } from "./MapperHabilidad";
import { MappearReferencia } from "./MapperReferencia";

export class MappearEmpleado extends Mapper{

    public paraInfraestructura(empleado: Empleado): any{

        const experienciaLaboral: any[] = []

        empleado.obtenerExperienciaLaboral().forEach(experiencia => {
            experienciaLaboral.push(new MappearExperienciaDeTrabajo().paraInfraestructura(experiencia))
        });

        const habilidades: any[] = []

        empleado.obtenerHabilidades().forEach(habilidad => {
            habilidades.push(new MappearHabilidad().paraInfraestructura(habilidad))
        });

        const cursos: any[] = []

        empleado.obtenerCursos().forEach(curso => {
            cursos.push(new MappearCurso().paraInfraestructura(curso))
        });

        const referencias: any[] = []

        empleado.obtenerReferencias().forEach(referencia => {
            referencias.push(new MappearReferencia().paraInfraestructura(referencia))
        });

        return {
            ssn: empleado.obtenerSSN(),
            nombreCompleto: empleado.obtenerNombreEmpleado(),
            numeroTelefono: empleado.obtenerNroTlf(),
            fechaNacimiento: empleado.obtenerFechaNacimiento(),
            nivelEducativo: empleado.obetnerNivelEducativo(),
            experienciaLaboral: experienciaLaboral,
            habilidades: habilidades,
            cursos: cursos,
            referencias: referencias,
            clasificacion: empleado.obtenerClasifiacion(),
            estadoEmpleado: empleado.obtenerEstadoEmpleado(),
            direccion: empleado.obtenerDireccion()
        }
    }
}