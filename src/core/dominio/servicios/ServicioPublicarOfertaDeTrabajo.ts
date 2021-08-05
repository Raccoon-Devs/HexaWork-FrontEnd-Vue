import { OfertaParaDominio } from "../ofertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../ofertasDeTrabajo/OfertaDeTrabajo";
import { PasarADominio } from "./PasarADominio";

export class ServicioPublicarOfertaDeTrabajo {

    static pasarADominio(ofertaAtributos: OfertaParaDominio): OfertaDeTrabajo{

        const datosOferta: OfertaDeTrabajoPropiedades = new PasarADominio().aDominio(ofertaAtributos)
        
        return OfertaDeTrabajo.update(datosOferta)
    }
}
