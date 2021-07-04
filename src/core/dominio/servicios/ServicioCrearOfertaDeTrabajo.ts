import { OfertaParaDominio } from "../OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo } from "../OfertasDeTrabajo/OfertaDeTrabajo";

export class ServicioCrearOfertaDeTrabajo{
    
    static pasarADominio(ofertaAtributos: OfertaParaDominio): OfertaDeTrabajo{

        return OfertaDeTrabajo.crear(ofertaAtributos)
    }
}