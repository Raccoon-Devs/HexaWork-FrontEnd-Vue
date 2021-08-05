import { PostulacionParaDominio } from "../../postulacion/DTOPostulacion";
import { Postulacion } from "../../postulacion/Postulacion";

export class ServicioListarPostulaciones{
    
    static pasarADominio(postulacionAtributos: PostulacionParaDominio): Postulacion{
        return Postulacion.crear(postulacionAtributos)
    }
}
