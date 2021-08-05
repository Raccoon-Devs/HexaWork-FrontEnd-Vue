import { EvaluacionDeTrabajoParaDominio } from "../../evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { EvaluacionDeTrabajo } from "../../evaluacionDeTrabajo/EvaluacionDeTrabajo";

export class ServicioRealizarEvaluacionDeTrabajo{
    
    static pasarADominio(evaluacionAtributos: EvaluacionDeTrabajoParaDominio): EvaluacionDeTrabajo{

        return EvaluacionDeTrabajo.crear(evaluacionAtributos)
    }
}