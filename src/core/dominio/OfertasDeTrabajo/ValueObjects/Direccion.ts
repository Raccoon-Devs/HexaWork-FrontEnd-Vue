import {ValueObject} from "../../ClasesBase/ValueObject"
import { ExcepcionDireccionInvalida } from "../Excepciones/ExcepcionDireccionInvalida"

interface DireccionOfertaPropiedades {
    calle1: string
    calle2: string
    ciudad: string
    estado: string
    zip: string
}
  
export class Direccion extends ValueObject<DireccionOfertaPropiedades> {

    private constructor (propiedades: DireccionOfertaPropiedades){
        super(propiedades)
    }

    obtenerCalle1(): string{
        return this.propiedades.calle1
    }

    obtenerCalle2(): string{
        return this.propiedades.calle2
    }

    obtenerCiudad(): string{
        return this.propiedades.ciudad
    }

    obtenerEstado(): string{
        return this.propiedades.estado
    }

    obtenerZip(): string{
        return this.propiedades.zip
    }

    obtenerDireccion(): DireccionOfertaPropiedades{
        return this.propiedades
    }

    public static crear(calle1: string, calle2:string, ciudad:string, estado:string, zip:string): Direccion{

        if(calle1 === "" || calle1 === null || calle1 === undefined){
            throw new ExcepcionDireccionInvalida<typeof calle1 >(`La calle1: ${calle1} es inválida, no puede estar vacía`, calle1)
        }

        if(calle2 === "" || calle2 === null || calle2 === undefined){
            throw new ExcepcionDireccionInvalida<typeof calle1 >(`La calle2: ${calle2} es inválida, no puede estar vacía`, calle2)
        }

        if(ciudad === "" || ciudad === null || ciudad === undefined){
            throw new ExcepcionDireccionInvalida<typeof ciudad >(`La ciudad: ${ciudad} es inválida, no puede estar vacía`, ciudad)
        }

        if(estado === "" || estado === null || estado === undefined){
            throw new ExcepcionDireccionInvalida<typeof estado >(`El estadoooooooooop: ${estado} es inválido, no puede estar vacío`, estado)
        }

        if(zip === "" || zip === null || zip === undefined){
            throw new ExcepcionDireccionInvalida<typeof zip >(`El zip: ${zip} es inválido, no puede estar vacío`, zip)
        }

        return new Direccion({calle1, calle2, ciudad, estado, zip})
    }
}