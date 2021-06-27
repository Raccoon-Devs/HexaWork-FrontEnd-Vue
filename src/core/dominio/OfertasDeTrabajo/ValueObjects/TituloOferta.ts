import {ValueObject} from "../../ClasesBase/ValueObject"

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

        if(titulo === "" || titulo === null || titulo === undefined){
            console.log("Error")
        }

        return new TituloOferta({titulo: titulo})
    }
}