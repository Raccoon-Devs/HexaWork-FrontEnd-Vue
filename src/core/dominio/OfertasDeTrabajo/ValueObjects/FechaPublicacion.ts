import {ValueObject} from "../../ClasesBase/ValueObject"

interface FechaPublicacionPropiedades {
    fechaPublicacion?: Date
}
  
export class FechaPublicacion extends ValueObject<FechaPublicacionPropiedades> {

    private constructor (propiedades: FechaPublicacionPropiedades) {
        super(propiedades)
    }

    obtenerFechaPublicacion(): Date | string{
        return this.propiedades.fechaPublicacion? this.propiedades.fechaPublicacion : "No hay fecha" 
    }

    public static crear(fechaPublicacion?: Date): FechaPublicacion{

        return new FechaPublicacion({fechaPublicacion})
    }
}