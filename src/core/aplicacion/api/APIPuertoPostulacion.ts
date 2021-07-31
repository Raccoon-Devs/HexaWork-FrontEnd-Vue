import { PostulacionParaDominio } from "@/core/dominio/Postulacion/DTOPostulacion";

export abstract class APIPuertoPostulacion{
    abstract listarPostulacionesOferta(idOferta: string) : PostulacionParaDominio[];
}