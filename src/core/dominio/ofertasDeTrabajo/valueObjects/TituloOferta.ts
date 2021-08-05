import {ValueObject} from "../../clasesBase/ValueObject"
import { ExcepcionTituloInvalido } from "../excepciones/ExcepcionTituloInvalido"

interface TituloOfertaPropiedades {
    titulo: string;
}
  
export class TituloOferta extends ValueObject<TituloOfertaPropiedades> {

    private constructor (propiedades: TituloOfertaPropiedades) {
        super(propiedades)
    }

    obtenerTitulo(): string {
        return this.propiedades.titulo
    }

    public static crear(titulo: string): TituloOferta{

        if(titulo.trim() === "" || titulo === null || titulo === undefined){
            throw new ExcepcionTituloInvalido<typeof titulo >(`El titulo: "${titulo}" es inválido, el título no puede estar vacío`, titulo)
        }

        return new TituloOferta({titulo: titulo})
    }
}