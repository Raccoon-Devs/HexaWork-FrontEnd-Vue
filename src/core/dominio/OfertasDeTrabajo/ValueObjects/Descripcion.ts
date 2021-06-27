import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionDescripcionInvalida } from "../Excepciones/ExcepcionDescripcionInvalida"

interface DescripcionPropiedades {
    descripcion: string
}
  
export class Descripcion extends ValueObject<DescripcionPropiedades> {

    private constructor (propiedades: DescripcionPropiedades) {
        super(propiedades)
    }

    obtenerDescripcion(): string {
        return this.propiedades.descripcion
    }

    public static crear(descripcion: string): Descripcion{

        if(descripcion === "" || descripcion === null || descripcion === undefined){
            throw new ExcepcionDescripcionInvalida<typeof descripcion >(`La descripcion: ${descripcion} es inválida, la descripcion no puede estar vacía`, descripcion)
        }

        return new Descripcion({descripcion})
    }
}