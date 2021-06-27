import { IDUnicoEntidad } from "../../ClasesBase/IDUnicoEntidad"

export class IDEmpleador extends IDUnicoEntidad {

    private constructor(id? : string){
        super(id)
    }

    public static crear(id?: string){
        return new IDEmpleador(id)
    }
}
