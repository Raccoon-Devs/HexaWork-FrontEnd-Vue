import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";

export abstract class UIPuertoCrearOferta{
    abstract crearOfertaUI(oferta: OfertaParaDominio) : any;
}