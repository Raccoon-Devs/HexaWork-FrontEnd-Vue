import {Excepcion} from "../../clasesBase/Excepcion"

export class ExcepcionVacanteInvalida<T> extends Excepcion<T> {
    public readonly mensaje: string
    constructor(mensaje: string, dato: T) {
      super(mensaje, dato);
      this.mensaje = mensaje
    }
}