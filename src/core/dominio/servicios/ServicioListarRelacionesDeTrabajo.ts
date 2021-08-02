import { RelacionDeTrabajoParaDominio } from "../relacionDeTrabajo/DTORelacionDeTrabajo";
import { RelacionDeTrabajo, RelacionDeTrabajoPropiedades } from "../relacionDeTrabajo/RelacionDeTrabajo";
import { PasarADominio } from "./PasarADominio";

export class ServicioListarRelacionesDeTrabajo {

    static pasarADominio(relacionAtributos: RelacionDeTrabajoParaDominio): RelacionDeTrabajoParaDominio {
        const datosRelacionTrabajo: RelacionDeTrabajoPropiedades = new PasarADominio().relacionDeTrabajoADominio(relacionAtributos)
        const relacionDeTrabajo = RelacionDeTrabajo.crear(datosRelacionTrabajo)
        return relacionDeTrabajo
    }
}
