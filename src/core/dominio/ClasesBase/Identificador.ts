export class Identificador<T> {
    constructor(private valor: T) {
      this.valor = valor;
    }
  
    igual (id?: Identificador<T>): boolean {
      if (id === null || id === undefined) {
        return false;
      }
      if (!(id instanceof this.constructor)) {
        return false;
      }
      return id.aValor() === this.valor;
    }
  
    aString (): string {
      return String(this.valor);
    }
  
    aValor (): T {
      return this.valor;
    }
}