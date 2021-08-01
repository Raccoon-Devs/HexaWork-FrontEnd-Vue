import { APIPuerto } from "../../../aplicacion/api/APIPuerto";
import { OfertaParaDominio } from "../../../dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { actualizarOferta, obtenerOfertas, crearOferta } from "./../../persistencia/ofertasTI";

export class AdaptadorTIOferta extends APIPuerto{

    public listarOfertas():any{
       return obtenerOfertas()
    }

    public crearOferta(ofertaDeTrabajo: OfertaParaDominio){
        return crearOferta(ofertaDeTrabajo)
    }

    public actualizarOferta(ofertaDeTrabajo: OfertaParaDominio){
        return actualizarOferta(ofertaDeTrabajo)
    }
}
