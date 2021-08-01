import { Empleador } from "@/core/dominio/empleador/Empleador";
import {Mapper} from "./Mapper"
import { MappearHabilidad } from "./MapperHabilidad";
import { MappearInformacionDeContacto } from "./MapperInformacionDeContacto";

export class MappearEmpleador extends Mapper{

    public paraInfraestructura(empleador: Empleador){

        const contactos: any[] = []

        empleador.obtenerInformacionDeContacto().forEach(contacto => {
            contactos.push(new MappearInformacionDeContacto().paraInfraestructura(contacto))
        });

        const habilidades: any[] = []

        empleador.obtenerHabilidades().forEach(habilidad => {
            habilidades.push(new MappearHabilidad().paraInfraestructura(habilidad))
        });

        return {
            idEmpleador: empleador.obtenerId(),
            nombreCompania: empleador.obtenerNombreCompania(),
            direccion: empleador.obtenerDireccion(),
            contactos: contactos,
            logo: empleador.obtenerLogo(),
            habilidades: habilidades,
            requerimientosEspeciales: empleador.obtenerRequerimientosEspeciales(),
            estadoEmpleador: empleador.obtenerEstadoEmpleador()
        }
    }
}