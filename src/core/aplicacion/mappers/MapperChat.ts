import { Chat } from "@/core/dominio/chat/Chat";
import {Mapper} from "./Mapper"
import { MappearRelacionDeTrabajo } from "./MapperRelacionDeTrabajo";

export class MappearChat extends Mapper{

    public paraInfraestructura(chat: Chat): any{
        return {
            idChat: chat.obtenerId(),
            mensajes: chat.obtenerMensajes(),
            trabajo: new MappearRelacionDeTrabajo().paraInfraestructura(chat.obtenerTrabajo())
        }
    }
}