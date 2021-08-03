import { Habilidad } from "@/core/dominio/habilidad/Habilidad";
import { APIPuerto } from "../../../aplicacion/api/APIPuerto";
import { OfertaParaDominio } from "../../../dominio/ofertasDeTrabajo/DTOOfertaDeTrabajo";
import { obtenerOfertas, crearOferta, actualizarOferta } from "./../../persistencia/ofertas";
import { obtenerOfertasMock } from "./../../persistencia/ofertasMock";

export class AdaptadorMockOferta extends APIPuerto {

    public listarOfertas():any{
       return JSON.parse(obtenerOfertas()!)
    }

    public crearOferta(ofertaDeTrabajo: OfertaParaDominio){

        const ofertaApi: any = {
            ...ofertaDeTrabajo
        }
        
        return crearOferta(ofertaApi)
    }

    public actualizarOferta(ofertaDeTrabajo: OfertaParaDominio) {
        actualizarOferta(ofertaDeTrabajo)
    }

    public listarOfertasMock(): any {
        return obtenerOfertasMock()
    }
}
