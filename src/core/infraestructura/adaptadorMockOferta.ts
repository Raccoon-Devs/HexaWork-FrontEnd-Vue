import { APIPuerto } from "../aplicacion/api/APIPuerto";
import { OfertaParaDominio } from "../dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { obtenerOfertas, crearOferta, actualizarOferta } from "./persistencia/ofertas";

export class AdaptadorMockOferta extends APIPuerto{

    public listarOfertas():any{
       return JSON.parse(obtenerOfertas()!)
    }

    public crearOferta(ofertaDeTrabajo: OfertaParaDominio){

        return crearOferta(ofertaDeTrabajo)
    }

    public actualizarOferta(ofertaDeTrabajo: OfertaParaDominio) {
        actualizarOferta(ofertaDeTrabajo)
    }
}
