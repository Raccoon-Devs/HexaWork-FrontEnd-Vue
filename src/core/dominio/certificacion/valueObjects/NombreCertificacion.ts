import {ValueObject} from "../../clasesBase/ValueObject"
import { ExcepcionNombreCertificacionInvalido } from "../excepciones/ExcepcionNombreCertificacionInvalido"

interface NombreCertificacionPropiedades {
    nombre: string;
}
  
export class NombreCertificacion extends ValueObject<NombreCertificacionPropiedades> {

    private constructor (propiedades: NombreCertificacionPropiedades) {
        super(propiedades)
    }

    obtenerNombre(): string {
        return this.propiedades.nombre
    }

    public static crear(nombre: string): NombreCertificacion{

        if(nombre.trim() === "" || nombre === null || nombre === undefined){
            throw new ExcepcionNombreCertificacionInvalido<typeof nombre >(`El nombre: "${nombre}" es inválido, el nombre no puede estar vacío`, nombre)
        }

        return new NombreCertificacion({nombre})
    }
}