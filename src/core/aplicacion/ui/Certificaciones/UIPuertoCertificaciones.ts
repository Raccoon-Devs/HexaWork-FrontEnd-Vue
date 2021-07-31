import { APIPuertoCertificaciones } from "../../api/Certificaciones/APIPuertoCertificaciones";

export abstract class UIPuertoCertificaciones{
    abstract listarCertificacionesUI(apiPuerto: APIPuertoCertificaciones) : any;
}