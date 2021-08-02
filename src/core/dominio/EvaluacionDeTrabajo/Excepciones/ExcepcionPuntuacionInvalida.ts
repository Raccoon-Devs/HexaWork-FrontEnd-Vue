import { Excepcion } from "../../clasesBase/Excepcion"

export class ExcepcionPuntuacionInvalida<T> extends Excepcion<T> {
    public readonly mensaje: string
    constructor(mensaje: string, dato: T) {
      super(mensaje, dato);
      this.mensaje = mensaje
    }
}
