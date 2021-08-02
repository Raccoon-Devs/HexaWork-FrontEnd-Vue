import { RelacionDeTrabajoParaDominio } from "../RelacionDeTrabajo/DTORelacionDeTrabajo";
import { RelacionDeTrabajo, RelacionDeTrabajoPropiedades } from "../RelacionDeTrabajo/RelacionDeTrabajo";
import { PasarADominio } from "./PasarADominio";

export class ServicioListarRelacionesDeTrabajo {

    static pasarADominio(relacionAtributos: RelacionDeTrabajoParaDominio): RelacionDeTrabajoParaDominio {
        const datosRelacionTrabajo: RelacionDeTrabajoPropiedades = new PasarADominio().relacionDeTrabajoADominio(relacionAtributos)
        const relacionDeTrabajo = RelacionDeTrabajo.crear(datosRelacionTrabajo)
        return relacionDeTrabajo
    }
}
