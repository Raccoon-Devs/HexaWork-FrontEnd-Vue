import { InformacionDeContacto } from "@/core/dominio/InformacionDeContacto/InformacionDeContacto";
import {Mapper} from "./Mapper"

export class MappearInformacionDeContacto extends Mapper{

    public paraInfraestructura(contacto: InformacionDeContacto){
        return {
            idInformacionContacto: contacto.obtenerId(),
            nombreCompleto: contacto.obtenerNombre(),
            tituloTrabajo: contacto.obtenerTitulo(),
            numeroTelefono: contacto.obtenerNroTelefono(),
            correo: contacto.obtenerCorreo()
        }
    }
}