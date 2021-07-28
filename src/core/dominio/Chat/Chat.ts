import { Entidad } from "../ClasesBase/Entidad";
import { RelacionDeTrabajo } from "../RelacionDeTrabajo/RelacionDeTrabajo";
import { IDChat } from "./ValueObjects/IDChat";
import { Mensaje } from "./ValueObjects/Mensaje";

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

    public static crear(propiedades: any): Chat {

        const mensajes: Mensaje[] = []

        propiedades.mensajes.forEach(mensaje => {
            mensajes.push(Mensaje.crear(mensaje))
        });

        return new Chat(
            {
                idChat: IDChat.crear(propiedades.id),
                mensajes: mensajes,
                trabajo: RelacionDeTrabajo.crear(propiedades.trabajo)
            }
        )
    }
}