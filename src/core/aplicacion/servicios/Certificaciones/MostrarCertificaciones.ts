import { Mapper } from "../../mappers/Mapper";
import { UIPuertoCertificaciones } from "../../ui/Certificaciones/UIPuertoCertificaciones";
import { APIPuertoCertificaciones } from "../../api/Certificaciones/APIPuertoCertificaciones";
import { Certificacion } from "@/core/dominio/Certificacion/Certificacion";
import { CertificacionParaDominio } from "@/core/dominio/Certificacion/DTOCertificacion";
import { MappearCertificacion } from "../../mappers/MapperCertificacion";
import { ServicioListarCertificaciones } from "@/core/dominio/servicios/Certificaciones/ServicioListarCertificaciones";

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