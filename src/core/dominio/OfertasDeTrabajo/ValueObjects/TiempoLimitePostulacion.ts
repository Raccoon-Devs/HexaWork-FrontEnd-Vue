import {ValueObject} from "../../ClasesBase/ValueObject"

export interface TiempoLimitePostulacionPropiedades {
    fechaLimite: Date
}
  
export class TiempoLimitePostulacion extends ValueObject<TiempoLimitePostulacionPropiedades> {

    private constructor (propiedades: TiempoLimitePostulacionPropiedades) {
        super(propiedades)
    }

    obtenerFechaLimite(): Date {
        return this.propiedades.fechaLimite
    }

    public static crear(fechaLimite: Date): TiempoLimitePostulacion{

        return new TiempoLimitePostulacion({fechaLimite})
    }
}