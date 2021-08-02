import { OfertaParaDominio } from "@/core/dominio/ofertasDeTrabajo/DTOOfertaDeTrabajo";
import { APIPuertoPostulaciones } from "../../api/postulaciones/APIPuertoPostulaciones";

export abstract class UIPuertoPostulaciones{
    abstract listarPostulacionesUI(apiPuerto: APIPuertoPostulaciones, oferta: OfertaParaDominio) : any;
}