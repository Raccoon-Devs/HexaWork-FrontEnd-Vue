export abstract class Excepcion<T> extends Error {
    public readonly mensaje: string
    public readonly dato: T
    constructor(mensaje: string, dato: T) {
      super(mensaje);
      this.mensaje = mensaje
      this.dato = dato
    }
  }