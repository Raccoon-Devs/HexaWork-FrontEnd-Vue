import { APIPuerto } from "../aplicacion/api/APIPuerto";
import { OfertaParaDominio } from "../dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { obtenerOfertas, crearOferta, actualizarOferta } from "./persistencia/ofertas";

export class AdaptadorMockOferta extends APIPuerto{

    public listarOfertas():any{
       return obtenerOfertas()
    }

    public crearOferta(ofertaDeTrabajo: OfertaParaDominio){
        crearOferta(ofertaDeTrabajo)
    }

    public actualizarOferta(ofertaDeTrabajo: OfertaParaDominio) {
        actualizarOferta(ofertaDeTrabajo)
    }
}
