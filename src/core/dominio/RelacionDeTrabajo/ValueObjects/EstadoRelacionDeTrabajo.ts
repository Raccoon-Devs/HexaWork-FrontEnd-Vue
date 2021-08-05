import { ValueObject } from "../../clasesBase/ValueObject"
import { ExcepcionEstadoRelacionInvalida } from "../excepciones/ExcepcionEstadoDeRelacionInvalida"

interface EstadoRelacionDeTrabajoPropiedades {
    estadoRelacionDeTrabajo: number
}

export class EstadoRelacionDeTrabajo extends ValueObject<EstadoRelacionDeTrabajoPropiedades> {

    private constructor (propiedades: EstadoRelacionDeTrabajoPropiedades) {
        super(propiedades)
    }

    obtenerEstadoRelacionDeTrabajo(): number {
        return this.propiedades.estadoRelacionDeTrabajo
    }

    public static crear(estadoRelacionDeTrabajo: number): EstadoRelacionDeTrabajo {
        
        if(estadoRelacionDeTrabajo === null || estadoRelacionDeTrabajo === undefined){
            throw new ExcepcionEstadoRelacionInvalida<typeof estadoRelacionDeTrabajo >(`El estado: ${estadoRelacionDeTrabajo} no puede estar vacio`, estadoRelacionDeTrabajo)
        }

        if(!(estadoRelacionDeTrabajo in [0, 1])){
            throw new ExcepcionEstadoRelacionInvalida<typeof estadoRelacionDeTrabajo >(`El estado: ${estadoRelacionDeTrabajo} de la relación debe ser: 0 (Activa), 1 (Finalizada)`, estadoRelacionDeTrabajo)
        }

        return new EstadoRelacionDeTrabajo({estadoRelacionDeTrabajo})
    }
}
