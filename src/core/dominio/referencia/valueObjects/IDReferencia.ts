import { IDUnicoEntidad } from "../../ClasesBase/IDUnicoEntidad"

export class IDReferencia extends IDUnicoEntidad {

    private constructor(id? : string){
        super(id)
    }

    public static crear(id?: string){
        return new IDReferencia(id)
    }
}
