import { APIPuertoCertificaciones } from "../../api/certificaciones/APIPuertoCertificaciones";

export abstract class UIPuertoCertificaciones{
    abstract listarCertificacionesUI(apiPuerto: APIPuertoCertificaciones) : any;
}