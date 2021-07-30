import {IDUnicoEntidad} from "../../ClasesBase/IDUnicoEntidad"

export class IDPostulacion extends IDUnicoEntidad{

    private constructor(id? : string){
        super(id)
    }

    obtenerId(): string | number {
        return this.aValor()
    }

    public static crear(id?: string){

        return new IDPostulacion(id)
    }
}