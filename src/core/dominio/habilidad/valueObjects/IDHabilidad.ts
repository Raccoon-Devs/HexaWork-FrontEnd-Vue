import { IDUnicoEntidad } from "../../ClasesBase/IDUnicoEntidad"

export class IDHabilidad extends IDUnicoEntidad {

    private constructor(id? : string){
        super(id)
    }

    public static crear(id?: string){
        return new IDHabilidad(id)
    }
}
