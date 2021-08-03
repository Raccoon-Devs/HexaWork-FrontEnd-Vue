import { OfertaParaDominio } from "../ofertasDeTrabajo/DTOOfertaDeTrabajo";
import { OfertaDeTrabajo, OfertaDeTrabajoPropiedades } from "../ofertasDeTrabajo/OfertaDeTrabajo";
import { PasarADominio } from "./pasarADominio";

export class ServicioListarOfertasDeTrabajo{

    static pasarADominio(ofertaAtributos: OfertaParaDominio): OfertaDeTrabajo{

        const datosOferta: OfertaDeTrabajoPropiedades = new PasarADominio().aDominio(ofertaAtributos)

        return OfertaDeTrabajo.crear(datosOferta)
    }
}
