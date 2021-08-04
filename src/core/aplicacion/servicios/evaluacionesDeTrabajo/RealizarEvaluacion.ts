import { EvaluacionDeTrabajoParaDominio } from "@/core/dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { EvaluacionDeTrabajo } from "@/core/dominio/evaluacionDeTrabajo/EvaluacionDeTrabajo";
import { APIPuertoEvaluacionDeTrabajo } from "../../api/evaluacionesDeTrabajo/APIPuertoEvaluacionDeTrabajo";
import { MappearEvaluacionDeTrabajo } from "../../mappers/MapperEvaluacionDeTrabajo";
import { UIPuertoEvaluacionDeTrabajo } from "../../ui/evaluacionesDeTrabajo/UIPuertoEvaluacionDeTrabajo";
import { ServicioRealizarEvaluacionDeTrabajo } from "../../../dominio/servicios/evaluacionesDeTrabajo/ServicioRealizarEvaluacionDeTrabajo"
import { Mapper } from "../../mappers/Mapper";

export class RealizarEvaluacion extends UIPuertoEvaluacionDeTrabajo{

    public realizarEvaluacionUI(evaluacion: any, apiPuerto: APIPuertoEvaluacionDeTrabajo): EvaluacionDeTrabajoParaDominio[] | string{
        try{
            //console.log(evaluacion)
            const evaluacionDominio = ServicioRealizarEvaluacionDeTrabajo.pasarADominio(evaluacion)
            
            const evaluacionAPI = this.mappearAInfraestructura(new MappearEvaluacionDeTrabajo(), evaluacionDominio)
            
            return this.realizarEvaluacionAPI(apiPuerto, evaluacionAPI)
        }
        catch(error){
            return error.mensaje
        }
    }

    private mappearAInfraestructura(mapper: Mapper, evaluacion: EvaluacionDeTrabajo){

        return mapper.paraInfraestructura(evaluacion)
    }

    public realizarEvaluacionAPI(apiPuerto: APIPuertoEvaluacionDeTrabajo, evaluacion: EvaluacionDeTrabajoParaDominio): string{
        return apiPuerto.realizarEvaluacionDeTrabajo(evaluacion).mensaje
    }

}
