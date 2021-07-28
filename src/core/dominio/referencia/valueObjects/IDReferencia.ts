import { IDUnicoEntidad } from "../../ClasesBase/IDUnicoEntidad"

export class IDReferencia extends IDUnicoEntidad {

    private constructor(id? : string){
        super(id)
    }

    obtenerId(): string | number {
        return this.aValor()
    }

    public static crear(id?: string){
        return new IDReferencia(id)
    }
}
