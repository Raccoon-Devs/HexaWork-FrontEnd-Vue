import { EvaluacionDeTrabajoParaDominio } from "@/core/dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { EvaluacionDeTrabajo, EvaluacionDeTrabajoPropiedades } from "../../evaluacionDeTrabajo/EvaluacionDeTrabajo";
import { PasarADominioEvaluacion } from "./PasarADominioEvaluacion";
import { PasarADominio } from "../PasarADominio"
import { RelacionDeTrabajoParaDominio } from "../../relacionDeTrabajo/DTORelacionDeTrabajo";

export class ServicioRealizarEvaluacionDeTrabajo{
    
    static pasarADominio(evaluacionAtributos: EvaluacionDeTrabajoParaDominio): EvaluacionDeTrabajo{

        //const relacionDeTrabajo = new PasarADominio().relacionDeTrabajoADominio(evaluacionAtributos.trabajo)
   
        const datosEvaluacion: EvaluacionDeTrabajoPropiedades = new PasarADominioEvaluacion().aDominio(evaluacionAtributos)
        
        return EvaluacionDeTrabajo.crear(evaluacionAtributos)
    }
}