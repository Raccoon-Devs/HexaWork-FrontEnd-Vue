import { RelacionDeTrabajoParaDominio } from "../../relacionDeTrabajo/DTORelacionDeTrabajo";
import { RelacionDeTrabajo, RelacionDeTrabajoPropiedades } from "../../relacionDeTrabajo/RelacionDeTrabajo";
import { PasarADominio } from "../PasarADominio";

export class ServicioListarRelacionesPorEvaluar{
    
    static pasarADominio(relacionAtributos: RelacionDeTrabajoParaDominio): RelacionDeTrabajo{

        const datosRelacion: RelacionDeTrabajoPropiedades = new PasarADominio().relacionDeTrabajoADominio(relacionAtributos)

        return RelacionDeTrabajo.crear(datosRelacion)
    }
}
