import {ValueObject} from "../../ClasesBase/ValueObject"

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
            console.log("La descripción no puede estar vacía")
        }

        return new Descripcion({descripcion})
    }
}