import { MostrarRelacionesDeTrabajoActivas } from "../../../aplicacion/servicios/MostrarRelacionesDeTrabajoActivas";
import { UIPuertoRelacionesDeTrabajo } from "../../../aplicacion/ui/relacionesDeTrabajo/UIPuertoRelacionesDeTrabajo";
import { AdaptadorTIRelacionesDeTrabajo } from "../../adaptadores/adaptadoresIntegracion/adaptadorTIRelacionesDeTrabajo";

//Test Mostrar Relaciones de Trabajo Activas
test('Mostrar Relaciones de Trabajo Activas', () => {

    const puertoRelaciones: UIPuertoRelacionesDeTrabajo = new MostrarRelacionesDeTrabajoActivas()
    expect(puertoRelaciones.listarRelacionesDeTrabajoUI(new AdaptadorTIRelacionesDeTrabajo()).length).toBe(1);
});