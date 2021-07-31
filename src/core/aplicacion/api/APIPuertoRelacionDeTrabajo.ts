import { RelacionDeTrabajoParaDominio } from "@/core/dominio/RelacionDeTrabajo/DTORelacionDeTrabajo";

export abstract class APIPuertoRelacionDeTrabajo{
    abstract listarRelacionesDeTrabajo() : any;
}