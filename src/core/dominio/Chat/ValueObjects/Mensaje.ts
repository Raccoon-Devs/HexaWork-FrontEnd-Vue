import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionMensajeInvalido } from "../Excepciones/ExcepcionMensajeInvalido"

interface MensajePropiedades {
    mensaje: string;
}
  
export class Mensaje extends ValueObject<MensajePropiedades> {

    private constructor (propiedades: MensajePropiedades) {
        super(propiedades)
    }

    obtenerMensaje(): string {
        return this.propiedades.mensaje
    }

    public static crear(mensaje: string): Mensaje{

        if(mensaje.trim() === "" || mensaje === null || mensaje === undefined){
            throw new ExcepcionMensajeInvalido<typeof mensaje >(`El mensaje: "${mensaje}" es inválido, el mensaje no puede estar vacío`, mensaje)
        }

        return new Mensaje({mensaje})
    }
}