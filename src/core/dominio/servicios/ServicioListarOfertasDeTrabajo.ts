import { OfertaParaDominio } from "../ofertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../ofertasDeTrabajo/OfertaDeTrabajo";
import { PasarADominio } from "./PasarADominio";

export class ServicioListarOfertasDeTrabajo{

    static pasarADominio(ofertaAtributos: OfertaParaDominio): OfertaDeTrabajo{
        const datosOferta: OfertaDeTrabajoPropiedades = new PasarADominio().aDominio(ofertaAtributos)
        const oferta = OfertaDeTrabajo.crear(datosOferta)
        return OfertaDeTrabajo.crear(datosOferta)
    }
}
