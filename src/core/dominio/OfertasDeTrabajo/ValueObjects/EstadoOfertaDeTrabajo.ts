import {ValueObject} from "../../ClasesBase/ValueObject"

interface EstadoOfertaDeTrabajoPropiedades {
    estado: number,
}
  
export class EstadoOfertaDeTrabajo extends ValueObject<EstadoOfertaDeTrabajoPropiedades> {

    private constructor (propiedades: EstadoOfertaDeTrabajoPropiedades) {
        super(propiedades)
    }

    obtenerEstado(): number{
        return this.propiedades.estado
    }

    public static crear(estado: number): EstadoOfertaDeTrabajo{

        if(estado === null || estado === undefined){
            console.log("estado inválido")
        }

        if(!(estado in [0, 1, 2, 3, 4, 5, 6])){
            console.log("el estado de la oferta es debe ser: 0 (creado), 1 (publicado), 2 (postulaciones cerradas)," +
            "3 (empleado asignado), 4 (en progreso), 5 (finalizada), 6 (cancelada)")
        }

        return new EstadoOfertaDeTrabajo({estado})
    }
}