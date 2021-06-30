import { OfertaParaDominio } from "@/core/dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";

export abstract class APIPuerto{
    abstract listarOfertas() : any;
    abstract crearOferta(dato: OfertaParaDominio) : any
    abstract publicarOferta(dato: OfertaParaDominio) : any
}