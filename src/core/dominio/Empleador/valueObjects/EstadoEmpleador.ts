import { ValueObject } from "../../ClasesBase/ValueObject"
import { ExcepcionEstadoEmpleadorInvalido } from "../Excepciones/ExcepcionEstadoEmpleadorInvalido"

interface EstadoEmpleadorPropiedades {
    estado: number
}

export class EstadoEmpleador extends ValueObject<EstadoEmpleadorPropiedades> {

    private constructor (propiedades: EstadoEmpleadorPropiedades) {
        super(propiedades)
    }

    obtenerEstadoEmpleador(): number {
        return this.propiedades.estado
    }

    public static crear(estado: number): EstadoEmpleador {
        
        if(estado === null || estado === undefined){
            throw new ExcepcionEstadoEmpleadorInvalido<typeof estado >(`El estado: ${estado} no puede estar vacio`, estado)
        }

        if(!(estado in [0, 1])){
            throw new ExcepcionEstadoEmpleadorInvalido<typeof estado >(`El estado: ${estado} del empleador debe ser: 0 (Activo), 1 (Suspendido)`, estado)
        }

        return new EstadoEmpleador({estado})
    }
}
