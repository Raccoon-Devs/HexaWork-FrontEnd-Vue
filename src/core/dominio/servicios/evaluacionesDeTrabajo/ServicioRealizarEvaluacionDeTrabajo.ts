import { EvaluacionDeTrabajoParaDominio } from "../../../dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { EvaluacionDeTrabajo, EvaluacionDeTrabajoPropiedades } from "../../evaluacionDeTrabajo/EvaluacionDeTrabajo";
import { PasarADominioEvaluacion } from "./PasarADominioEvaluacion";
import { PasarADominio } from "../PasarADominio"
import { RelacionDeTrabajoParaDominio } from "../../relacionDeTrabajo/DTORelacionDeTrabajo";
import { Calendario } from "../../valueObjectsComunes/Calendario";
import { EstadoRelacionDeTrabajo } from "../../relacionDeTrabajo/valueObjects/EstadoRelacionDeTrabajo";

export class ServicioRealizarEvaluacionDeTrabajo{
    
    static pasarADominio(evaluacionAtributos: any): EvaluacionDeTrabajo{

        //const relacionDeTrabajo = new PasarADominio().relacionDeTrabajoADominio(evaluacionAtributos.trabajo)
        //const datosEvaluacion= new PasarADominioEvaluacion().aDominio(evaluacionAtributos)
        //console.log(datosEvaluacion)
 
        const a = EvaluacionDeTrabajo.crear(
            {
                idEvaluacion: evaluacionAtributos.idEvaluacion,
                preguntas: {pregunta1: "a", pregunta2: "a", pregunta3: "a", pregunta4: "a", pregunta5:"a"},
                puntuaciones: {puntuacion1:1, puntuacion2:2, puntuacion3:3, puntuacion4: 4, puntuacion5:5},
                puntuacionPromedio: 4,
                trabajo: {
                    idRelacion: "1",
                    postulacion: evaluacionAtributos.trabajo.postulacion,
                    calendario: [Calendario.crear({horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"})],
                    estadoRelacionDeTrabajo: EstadoRelacionDeTrabajo.crear(1)
                }
            }
        )

        return EvaluacionDeTrabajo.crear(
            {
                idEvaluacion: evaluacionAtributos.idEvaluacion,
                preguntas: {pregunta1: "a", pregunta2: "a", pregunta3: "a", pregunta4: "a", pregunta5:"a"},
                puntuaciones: {puntuacion1:1, puntuacion2:2, puntuacion3:3, puntuacion4: 4, puntuacion5:5},
                puntuacionPromedio: 4,
                trabajo: {
                    idRelacion: "1",
                    postulacion: evaluacionAtributos.trabajo.postulacion,
                    calendario: [Calendario.crear({horaInicio: "2020-08-08 05:05:55", horaFin: "2020-08-08 06:05:55"})],
                    estadoRelacionDeTrabajo: EstadoRelacionDeTrabajo.crear(1)
                }
            }
        )
    }
}