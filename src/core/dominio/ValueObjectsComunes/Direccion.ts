import {ValueObject} from "../ClasesBase/ValueObject"
import { DireccionPropiedades } from "../Empleador/valueObjects/Direccion"

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

    // obtenerCalle1(): string{
    //     return this.propiedades.calle1
    // }

    // obtenerCalle2(): string{
    //     return this.propiedades.calle2
    // }

    // obtenerCiudad(): string{
    //     return this.propiedades.ciudad
    // }

    // obtenerEstadao(): string{
    //     return this.propiedades.estado
    // }

    // obtenerZip(): string{
    //     return this.propiedades.zip
    // }

    obtenerDireccion(): DireccionPropiedades{
        return this.propiedades
    }

    public static crear(calle1: string, calle2:string, ciudad:string, estado:string, zip:string): Direccion{

        if(calle1 === "" || calle1 === null || calle1 === undefined){
            console.log("calle 1 invalida")
            //throw exception
        }

        if(calle2 === "" || calle2 === null || calle2 === undefined){
            console.log("calle 2 invalida")
            //throw exception
        }

        if(ciudad === "" || ciudad === null || ciudad === undefined){
            console.log("ciudad invalida")
            //throw exception
        }

        if(estado === "" || estado === null || estado === undefined){
            console.log("estado invalido")
            //throw exception
        }

        if(zip === "" || zip === null || zip === undefined){
            console.log("zip invalid")
            //throw exception
        }

        return new Direccion({calle1, calle2, ciudad, estado, zip})
    }
}