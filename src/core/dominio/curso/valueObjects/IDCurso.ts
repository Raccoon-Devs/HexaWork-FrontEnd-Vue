import { IDUnicoEntidad } from "../../clasesBase/IDUnicoEntidad"

export class IDCurso extends IDUnicoEntidad {

    private constructor(id? : string){
        super(id)
    }

    obtenerId(): string | number {
        return this.aValor()
    }

    public static crear(id?: string){
        return new IDCurso(id)
    }
}
