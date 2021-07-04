import { IDUnicoEntidad } from './IDUnicoEntidad';

const esEntidad = (v: any): v is Entidad<any> => {
  return v instanceof Entidad;
};

export abstract class Entidad<T> {
  protected readonly _id: IDUnicoEntidad;
  public readonly propiedades: T;

  constructor (propiedades: T, id?: IDUnicoEntidad) {
    this._id = id ? id : new IDUnicoEntidad();
    this.propiedades = propiedades;
  }

  public igual (object?: Entidad<T>) : boolean {

    if (object == null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!esEntidad(object)) {
      return false;
    }

    return this._id.igual(object._id);
  }
}