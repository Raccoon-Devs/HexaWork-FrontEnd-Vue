import { EvaluacionDeTrabajo } from "../../evaluacionDeTrabajo/EvaluacionDeTrabajo";

export class ServicioRealizarEvaluacionDeTrabajo{
    
    static pasarADominio(evaluacionAtributos: any): EvaluacionDeTrabajo{

        return EvaluacionDeTrabajo.crear(
            {
                idEvaluacion: evaluacionAtributos.idEvaluacion,
                preguntas: evaluacionAtributos.preguntas,
                puntuaciones: evaluacionAtributos.puntuaciones,
                puntuacionPromedio: evaluacionAtributos.puntuacionPromedio,
                trabajo: {
                    idRelacion: evaluacionAtributos.trabajo.idRelacion,
                    postulacion: evaluacionAtributos.trabajo.postulacion,
                    calendario: evaluacionAtributos.trabajo.calendario,
                    estadoRelacionDeTrabajo: evaluacionAtributos.trabajo.estadoRelacionDeTrabajo
                }
            }
        )
    }
}