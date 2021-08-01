import { APIPuertoCertificaciones } from "../../../aplicacion/api/Certificaciones/APIPuertoCertificaciones";
import { obtenerCertificaciones } from "./../../persistencia/certificaciones";

export class AdaptadorMockCertificaciones extends APIPuertoCertificaciones{

    public listarCertificaciones(): any{
       return obtenerCertificaciones()
    }
}
