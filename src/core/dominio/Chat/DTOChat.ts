import { RelacionDeTrabajo, RelacionDeTrabajoPropiedades } from "../RelacionDeTrabajo/RelacionDeTrabajo";
import { ChatPropiedades } from "./Chat";
import { Mensaje } from "./ValueObjects/Mensaje";

type ChatParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends Mensaje[]? string[]
    : Type[Property] extends RelacionDeTrabajo? RelacionDeTrabajoPropiedades
    : string;
}

export type ChatParaDominio = ChatParaDominioMap<ChatPropiedades>