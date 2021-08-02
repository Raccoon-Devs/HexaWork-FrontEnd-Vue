import { Referencia } from "@/core/dominio/referencia/Referencia";
import {Mapper} from "./Mapper"

export class MappearReferencia extends Mapper{

    public paraInfraestructura(referencia: Referencia){
        return {
            idReferencia: referencia.obtenerId(),
            nombreCompleto: referencia.obtenerNombre(),
            tituloTrabajo: referencia.obtenerTitulo(),
            nombreCompania: referencia.obtenerNombreCompania(),
            numeroTelefono: referencia.obtenerNroTelefono(),
            correo: referencia.obtenerCorreo()
        } 
    }
}