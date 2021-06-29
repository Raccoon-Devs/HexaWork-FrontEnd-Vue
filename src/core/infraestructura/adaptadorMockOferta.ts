import { APIPuerto } from "../aplicacion/api/APIPuerto";
import { oferta } from "./persistencia/ofertas";
//import a from "./persistencia/ofertas.json";
//import * as data from "../persistencia/ofertas"


export class AdaptadorMockOferta extends APIPuerto{
    
    listarOfertas():any{
       return oferta
    }
}