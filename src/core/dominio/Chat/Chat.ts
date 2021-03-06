import { Entidad } from "../clasesBase/Entidad";
import { RelacionDeTrabajo, RelacionDeTrabajoPropiedades } from "../relacionDeTrabajo/RelacionDeTrabajo";
import { IDChat } from "./valueObjects/IDChat";
import { Mensaje } from "./valueObjects/Mensaje";

export interface ChatPropiedades{
    idChat: IDChat,
    mensajes: Mensaje[],
    trabajo: RelacionDeTrabajo
}

export class Chat extends Entidad<ChatPropiedades>{

    private constructor (propiedades: ChatPropiedades) {
       super(propiedades, propiedades.idChat)
    }

    obtenerId(): string | number {
        return this.propiedades.idChat.obtenerId()
    }

    obtenerMensajes(): string[]{

        const mensajes: string[] = []

        this.propiedades.mensajes.forEach(mensaje => {
            mensajes.push(mensaje.obtenerMensaje())
        });

        return mensajes
    }

    obtenerTrabajo(): RelacionDeTrabajo{
        return this.propiedades.trabajo.obtenerRelacionDeTrabajo()
    }

    obtenerChat(): Chat{
        return this
    }

    public static crear(atributos: any): Chat {

        const mensajes: Mensaje[] = []

        atributos.mensajes.forEach(mensaje => {
            mensajes.push(Mensaje.crear(mensaje))
        });

        return new Chat(
            {
                idChat: IDChat.crear(atributos.idChat),
                mensajes: mensajes,
                trabajo: RelacionDeTrabajo.crear(atributos.trabajo)
            }
        )
    }
}