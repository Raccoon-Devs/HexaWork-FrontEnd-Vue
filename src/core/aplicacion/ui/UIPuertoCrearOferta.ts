import { OfertaParaDominio } from "@/core/dominio/ofertasDeTrabajo/DTOOfertaDeTrabajo";
import { APIPuerto } from "../api/APIPuerto";

export abstract class UIPuertoCrearOferta{
    abstract crearOfertaUI(oferta: any, apiPuerto: APIPuerto) : any;
}
