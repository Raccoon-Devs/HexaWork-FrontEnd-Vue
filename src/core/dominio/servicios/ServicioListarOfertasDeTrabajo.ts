import { OfertaParaDominio } from "../OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../OfertasDeTrabajo/OfertaDeTrabajo";
import { PasarADominio } from "./PasarADominio";

export class ServicioListarOfertasDeTrabajo{
    
    static pasarADominio(ofertaAtributos: OfertaParaDominio): OfertaDeTrabajo{

        const datosOferta: OfertaDeTrabajoPropiedades = new PasarADominio().aDominio(ofertaAtributos)

        return OfertaDeTrabajo.crear(datosOferta)
    }
}
