import {ValueObject} from "../../ClasesBase/ValueObject"

export interface RequerimientosEspecialesPropiedades {
    requerimientos: string;
}
  
export class RequerimientosEspecialesOfertaDeTrabajo extends ValueObject<RequerimientosEspecialesPropiedades> {

    private constructor (propiedades: RequerimientosEspecialesPropiedades) {
        super(propiedades)
    }

    obtenerRequerimientos(): string {
        return this.propiedades.requerimientos
    }

    public static crear(requerimientos: string): RequerimientosEspecialesOfertaDeTrabajo{

        if(requerimientos.trim() === "" || requerimientos === null || requerimientos === undefined){
            //throw new ExcepcionTituloInvalido<typeof titulo >(`El titulo: "${titulo}" es inválido, el título no puede estar vacío`, titulo)
            console.log("Error en los requerimientos especiales")
        }

        return new RequerimientosEspecialesOfertaDeTrabajo({requerimientos})
    }
}