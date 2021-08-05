import { RelacionDeTrabajo, RelacionDeTrabajoPropiedades } from "../relacionDeTrabajo/RelacionDeTrabajo"
import { EvaluacionDeTrabajoPropiedades } from "./EvaluacionDeTrabajo"
import { PreguntasEvaluacionDeTrabajo, PreguntasEvaluacionPropiedades } from "./valueObjects/PreguntasEvaluacionDeTrabajo"
import { PuntuacionEvaluacionDeTrabajo, PuntuacionEvaluacionPropiedades } from "./valueObjects/PuntuacionesEvaluacionDeTrabajo"
import { PuntuacionPromedioEvaluacionDeTrabajo } from "./valueObjects/PuntuacionPromedioEvaluacionDeTrabajo"

type EvaluacionDeTrabajoParaDominioMap<Type> = {
    [Property in keyof Type]
    : Type[Property] extends PreguntasEvaluacionDeTrabajo? PreguntasEvaluacionPropiedades 
    : Type[Property] extends PuntuacionEvaluacionDeTrabajo? PuntuacionEvaluacionPropiedades
    : Type[Property] extends PuntuacionPromedioEvaluacionDeTrabajo? number
    : Type[Property] extends RelacionDeTrabajo? RelacionDeTrabajoPropiedades
    : string
}

export type EvaluacionDeTrabajoParaDominio = EvaluacionDeTrabajoParaDominioMap<EvaluacionDeTrabajoPropiedades>