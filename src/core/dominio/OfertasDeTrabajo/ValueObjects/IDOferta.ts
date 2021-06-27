import {IDUnicoEntidad} from "../../ClasesBase/IDUnicoEntidad"

export class IDOferta extends IDUnicoEntidad{

    private constructor(id? : string){
        super(id)
    }

    public static crear(id?: string){

        return new IDOferta(id)
    }
}