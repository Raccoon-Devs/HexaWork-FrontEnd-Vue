import { EvaluacionDeTrabajoParaDominio } from "@/core/dominio/evaluacionDeTrabajo/DTOEvaluacionDeTrabajo";
import { EvaluacionDeTrabajo, EvaluacionDeTrabajoPropiedades } from "../../evaluacionDeTrabajo/EvaluacionDeTrabajo";
import { PasarADominioEvaluacion } from "./PasarADominioEvaluacion";
//import  { } from "../relacionesDeTrabajo/servicioCrearRelacionDeTrabajo"

export class ServicioCrearOfertaDeTrabajo{
    
    static pasarADominio(evaluacionAtributos: EvaluacionDeTrabajoParaDominio): EvaluacionDeTrabajo{

        //evaluacionAtributos.trabajo = new PasarADominiorelacion().aDominio(evaluacionAtributos.trabajo)
        //se pasa la oferta de trabajo al dominio
        //const datosEvaluacion: EvaluacionDeTrabajoPropiedades = new PasarADominioEvaluacion().aDominio(evaluacionAtributos)
        
        return EvaluacionDeTrabajo.crear(datosEvaluacion)
    }
}