import { EvaluacionDeTrabajoParaDominio } from "@/core/dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo"

const evaluaciones: EvaluacionDeTrabajoParaDominio[] = []

export function realizarEvaluacion(evaluacion: EvaluacionDeTrabajoParaDominio): {statusCode: number, mensaje:string}{

    evaluacion = {
        ...evaluacion,
        idEvaluacion : (evaluaciones.length+1).toString()
    }
    
    evaluaciones.push(evaluacion)
   
    return {statusCode: 201, mensaje: "Evaluación realizada con éxito"}
}
