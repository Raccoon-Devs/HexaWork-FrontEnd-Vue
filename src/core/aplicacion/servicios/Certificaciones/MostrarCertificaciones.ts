import { Mapper } from "../../mappers/Mapper";
import { UIPuertoCertificaciones } from "../../ui/certificaciones/UIPuertoCertificaciones";
import { APIPuertoCertificaciones } from "../../api/certificaciones/APIPuertoCertificaciones";
import { Certificacion } from "../../../dominio/certificacion/Certificacion";
import { CertificacionParaDominio } from "../../../dominio/certificacion/DTOCertificacion";
import { MappearCertificacion } from "../../mappers/MapperCertificacion";
import { ServicioListarCertificaciones } from "../../../dominio/servicios/certificaciones/ServicioListarCertificaciones";

export class MostrarCertificaciones extends UIPuertoCertificaciones{

    public listarCertificacionesUI(apiPuerto: APIPuertoCertificaciones): CertificacionParaDominio[] | {statusCode: number, mensaje: string}{
        try{
            const certificacionesEnElRepo = this.listarCertificacionesApi(apiPuerto)
            const mapper: Mapper = new MappearCertificacion()
            const certificaciones: CertificacionParaDominio[] = []
            certificacionesEnElRepo.forEach((certificacion : any) => {
                certificaciones.push(mapper.paraInfraestructura(certificacion))
            })
            return certificaciones
        }
        catch(error){
            return {statusCode: 500, mensaje:error.mensaje}
        }
    }

    public listarCertificacionesApi(apiPuerto: APIPuertoCertificaciones): Certificacion[]{
        const certificacionesEnElRepo = apiPuerto.listarCertificaciones()
        const certificaciones: any[] = []
        certificacionesEnElRepo.forEach((certificacion : any) => {
            certificaciones.push(ServicioListarCertificaciones.pasarADominio(certificacion))
        })
        return certificaciones
    }

}
