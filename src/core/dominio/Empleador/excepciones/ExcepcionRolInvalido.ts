import { Excepcion } from "../../ClasesBase/Excepcion"

export class ExcepcionRolInvalido<T> extends Excepcion<T> {
    public readonly mensaje: string
    constructor(mensaje: string, dato: T) {
      super(mensaje, dato);
      this.mensaje = mensaje
    }
}
