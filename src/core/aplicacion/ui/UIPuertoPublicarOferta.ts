import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";

export abstract class UIPuertoPublicarOferta{
    abstract publicarOfertaUI(oferta: OfertaParaDominio) : any;
}