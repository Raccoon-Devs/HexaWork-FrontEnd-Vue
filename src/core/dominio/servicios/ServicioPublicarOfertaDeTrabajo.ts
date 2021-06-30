import { OfertaParaDominio } from "../OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo } from "../OfertasDeTrabajo/OfertaDeTrabajo";

export class ServicioPublicarOfertaDeTrabajo{
    
    static pasarADominio(ofertaAtributos: OfertaParaDominio): OfertaDeTrabajo{

        return OfertaDeTrabajo.crear(ofertaAtributos)
    }
}