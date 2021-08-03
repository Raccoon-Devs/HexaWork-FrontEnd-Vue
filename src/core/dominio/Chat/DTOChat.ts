import { RelacionDeTrabajo, RelacionDeTrabajoPropiedades } from "../relacionDeTrabajo/RelacionDeTrabajo";
import { ChatPropiedades } from "./Chat";
import { Mensaje } from "./valueObjects/Mensaje";

type ChatParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends Mensaje[]? string[]
    : Type[Property] extends RelacionDeTrabajo? RelacionDeTrabajoPropiedades
    : string;
}

export type ChatParaDominio = ChatParaDominioMap<ChatPropiedades>