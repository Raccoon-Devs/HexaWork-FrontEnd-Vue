import { RelacionDeTrabajoParaDominio } from "../../../dominio/relacionDeTrabajo/DTORelacionDeTrabajo";
import { RelacionDeTrabajo } from "../../../dominio/relacionDeTrabajo/RelacionDeTrabajo";
import { APIPuertoRelacionesDeTrabajo } from "../../api/relacionesDeTrabajo/APIPuertoRelacionesDeTrabajo";
import { MappearRelacionDeTrabajo } from "../../mappers/MapperRelacionDeTrabajo";
import { UIPuertoRelacionesPorEvaluar } from "../../ui/relacionesDeTrabajo/UIPuertoRelacionesPorEvaluar";
import { Mapper } from "../../mappers/Mapper";
import { ServicioListarRelacionesPorEvaluar } from "../../../dominio/servicios/relacionesDeTrabajo/ServicioListarRelacionesPorEvaluar";

export class MostrarRelacionesDeTrabajoPorEvaluar extends UIPuertoRelacionesPorEvaluar{

    public listarRelacionesPorEvaluarUI(apiPuerto: APIPuertoRelacionesDeTrabajo): RelacionDeTrabajoParaDominio[] | {statusCode: number, mensaje: string}{
        try{
            const relacionesEnElRepo = this.listarRelacionesPorEvaluarApi(apiPuerto)

            const mapper: Mapper = new MappearRelacionDeTrabajo()
            const relaciones: RelacionDeTrabajoParaDominio[] = []
            relacionesEnElRepo.forEach((relacion : any) => {
                relaciones.push(mapper.paraInfraestructura(relacion))
            })
            return relaciones
        }
        catch(error){
            return {statusCode: 500, mensaje:error.mensaje}
        }
    }

    public listarRelacionesPorEvaluarApi(apiPuerto: APIPuertoRelacionesDeTrabajo): RelacionDeTrabajo[]{

        const relacionesEnElRepo = apiPuerto.listarRelacionesPorEvaluar()
        const relaciones: RelacionDeTrabajo[] = []
        relacionesEnElRepo.forEach((relacion : any) => {
            if (relacion.estadoRelacionDeTrabajo == 1 && relacion.postulacion.empleado.estadoEmpleado == 3) {
                relaciones.push(ServicioListarRelacionesPorEvaluar.pasarADominio(relacion))
            }
        })
        return relaciones
    }

}
