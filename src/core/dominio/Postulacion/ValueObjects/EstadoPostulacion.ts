import {ValueObject} from "../../clasesBase/ValueObject"
import { ExcepcionEstadoInvalido } from "../excepciones/ExcepcionEstadoInvalido"

interface EstadoPostulacionPropiedades {
    estado: number,
}
  
export class EstadoPostulacion extends ValueObject<EstadoPostulacionPropiedades> {

    private constructor (propiedades: EstadoPostulacionPropiedades) {
        super(propiedades)
    }

    obtenerEstado(): number{
        return this.propiedades.estado
    }

    public static crear(estado: number): EstadoPostulacion{

        if(estado === null || estado === undefined){
            throw new ExcepcionEstadoInvalido<typeof estado >(`El estado: ${estado} no puede estar vacio`, estado)
        }

        if(!(estado in [0, 1, 2])){
            throw new ExcepcionEstadoInvalido<typeof estado >(`El estado: ${estado} de la postulación debe ser: 0 (Pendiente), 1 (Aceptada), 2 (Rechazada)`, estado)
        }

        return new EstadoPostulacion({estado})
    }
}