import { Excepcion } from "../../clasesBase/Excepcion"

export class ExcepcionCategoriaDeTrabajoInvalido<T> extends Excepcion<T> {
    public readonly mensaje: string
    constructor(mensaje: string, dato: T) {
      super(mensaje, dato);
      this.mensaje = mensaje
    }
}
