interface ValueObjectPropiedades {
    [llave: string]: any;
  }
  
  export abstract class ValueObject<T extends ValueObjectPropiedades> {
    public readonly propiedades: T;
  
    constructor (propiedades: T) {
      this.propiedades = Object.freeze(propiedades);
    }
  
    public igual (valueObject?: ValueObject<T>) : boolean {
      if (valueObject === null || valueObject === undefined) {
        return false;
      }
      if (valueObject.propiedades === undefined) {
        return false;
      }
      return JSON.stringify(this.propiedades) === JSON.stringify(valueObject.propiedades);
    }
  }