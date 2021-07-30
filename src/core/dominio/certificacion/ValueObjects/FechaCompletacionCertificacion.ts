import {ValueObject} from "../../ClasesBase/ValueObject"

export interface FechaCompletacionCertificacionPropiedades {
    fecha: Date
}
  
export class FechaCompletacionCertificacion extends ValueObject<FechaCompletacionCertificacionPropiedades> {

    private constructor (propiedades: FechaCompletacionCertificacionPropiedades) {
        super(propiedades)
    }

    obtenerFechaCompletacion(): Date {
        return this.propiedades.fecha
    }

    public static crear(fecha: Date): FechaCompletacionCertificacion{
        return new FechaCompletacionCertificacion({fecha})
    }
}