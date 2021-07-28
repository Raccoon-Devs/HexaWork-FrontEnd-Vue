import { RelacionDeTrabajo, RelacionDeTrabajoPropiedades } from "../RelacionDeTrabajo/RelacionDeTrabajo"
import { EvaluacionDeTrabajoPropiedades } from "./EvaluacionDeTrabajo"
import { PreguntasEvaluacionDeTrabajo, PreguntasEvaluacionPropiedades } from "./ValueObjects/PreguntasEvaluacionDeTrabajo"
import { PuntuacionEvaluacionDeTrabajo, PuntuacionEvaluacionPropiedades } from "./ValueObjects/PuntuacionesEvaluacionDeTrabajo"
import { PuntuacionPromedioEvaluacionDeTrabajo } from "./ValueObjects/PuntuacionPromedioEvaluacionDeTrabajo"

type EvaluacionDeTrabajoParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends PreguntasEvaluacionDeTrabajo? PreguntasEvaluacionPropiedades 
    : Type[Property] extends PuntuacionEvaluacionDeTrabajo? PuntuacionEvaluacionPropiedades
    : Type[Property] extends PuntuacionPromedioEvaluacionDeTrabajo? number
    : Type[Property] extends RelacionDeTrabajo? RelacionDeTrabajoPropiedades
    : string
}

export type EvaluacionDeTrabajoParaDominio = EvaluacionDeTrabajoParaDominioMap<EvaluacionDeTrabajoPropiedades>