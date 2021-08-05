import { OfertaParaDominio } from "@/core/dominio/ofertasDeTrabajo/DTOOfertaDeTrabajo";
import { APIPuerto } from "../api/APIPuerto";

export abstract class UIPuertoPublicarOferta {
    abstract publicarOfertaUI(oferta: any, apiPuerto: APIPuerto) : any;
}
