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

    public static crear(propiedades: RequerimientosEspecialesPropiedades): RequerimientosEspecialesOfertaDeTrabajo{

        if(propiedades.requerimientos.trim() === "" || propiedades.requerimientos === null || propiedades.requerimientos === undefined){
            //throw new ExcepcionTituloInvalido<typeof titulo >(`El titulo: "${titulo}" es inválido, el título no puede estar vacío`, titulo)
        }

        return new RequerimientosEspecialesOfertaDeTrabajo(propiedades)
    }
}