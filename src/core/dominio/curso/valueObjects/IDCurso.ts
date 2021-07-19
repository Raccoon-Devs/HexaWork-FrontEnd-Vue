import { IDUnicoEntidad } from "../../ClasesBase/IDUnicoEntidad"

export class IDCurso extends IDUnicoEntidad {

    private constructor(id? : string){
        super(id)
    }

    public static crear(id?: string){
        return new IDCurso(id)
    }
}
