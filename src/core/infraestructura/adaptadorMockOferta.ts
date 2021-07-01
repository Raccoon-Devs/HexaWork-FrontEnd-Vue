import { APIPuerto } from "../aplicacion/api/APIPuerto";
import { OfertaParaDominio } from "../dominio/OfertasDeTrabajo/DTOOfertaDeTrabajo";
import { obtenerOfertas, crearOferta } from "./persistencia/ofertas";

export class AdaptadorMockOferta extends APIPuerto{
    
    public listarOfertas():any{
       return obtenerOfertas()
    }

    public crearOferta(ofertaDeTrabajo: OfertaParaDominio){

        return crearOferta(ofertaDeTrabajo)
    }
}